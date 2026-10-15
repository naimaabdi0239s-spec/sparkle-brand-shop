import {createFileRoute} from '@tanstack/react-router';
import {PolicyPage} from '@/components/policy-page';
import {productInfo} from '@/lib/policies';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/product-info')({head:()=>pageHead(productInfo.title,productInfo.description),component:()=> <PolicyPage policy={productInfo}/>});
