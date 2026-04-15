import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      <section>
        <h1 className="section-title">Välkommen till din e-handel</h1>
        <p>Bläddra bland produkter, lägg i kundvagnen och genomför din beställning.</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 className="section-title">Produkter</h2>
        <div className="grid grid-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
