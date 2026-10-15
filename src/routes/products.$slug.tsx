import {createFileRoute,notFound} from '@tanstack/react-router';
import {products,pageHead} from '@/lib/catalog';
import {ProductPage} from '@/components/product-page';
export const Route=createFileRoute('/products/$slug')({loader:({params})=>{const product=products.find(p=>p.slug===params.slug);if(!product)throw notFound();return product;},head:({loaderData})=>pageHead(loaderData?`${loaderData.name} ${loaderData.kind==='oil'?'Luxe Body Oil':'Whipped Body Butter'}`:'Product unavailable',loaderData?.scent??'A Gabrielle handcrafted body care.'),component:Product});
function Product(){const product=Route.useLoaderData();return <ProductPage key={product.slug} product={product}/>}
