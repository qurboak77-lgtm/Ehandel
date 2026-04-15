export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  price: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  email: string;
  password: string;
}

export interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  total: number;
}

export interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (email: string, password: string) => boolean;
}

export interface ProvidersProps {
  children: React.ReactNode;
}
