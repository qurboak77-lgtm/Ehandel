"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product, CartItem, User, AuthContextValue, CartContextValue, ProvidersProps } from "../lib/types";

const CartContext = createContext<CartContextValue | undefined>(undefined);
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem("ehandel_cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function getStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem("ehandel_user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function getUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem("ehandel_users");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: User[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("ehandel_users", JSON.stringify(users));
}

export function Providers({ children }: ProvidersProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setCart(getStoredCart());
    setUser(getStoredUser());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("ehandel_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (user) {
      window.localStorage.setItem("ehandel_user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("ehandel_user");
    }
  }, [user]);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((current) => current.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart]
  );

  const login = (email: string, password: string) => {
    const storedUsers = getUsers();
    const match = storedUsers.find((entry) => entry.email === email && entry.password === password);
    if (!match) return false;
    setUser({ email, password });
    return true;
  };

  const logout = () => setUser(null);

  const register = (email: string, password: string) => {
    if (!email || !password) return false;
    const storedUsers = getUsers();
    if (storedUsers.some((entry) => entry.email === email)) return false;
    const newUsers = [...storedUsers, { email, password }];
    saveUsers(newUsers);
    setUser({ email, password });
    return true;
  };

  const cartValue: CartContextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  };

  const authValue: AuthContextValue = {
    user,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={authValue}>
      <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
    </AuthContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart måste användas inom Providers");
  }
  return context;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth måste användas inom Providers");
  }
  return context;
}
