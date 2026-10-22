import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButterSection,
  OilSection,
  PairingsSection,
  StorySection,
  ReviewsSection,
  Newsletter,
} from "@/components/store-sections";
import { pageHead } from "@/lib/catalog";
import hero from "@/assets/ag-golden-hero-wide.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Meet your new daily ritual",
      "Handcrafted whipped body butters and rose-infused body oils by A Gabrielle."
    ),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="hero">
        <img
          className="hero-image"
          src={hero}
          alt="A Gabrielle body oils and whipped body butters among golden sunlight and botanicals"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">A Gabrielle · A little luxury for your skin</p>
          <h1>
            Meet your new<br />daily ritual.
          </h1>
          <p>
            Handcrafted body butters and body oils made to bring a little more care, comfort, and glow
            to your everyday routine.
          </p>
          <div className="hero-actions">
            <Button asChild className="btn btn-default btn-lg">
              <Link to="/shop">
                Shop the Collection <ArrowRight />
              </Link>
            </Button>
            <Link to="/about" className="text-link hero-secondary">
              Discover Our Story
            </Link>
          </div>
        </div>
        <div className="hero-caption">Made with care. Made for you.</div>
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
