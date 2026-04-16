"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { User, AuthContextValue } from "../lib/types";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

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

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (user) {
      window.localStorage.setItem("ehandel_user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("ehandel_user");
    }
  }, [user]);

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

  const authValue: AuthContextValue = {
    user,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth måste användas inom Providers");
  }
  return context;
}
