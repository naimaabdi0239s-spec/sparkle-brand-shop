import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, pairings, money, type Product } from "@/lib/catalog";
import { ProductCard } from "@/components/store-sections";
import { useBag } from "@/components/store-shell";

export function ProductPage({ product: p }: { product: Product }) {
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { add } = useBag();

  const pairing = pairings.find((x) => x.oil === p.slug);
  const related = pairing
    ? pairing.butters
        .map((s) => products.find((x) => x.slug === s))
        .filter((x): x is Product => !!x)
    : products.filter((x) => x.kind === p.kind && x.slug !== p.slug);

  const isOil = p.kind === "oil";

  return (
    <main className="section product-detail">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{p.name}</span>
      </nav>

      <div className="product-detail-grid">
        <img
          className="detail-photo"
          src={p.image}
          alt={`${p.name} ${isOil ? "luxe body oil" : "whipped body butter"}`}
          fetchPriority="high"
          decoding="async"
        />

        <div className="detail-copy">
          <p className="eyebrow">{isOil ? "The finishing touch" : "Rich in care"}</p>
          <h1>{p.name}</h1>
          <p className="product-subtitle">
            {isOil ? "Luxe Rose-Infused Body Oil" : "Hydrating Whipped Body Butter"}
          </p>
          <p className="detail-price">{money(p.prices[size] ?? p.prices[0])}</p>
          <p>{p.scent}</p>
          <p>{p.glow}</p>

          <fieldset className="variants">
            <legend>Size</legend>
            {[0, 1].map((i) => (
              <Button
                key={i}
                type="button"
                variant="outline"
                className={`btn btn-outline ${size === i ? "variant-selected" : ""}`}
                aria-pressed={size === i}
                onClick={() => setSize(i)}
              >
                {i === 0 ? "4 oz" : "8 oz"} · {money(p.prices[i] ?? p.prices[0])}
              </Button>
            ))}
          </fieldset>

          <div className="add-row">
            <div className="quantity">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Decrease quantity"
                disabled={quantity === 1}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus />
              </Button>
              <span aria-live="polite">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              >
                <Plus />
              </Button>
            </div>
            <Button className="btn btn-default" onClick={() => add(p, size, quantity)}>
              Add to bag <ArrowRight />
            </Button>
          </div>

          <p className="checkout-note">
            Handmade · Please allow 5–7 business days before shipping.
            <br />
            U.S. shipping only. Free shipping on orders over $75.
          </p>

          <div className="product-accordion-group">
            <details open>
              <summary>{isOil ? "Luxe Full Body Glow" : "Full Body Glow"}</summary>
              <p>{p.glow}</p>
            </details>

            <details>
              <summary>How to Use</summary>
              <p>{p.howToUse}</p>
            </details>

            <details>
              <summary>It’s Giving</summary>
              <p>{p.itsGiving}</p>
            </details>

            <details>
              <summary>Ingredients & Allergy Note</summary>
              <p><strong>Ingredients:</strong> {p.ingredients}</p>
              <p className="allergy-warning"><strong>Allergy note:</strong> {p.allergyNote}</p>
            </details>

            {p.pairsWith && (
              <details>
                <summary>Pairs With</summary>
                <p>{p.pairsWith}</p>
              </details>
            )}

            <details>
              <summary>Shipping & Exchanges</summary>
              <p>
                Every A Gabrielle order is handmade, so please allow 5–7 business days for your order
                to be prepared before it ships. Once it ships, you’ll receive an email with tracking
                information.
              </p>
              <p>
                All sales are final. Damaged or incorrect orders must be reported within 7 days of
                delivery with your order number and a photo.
              </p>
              <p>
                <Link to="/shipping" className="text-link">
                  Shipping policy
                </Link>{" "}
                ·{" "}
                <Link to="/returns" className="text-link">
                  Return & Exchange Policy
                </Link>
              </p>
            </details>
          </div>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">Made with care. Made for you.</p>
          <h2>{isOil ? "Find your perfect pairing." : "Your everyday, a little softer."}</h2>
        </div>
      </div>

      <div className={`product-grid ${pairing ? `pairing-count-${related.length}` : ""}`}>
        {related.map((prod) => (
          <ProductCard key={prod.slug} product={prod} />
        ))}
      </div>
    </main>
  );
}
