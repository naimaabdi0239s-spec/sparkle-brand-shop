import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/catalog";
import hero from "@/assets/ag-hero-wide.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead("Meet your new daily ritual", "Hand-whipped body butters and rose-infused body oils, handcrafted by A Gabrielle."),
    // Preload hero image to improve LCP
    links: [
      { rel: "preload", as: "image", href: hero },
    ],
  }),
  component: Index,
});

function Index() {
  // Dynamically load the below-the-fold sections to reduce initial JS bundle
  const [Sections, setSections] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;
    import("@/components/store-sections").then((mod) => {
      if (mounted) setSections(mod);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main>
      <section className="hero">
        <img
          className="hero-image"
          src={hero}
          alt="A Gabrielle body oil and whipped body butter, surrounded by sunlit botanicals"
          fetchPriority="high"
        />
        <div className="hero-content">
          <h1 className="hero-title">Meet your new daily ritual</h1>
          <p className="hero-sub">Hand-whipped body butters and rose-infused body oils</p>
          <div className="hero-actions">
            <Link to="/products" className="inline-block">
              <Button>
                Shop
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Render sections only after dynamic import to keep initial bundle small */}
      {Sections ? (
        <>
          <Sections.ButterSection />
          <Sections.OilSection />
          <Sections.PairingsSection />
          <Sections.StorySection />
          <Sections.ReviewsSection />
          <Sections.Newsletter />
        </>
      ) : (
        // lightweight placeholder while sections load
        <div aria-hidden className="sections-loading" />
      )}
    </main>
  );
}
