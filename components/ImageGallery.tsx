"use client";

import { useState } from "react";
import type { ProductImage } from "../lib/types";

interface ImageGalleryProps {
  images: ProductImage[];
  productTitle: string;
}

export default function ImageGallery({ images, productTitle }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="image-gallery">
      {/* Huvudbild */}
      <div className="main-image-container">
        <img
          src={images[selectedImage].url}
          alt={images[selectedImage].alt || productTitle}
          className="main-image"
        />
      </div>

      {/* Miniatyrbilder */}
      {images.length > 1 && (
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            >
              <img
                src={image.url}
                alt={image.alt || `${productTitle} thumbnail ${index + 1}`}
                className="thumbnail-image"
              />
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .image-gallery {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .main-image-container {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .main-image:hover {
          transform: scale(1.02);
        }

        .thumbnail-container {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding: 0.5rem 0;
        }

        .thumbnail {
          flex-shrink: 0;
          border: 2px solid transparent;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: border-color 0.2s ease;
          background: none;
          padding: 0;
          cursor: pointer;
        }

        .thumbnail:hover,
        .thumbnail.active {
          border-color: #2563eb;
        }

        .thumbnail-image {
          width: 80px;
          height: 60px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .thumbnail-container {
            gap: 0.5rem;
          }

          .thumbnail-image {
            width: 60px;
            height: 45px;
          }
        }
      `}</style>
    </div>
  );
}