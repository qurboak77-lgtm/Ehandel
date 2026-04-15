import { notFound } from "next/navigation";
import { products } from "../../../lib/products";
import ProductDetail from "../../../components/ProductDetail";

interface ProductPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.id === params.id);
  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductDetail product={product} />
    </main>
  );
}
