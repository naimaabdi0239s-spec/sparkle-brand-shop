import logo from "@/assets/logo.asset.json";
import founder from "@/assets/founder.asset.json";
import heroOriginal from "@/assets/hero-original.asset.json";
import brown from "@/assets/brown-sugar.asset.json";
import teakwood from "@/assets/teakwood-butter.asset.json";
import vanilla from "@/assets/vanilla-butter.asset.json";
import unscented from "@/assets/unscented-butter.asset.json";
import unscentedOil from "@/assets/unscented-oil.asset.json";
import vanillaOil from "@/assets/vanilla-oil.asset.json";
import teakwoodOil from "@/assets/teakwood-oil.asset.json";
import unscentedSet from "@/assets/unscented-set.asset.json";
import vanillaSet from "@/assets/ag-vanilla-set.png";
import teakwoodSet from "@/assets/mahogany-pairing.webp.asset.json";

function resolveAsset(a: { url?: string } | string | undefined): string {
  const url = typeof a === "string" ? a : a?.url;
  if (!url) return "";
  if (url.startsWith("/")) {
    const host = (import.meta.env as any).VITE_ASSET_HOST ?? "https://sparkle-brand-shop.lovable.app";
    return `${host}${url}`;
  }
  return url;
}

export const images = {
  logo: resolveAsset(logo),
  founder: resolveAsset(founder),
  hero: resolveAsset(heroOriginal),
};

export type Product = {
  slug: string;
  name: string;
  kind: "butter" | "oil";
  image: string;
  scent: string;
  prices: [number, number];
  glow: string;
  howToUse: string;
  itsGiving: string;
  ingredients: string;
  allergyNote: string;
  pairsWith?: string;
};

export const butterDescription =
  "A rich, hand-whipped body butter made with virgin organic unrefined shea butter, ideal for dry skin. It locks in moisture, soothes, and nourishes, leaving your skin soft and glowing.";

export const oilDescription =
  "A rose-infused blend of sunflower, almond, and castor oils that deeply nourishes and moisturizes dry, tight skin, leaving it soft and glowing.";

const butterHowTo =
  "Gently massage all over your body and let the butter melt into your skin. Reapply to areas that need extra hydration.";

const butterGiving =
  "Virgin organic unrefined shea butter, rich in essential fatty acids for deep moisture.";

const butterBaseIngredients =
  "Virgin Organic Unrefined Shea Butter, Almond Oil, Avocado Oil, Castor Oil, Vitamin E (Sunflower Oil, Safflower Oil, Rice Bran Oil, Apricot Oil)";

const oilHowTo =
  "For an all-over glow, gently massage onto your body. To really lock in moisture, apply right after your shower while your skin is still slightly damp. Reapply to areas that need extra hydration.";

const oilGiving =
  "Rich in essential fatty acids and vitamins A and E.";

const allergyNote = "Contains almond oil (tree nut).";

export const products: Product[] = [
  {
    slug: "unscented",
    name: "Unscented",
    kind: "butter",
    image: resolveAsset(unscented),
    scent: "No added fragrance. Great for sensitive noses or layering under your favorite perfume.",
    prices: [14, 24],
    glow: butterDescription,
    howToUse: butterHowTo,
    itsGiving: butterGiving,
    ingredients: butterBaseIngredients,
    allergyNote,
  },
  {
    slug: "brown-sugar-vanilla",
    name: "Brown Sugar Vanilla",
    kind: "butter",
    image: resolveAsset(brown),
    scent: "Sweet, soft brown sugar and cinnamon with a hint of vanilla bean.",
    prices: [14, 24],
    glow: butterDescription,
    howToUse: butterHowTo,
    itsGiving: butterGiving,
    ingredients: `${butterBaseIngredients}, Fragrance`,
    allergyNote,
  },
  {
    slug: "vanilla-bean",
    name: "Vanilla Bean",
    kind: "butter",
    image: resolveAsset(vanilla),
    scent: "Creamy, sweet, warm vanilla bean, perfect for any season.",
    prices: [14, 24],
    glow: butterDescription,
    howToUse: butterHowTo,
    itsGiving: butterGiving,
    ingredients: `${butterBaseIngredients}, Fragrance`,
    allergyNote,
  },
  {
    slug: "mahogany-teakwood",
    name: "Mahogany Teakwood",
    kind: "butter",
    image: resolveAsset(teakwood),
    scent: "Cedarwood and oakwood blended with warm mahogany for a rich, woodsy scent. Unisex and perfect for any season.",
    prices: [14, 24],
    glow: butterDescription,
    howToUse: butterHowTo,
    itsGiving: butterGiving,
    ingredients: `${butterBaseIngredients}, Fragrance`,
    allergyNote,
  },
  {
    slug: "unscented-oil",
    name: "Unscented",
    kind: "oil",
    image: resolveAsset(unscentedOil),
    scent: "No added fragrance. Great for sensitive noses or layering under your favorite perfume.",
    prices: [9, 18],
    glow: oilDescription,
    howToUse: oilHowTo,
    itsGiving: oilGiving,
    ingredients: "Sunflower Oil, Almond Oil, Castor Oil",
    allergyNote,
    pairsWith: "Unscented Body Butter",
  },
  {
    slug: "vanilla-bean-oil",
    name: "Vanilla Bean",
    kind: "oil",
    image: resolveAsset(vanillaOil),
    scent: "Creamy, sweet, warm vanilla bean, perfect for any season.",
    prices: [9, 18],
    glow: oilDescription,
    howToUse: oilHowTo,
    itsGiving: oilGiving,
    ingredients: "Sunflower Oil, Almond Oil, Castor Oil, Fragrance, Rose Petals",
    allergyNote,
    pairsWith: "Brown Sugar Vanilla or Vanilla Bean Body Butter",
  },
  {
    slug: "mahogany-teakwood-oil",
    name: "Mahogany Teakwood",
    kind: "oil",
    image: resolveAsset(teakwoodOil),
    scent: "Cedarwood and oakwood blended with warm mahogany for a rich, woodsy scent. Unisex and perfect for any season.",
    prices: [9, 18],
    glow: oilDescription,
    howToUse: oilHowTo,
    itsGiving: oilGiving,
    ingredients: "Sunflower Oil, Almond Oil, Castor Oil, Fragrance, Rose Petals",
    allergyNote,
    pairsWith: "Mahogany Teakwood Body Butter",
  },
];

export const butters = products.filter((p) => p.kind === "butter");
export const oils = products.filter((p) => p.kind === "oil");

export const pairings = [
  {
    oil: "unscented-oil",
    image: resolveAsset(unscentedSet),
    butters: ["brown-sugar-vanilla", "mahogany-teakwood", "vanilla-bean", "unscented"],
  },
  {
    oil: "vanilla-bean-oil",
    image: resolveAsset(vanillaSet),
    butters: ["brown-sugar-vanilla", "vanilla-bean"],
  },
  {
    oil: "mahogany-teakwood-oil",
    image: resolveAsset(teakwoodSet),
    butters: ["unscented", "mahogany-teakwood"],
  },
];

export const money = (n: number) => `$${n.toFixed(2)}`;

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | A Gabrielle` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | A Gabrielle` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
