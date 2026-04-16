import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, SelectedVariant } from './types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, selectedVariants: SelectedVariant[], quantity?: number) => void;
  removeItem: (productId: string, selectedVariants: SelectedVariant[]) => void;
  updateQuantity: (productId: string, selectedVariants: SelectedVariant[], quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Hjälpfunktion för att beräkna totalpris för en cart item
const calculateItemTotal = (product: Product, selectedVariants: SelectedVariant[]): number => {
  let total = product.basePrice;

  // Lägg till prismodifieringar från varianter
  selectedVariants.forEach(selectedVariant => {
    const variantGroup = product.variantGroups.find(group => group.id === selectedVariant.groupId);
    if (variantGroup) {
      const variant = variantGroup.variants.find(v => v.id === selectedVariant.variantId);
      if (variant?.priceModifier) {
        total += variant.priceModifier;
      }
    }
  });

  return total;
};

// Hjälpfunktion för att skapa en unik nyckel för cart items baserat på produkt och valda varianter
const createCartItemKey = (productId: string, selectedVariants: SelectedVariant[]): string => {
  const sortedVariants = [...selectedVariants].sort((a, b) => a.groupId.localeCompare(b.groupId));
  const variantString = sortedVariants.map(v => `${v.groupId}:${v.variantId}`).join('|');
  return `${productId}|${variantString}`;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, selectedVariants, quantity = 1) => {
        const itemKey = createCartItemKey(product.id, selectedVariants);
        const totalPrice = calculateItemTotal(product, selectedVariants);

        set((state) => {
          const existingItemIndex = state.items.findIndex(item => {
            const existingKey = createCartItemKey(item.product.id, item.selectedVariants);
            return existingKey === itemKey;
          });

          if (existingItemIndex >= 0) {
            // Uppdatera befintlig item
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: updatedItems[existingItemIndex].quantity + quantity,
              totalPrice: totalPrice * (updatedItems[existingItemIndex].quantity + quantity)
            };
            return { items: updatedItems };
          } else {
            // Lägg till ny item
            return {
              items: [...state.items, {
                product,
                selectedVariants,
                quantity,
                totalPrice: totalPrice * quantity
              }]
            };
          }
        });
      },

      removeItem: (productId, selectedVariants) => {
        const itemKey = createCartItemKey(productId, selectedVariants);

        set((state) => ({
          items: state.items.filter(item => {
            const existingKey = createCartItemKey(item.product.id, item.selectedVariants);
            return existingKey !== itemKey;
          })
        }));
      },

      updateQuantity: (productId, selectedVariants, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, selectedVariants);
          return;
        }

        const itemKey = createCartItemKey(productId, selectedVariants);
        const product = get().items.find(item => {
          const existingKey = createCartItemKey(item.product.id, item.selectedVariants);
          return existingKey === itemKey;
        })?.product;

        if (!product) return;

        const totalPrice = calculateItemTotal(product, selectedVariants);

        set((state) => ({
          items: state.items.map(item => {
            const existingKey = createCartItemKey(item.product.id, item.selectedVariants);
            if (existingKey === itemKey) {
              return {
                ...item,
                quantity,
                totalPrice: totalPrice * quantity
              };
            }
            return item;
          })
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.totalPrice, 0);
      }
    }),
    {
      name: 'qurbo-cart', // namn för localStorage
      // Automatisk synkronisering till localStorage
    }
  )
);