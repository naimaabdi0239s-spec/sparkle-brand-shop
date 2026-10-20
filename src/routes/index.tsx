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
        <div className="hero-shade"/><div className="hero-content"><p className="eyebrow">A Gabrielle · A little luxury for your skin</p><h1>Meet your new<br/><em>daily ritual.</em></h1><p>A rich, hand-whipped body butter. A nourishing, rose-infused oil. A moment of care your skin will thank you for.</p><Button asChild className="btn btn-default btn-lg"><Link to="/shop">Shop the products <ArrowRight/></Link></Button></div><div className="hero-caption">Made with care. Made for you.</div>
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
