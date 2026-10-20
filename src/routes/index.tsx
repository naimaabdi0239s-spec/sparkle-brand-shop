import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButterSection, OilSection, PairingsSection, StorySection, ReviewsSection, Newsletter } from "@/components/store-sections";
import { pageHead } from "@/lib/catalog";
import hero from "@/assets/ag-golden-hero-wide.jpg";

export const Route = createFileRoute("/")({
  head: () => pageHead("Meet your new daily ritual", "Hand-whipped body butters and rose-infused body oils, handcrafted by A Gabrielle."),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="hero">
        <img
          className="hero-image"
          src={hero}
           alt="A Gabrielle body oils and whipped body butters among golden sunlight and green botanicals"
          fetchPriority="high"
        />
        <div className="hero-content">
          <p className="eyebrow">A Gabrielle Essentials</p>
          <h1 className="hero-title">Meet your new daily ritual</h1>
          <p className="hero-sub">Hand-whipped body butters and rose-infused body oils, handcrafted by A Gabrielle.</p>
          <div className="hero-actions">
              <Button asChild className="btn btn-default">
                <Link to="/shop">
                Shop
                <ArrowRight className="ml-2" />
                </Link>
              </Button>
          </div>
        </div>
      </section>

      <ButterSection />
      <OilSection />
      <PairingsSection />
      <StorySection />
      <ReviewsSection />
      <Newsletter />
    </main>
  );
}
