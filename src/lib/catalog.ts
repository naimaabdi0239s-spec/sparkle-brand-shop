import logo from '@/assets/logo.asset.json';
import founder from '@/assets/founder.asset.json';
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

export const images = {logo:logo.url,founder:founder.url};
export type Product = {slug:string;name:string;kind:'butter'|'oil';image:string;scent:string;prices:[number,number];ingredients:string};
const butterIngredients='Organic shea butter, almond oil, avocado oil and castor oil.';
export const butterDescription='A rich, hydrating whipped body butter made with organic shea butter, almond oil, avocado oil, and castor oil.';
export const oilDescription='A rose-infused blend of sunflower, almond, and castor oils that deeply nourishes and moisturizes dry, tight skin, leaving it soft and glowing.';
export const products:Product[]=[
{slug:'brown-sugar-vanilla',name:'Brown Sugar Vanilla',kind:'butter',image:brown.url,scent:'Sweet, soft brown sugar and cinnamon with a hint of vanilla bean.',prices:[14,24],ingredients:butterIngredients},
{slug:'mahogany-teakwood',name:'Mahogany Teakwood',kind:'butter',image:teakwood.url,scent:'Cedarwood and oakwood blended with warm mahogany for a rich, woodsy scent. Unisex and perfect for any season.',prices:[14,24],ingredients:butterIngredients},
{slug:'vanilla-bean',name:'Vanilla Bean',kind:'butter',image:vanilla.url,scent:'Creamy, sweet, warm vanilla bean, perfect for any season.',prices:[14,24],ingredients:butterIngredients},
{slug:'unscented',name:'Unscented',kind:'butter',image:unscented.url,scent:'No added fragrance. Great for sensitive noses or layering under your favorite perfume.',prices:[14,24],ingredients:butterIngredients},
{slug:'unscented-oil',name:'Unscented',kind:'oil',image:unscentedOil.url,scent:'No added fragrance. Great for sensitive noses or layering under your favorite perfume.',prices:[9,18],ingredients:'Sunflower Oil, Almond Oil, Castor Oil.'},
{slug:'vanilla-bean-oil',name:'Vanilla Bean',kind:'oil',image:vanillaOil.url,scent:'Creamy, sweet, warm vanilla bean, perfect for any season.',prices:[9,18],ingredients:'Sunflower Oil, Almond Oil, Castor Oil, Fragrance, Rose Petals.'},
{slug:'mahogany-teakwood-oil',name:'Mahogany Teakwood',kind:'oil',image:teakwoodOil.url,scent:'Cedarwood and oakwood blended with warm mahogany for a rich, woodsy scent. Unisex and perfect for any season.',prices:[9,18],ingredients:'Sunflower Oil, Almond Oil, Castor Oil, Fragrance, Rose Petals.'},
];
export const butters=products.filter(p=>p.kind==='butter');
export const oils=products.filter(p=>p.kind==='oil');
export const pairings=[{oil:'unscented-oil',image:unscentedSet.url,butters:['brown-sugar-vanilla','mahogany-teakwood','vanilla-bean','unscented']},{oil:'vanilla-bean-oil',image:vanillaSet.url,butters:['brown-sugar-vanilla','vanilla-bean']},{oil:'mahogany-teakwood-oil',image:teakwoodSet.url,butters:['mahogany-teakwood']}];
export const money=(n:number)=>`$${n.toFixed(2)}`;
export function pageHead(title:string,description:string){return {meta:[{title:`${title} | A Gabrielle`},{name:'description',content:description},{property:'og:title',content:`${title} | A Gabrielle`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};}
