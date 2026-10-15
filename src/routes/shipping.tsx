import {createFileRoute} from '@tanstack/react-router';
import {PolicyPage} from '@/components/policy-page';
import {shipping} from '@/lib/policies';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/shipping')({head:()=>pageHead(shipping.title,shipping.description),component:()=> <PolicyPage policy={shipping}/>});
