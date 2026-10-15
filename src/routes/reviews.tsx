import {createFileRoute} from '@tanstack/react-router';
import {ReviewsSection} from '@/components/store-sections';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/reviews')({head:()=>pageHead('Reviews','Read customer reviews of A Gabrielle handmade body care and share your experience.'),component:()=> <main><ReviewsSection/></main>});
