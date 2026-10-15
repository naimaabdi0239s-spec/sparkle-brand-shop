import {createFileRoute} from '@tanstack/react-router';
import {PolicyPage} from '@/components/policy-page';
import {terms} from '@/lib/policies';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/terms')({head:()=>pageHead(terms.title,terms.description),component:()=> <PolicyPage policy={terms}/>});
