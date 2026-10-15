import {createFileRoute} from '@tanstack/react-router';
import {CataloguePage} from '@/components/catalogue-page';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/shop')({head:()=>pageHead('Shop All','Shop A Gabrielle hand-whipped body butters and rose-infused luxe body oils.'),component:()=> <CataloguePage/>});
