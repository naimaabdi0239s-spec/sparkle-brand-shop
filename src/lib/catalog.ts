import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/catalog";
import hero from "@/assets/ag-hero-wide.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead(
      "Meet your new daily ritual",
      "Hand-whipped body butters and rose-infused body oils, handcrafted by A Gabrielle."
    ),
    links: [{ rel: "preload", as: "image", href: hero }],
  }),
  component: Index,
});

function Index() {
  const [Sections, setSections] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;

    import("@/components/store-sections")
      .then((mod) => {
        if (mounted) setSections(mod);
      })
      .catch((error) => {
        console.error("Failed to load homepage sections:", error);
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
        <div className="hero-shade" />

        <div className="hero-content">
          <p className="eyebrow">
            A Gabrielle · A little luxury for your skin
          </p>

          <h1>
            Meet your new
            <br />
            <em>daily ritual.</em>
          </h1>

          <p>
            A rich, hand-whipped body butter. A nourishing, rose-infused oil.
            A moment of care your skin will thank you for.
          </p>

          <Button asChild className="btn btn-default btn-lg">
            <Link to="/shop">
              Shop the products <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="hero-caption">Made with care. Made for you.</div>
      </section>

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
        <div aria-hidden className="sections-loading" />
      )}
    </main>
  );
}
