import logo from '@/assets/logo.asset.json';
import founder from '@/assets/founder.asset.json';
import heroOriginal from '@/assets/hero-original.asset.json';
import brown from '@/assets/brown-sugar.asset.json';
import teakwood from '@/assets/teakwood-butter.asset.json';
import vanilla from '@/assets/vanilla-butter.asset.json';
import unscented from '@/assets/unscented-butter.asset.json';
import unscentedOil from '@/assets/unscented-oil.asset.json';
import vanillaOil from '@/assets/vanilla-oil.asset.json';
import teakwoodOil from '@/assets/teakwood-oil.asset.json';
import unscentedSet from '@/assets/unscented-set.asset.json';
import vanillaSet from '@/assets/vanilla-set.asset.json';
import teakwoodSet from '@/assets/teakwood-set.asset.json';

function resolveAsset(a: { url?: string } | string | undefined): string {
  const url = typeof a === 'string' ? a : a?.url;
  if (!url) return '';
  if (url.startsWith('/')) {
    const host = (import.meta.env as any).VITE_ASSET_HOST ?? 'https://sparkle-brand-shop.lovable.app';
    return `${host}${url}`;
  }
  return url;
}

export const images = { logo: resolveAsset(logo), founder: resolveAsset(founder), hero: resolveAsset(heroOriginal) };
export type Product = { slug: string; name: string; kind: 'butter' | 'oil'; image: string; scent: string; prices: [number, number]; ingredients: string };
const butterIngredients = 'Organic shea butter, almond oil, avocado oil and castor oil.';
export const butterDescription = 'A rich, hydrating whipped body butter made with organic shea butter, almond oil, avocado oil, and castor oil.';
export const oilDescription = 'A rose-infused blend of sunflower, almond, and castor oils that deeply nourishes and moisturizes dry, tight skin, leaving it soft and glowing.';
export const products: Product[] = [
  { slug: 'brown-sugar-vanilla', name: 'Brown Sugar Vanilla', kind: 'butter', image: resolveAsset(brown), scent: 'Sweet, soft brown sugar and cinnamon with a hint of vanilla bean.', prices: [14, 24], ingredients: butterIngredients },
  { slug: 'mahogany-teakwood', name: 'Mahogany Teakwood', kind: 'butter', image: resolveAsset(teakwood), scent: 'Cedarwood and oakwood blended with warm mahogany for a rich, woodsy scent. Unisex and uplifting.', prices: [14, 24], ingredients: butterIngredients },
  { slug: 'vanilla-bean', name: 'Vanilla Bean', kind: 'butter', image: resolveAsset(vanilla), scent: 'Creamy, sweet, warm vanilla bean, perfect for any season.', prices: [14, 24], ingredients: butterIngredients },
  { slug: 'unscented', name: 'Unscented', kind: 'butter', image: resolveAsset(unscented), scent: 'No added fragrance. Great for sensitive noses or layering under your favorite perfume.', prices: [14, 24], ingredients: butterIngredients },
  { slug: 'unscented-oil', name: 'Unscented', kind: 'oil', image: resolveAsset(unscentedOil), scent: 'No added fragrance. Great for sensitive noses or layering under your favorite perfume.', prices: [9, 18], ingredients: 'Rosehip oil, sunflower oil, sweet almond oil, castor oil, and vitamin E.' },
  { slug: 'vanilla-bean-oil', name: 'Vanilla Bean', kind: 'oil', image: resolveAsset(vanillaOil), scent: 'Creamy, sweet, warm vanilla bean, perfect for any season.', prices: [9, 18], ingredients: 'Rosehip, sweet almond, grape seed, sunflower, and castor oils.' },
  { slug: 'mahogany-teakwood-oil', name: 'Mahogany Teakwood', kind: 'oil', image: resolveAsset(teakwoodOil), scent: 'Cedarwood and oakwood blended with warm mahogany for a rich, woodsy scent. Unisex and uplifting.', prices: [9, 18], ingredients: 'Sunflower, sweet almond, castor, and rosehip oils.' },
];

export const butters = products.filter(p => p.kind === 'butter');
export const oils = products.filter(p => p.kind === 'oil');
export const pairings = [
  { oil: 'unscented-oil', image: resolveAsset(unscentedSet), butters: ['brown-sugar-vanilla', 'mahogany-teakwood', 'vanilla-bean', 'unscented'] },
  { oil: 'vanilla-bean-oil', image: resolveAsset(vanillaSet), butters: ['brown-sugar-vanilla', 'mahogany-teakwood', 'vanilla-bean'] },
  { oil: 'mahogany-teakwood-oil', image: resolveAsset(teakwoodSet), butters: ['mahogany-teakwood', 'vanilla-bean', 'unscented'] },
];

export const money = (n: number) => `$${n.toFixed(2)}`;
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | A Gabrielle` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | A Gabrielle` }, { property: 'og:description', content: description }] };
}
