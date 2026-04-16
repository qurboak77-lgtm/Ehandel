"use client";

import type { ProductVariantGroup, SelectedVariant } from "../lib/types";

interface VariantSelectorProps {
  variantGroups: ProductVariantGroup[];
  selectedVariants: SelectedVariant[];
  onVariantChange: (groupId: string, variantId: string) => void;
}

export default function VariantSelector({
  variantGroups,
  selectedVariants,
  onVariantChange
}: VariantSelectorProps) {
  const getSelectedVariantForGroup = (groupId: string) => {
    return selectedVariants.find(sv => sv.groupId === groupId)?.variantId;
  };

  return (
    <div className="variant-selector">
      {variantGroups.map((group) => (
        <div key={group.id} className="variant-group">
          <h4 className="variant-group-title">{group.name}</h4>
          <div className="variant-options">
            {group.variants.map((variant) => {
              const isSelected = getSelectedVariantForGroup(group.id) === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => onVariantChange(group.id, variant.id)}
                  className={`variant-option ${isSelected ? 'selected' : ''}`}
                >
                  {variant.name}
                  {variant.priceModifier && variant.priceModifier > 0 && (
                    <span className="price-modifier">
                      +{variant.priceModifier} kr
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <style jsx>{`
        .variant-selector {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .variant-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .variant-group-title {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          margin: 0;
        }

        .variant-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .variant-option {
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          background: white;
          color: #374151;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          min-width: 60px;
        }

        .variant-option:hover {
          border-color: #d1d5db;
          background: #f9fafb;
        }

        .variant-option.selected {
          border-color: #2563eb;
          background: #eff6ff;
          color: #1d4ed8;
        }

        .price-modifier {
          font-size: 0.75rem;
          font-weight: 400;
          color: #059669;
        }

        .variant-option.selected .price-modifier {
          color: #047857;
        }

        @media (max-width: 768px) {
          .variant-options {
            gap: 0.375rem;
          }

          .variant-option {
            padding: 0.625rem 0.875rem;
            font-size: 0.8125rem;
            min-width: 50px;
          }
        }
      `}</style>
    </div>
  );
}