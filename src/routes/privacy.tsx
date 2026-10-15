import {createFileRoute} from '@tanstack/react-router';
import {PolicyPage} from '@/components/policy-page';
import {privacy} from '@/lib/policies';
import {pageHead} from '@/lib/catalog';
export const Route=createFileRoute('/privacy')({head:()=>pageHead(privacy.title,privacy.description),component:()=> <PolicyPage policy={privacy}/>});
