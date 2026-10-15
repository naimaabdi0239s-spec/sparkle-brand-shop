import {createFileRoute} from '@tanstack/react-router';
import {PairingsSection} from '@/components/store-sections';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/product-pairings')({head:()=>pageHead('Product Pairings','Pair A Gabrielle rose-infused body oils with your favorite whipped body butter.'),component:()=> <main><PairingsSection/></main>});
