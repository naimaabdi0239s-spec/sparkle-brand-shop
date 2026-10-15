import {createFileRoute} from '@tanstack/react-router';
import {PolicyPage} from '@/components/policy-page';
import {returns} from '@/lib/policies';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/returns')({head:()=>pageHead(returns.title,returns.description),component:()=> <PolicyPage policy={returns}/>});
