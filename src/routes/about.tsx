import {createFileRoute} from '@tanstack/react-router';
import {StorySection} from '@/components/store-sections';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/about')({head:()=>pageHead('About Us','The story of A Gabrielle and founder Ariel G. Harris. From my skin, to yours.'),component:()=> <main><StorySection/></main>});
