export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  priceModifier?: number; // extra kostnad för denna variant
}

export interface ProductVariantGroup {
  id: string;
  name: string; // t.ex. "Storlek", "Färg"
  variants: ProductVariant[];
}

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  basePrice: number;
  images: ProductImage[];
  variantGroups: ProductVariantGroup[];
}

export interface SelectedVariant {
  groupId: string;
  variantId: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants: SelectedVariant[];
  totalPrice: number; // beräknad pris inklusive variantmodifieringar
}

export interface User {
  email: string;
  password: string;
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
