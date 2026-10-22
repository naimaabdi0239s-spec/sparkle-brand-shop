import {createContext,useContext,useState,type ReactNode} from 'react';
import {Link} from '@tanstack/react-router';
import {Menu,ShoppingBag,X,Plus,Minus,Instagram,Facebook,ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {images,money,type Product} from '@/lib/catalog';
import {Dialog,DialogContent,DialogTitle} from '@/components/ui/dialog';
import {RelaunchPopup} from '@/components/relaunch-popup';
type Line={product:Product;size:number;quantity:number};
const BagContext=createContext<{add:(p:Product,s:number,q:number)=>void}>({add:()=>{}});
export const useBag=()=>useContext(BagContext);
function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: "inline-block", flexShrink: 0 }}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.49V8.52a8.27 8.27 0 0 0 4.84 1.56V6.69h-.93z"/>
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/agabrielle.co" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram size={15} /> <span>Instagram</span>
      </a>
      <a href="https://www.facebook.com/share/1ZTY6rBUWz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook size={15} /> <span>Facebook</span>
      </a>
      <a href="https://www.tiktok.com/@a.gabrielleskin" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <TikTokIcon size={15} /> <span>TikTok</span>
      </a>
    </div>
  );
}
export function StoreShell({children}:{children:ReactNode}){
 const [mobile,setMobile]=useState(false);const [open,setOpen]=useState(false);const [lines,setLines]=useState<Line[]>([]);
 function add(product:Product,size:number,quantity:number){setLines(old=>{const match=old.find(l=>l.product.slug===product.slug&&l.size===size);return match?old.map(l=>l===match?{...l,quantity:l.quantity+quantity}:l):[...old,{product,size,quantity}]});setOpen(true)}
 function change(i:number,delta:number){setLines(old=>old.map((l,n)=>n===i?{...l,quantity:l.quantity+delta}:l).filter(l=>l.quantity>0))}
 const count=lines.reduce((s,l)=>s+l.quantity,0),total=lines.reduce((s,l)=>s+(l.product.prices[l.size] ?? l.product.prices[0])*l.quantity,0);
 return <BagContext.Provider value={{add}}><header className="site-header"><div className="nav-inner"><Button className="btn btn-ghost btn-icon mobile-toggle" variant="ghost" size="icon" aria-label={mobile?'Close navigation':'Open navigation'} onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</Button><nav className="nav-left" aria-label="Collections"><Link to="/shop/body-butters">Body butters</Link><Link to="/shop/body-oils">Body oils</Link><Link to="/product-pairings">Product pairings</Link></nav><Link to="/" className="brand"><img src={images.logo} alt="A Gabrielle Essentials"/></Link><nav className="nav-right" aria-label="Main navigation"><Link to="/about">About us</Link><Link to="/reviews">Reviews</Link><Button variant="ghost" size="icon" className="btn btn-ghost btn-icon" aria-label={`Shopping bag, ${count} items`} onClick={()=>setOpen(true)}><ShoppingBag/>{count>0&&<span className="bag-count">{count}</span>}</Button></nav></div>{mobile&&<nav className="mobile-nav" onClick={()=>setMobile(false)}><Link to="/shop">Shop all</Link><Link to="/shop/body-butters">Body butters</Link><Link to="/shop/body-oils">Body oils</Link><Link to="/product-pairings">Product pairings</Link><Link to="/about">About us</Link><Link to="/reviews">Reviews</Link><Link to="/contact">Get in touch</Link></nav>}</header><div className="announcement"><div>{[0,1,2].map(i=><span key={i}><span>We’re back and so is your glow — enjoy 20% off for our relaunch</span><span>Free shipping for orders over $75</span><span>Handmade in small batches</span></span>)}</div></div>{children}<footer className="site-footer"><div className="footer-main"><div><Link to="/" className="footer-brand"><img src={images.logo} alt="A Gabrielle Essentials"/></Link></div><div><h3>Shop the ritual</h3><Link to="/shop">Shop all</Link><Link to="/shop/body-butters">Body butters</Link><Link to="/shop/body-oils">Body oils</Link><Link to="/product-pairings">Product pairings</Link></div><div><h3>A little guidance</h3><Link to="/product-info">Product information</Link><Link to="/shipping">Shipping</Link><Link to="/returns">Returns</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms of service</Link></div><div><h3>Stay close</h3><Link to="/about">About us</Link><Link to="/reviews">Reviews</Link><Link to="/contact">Get in touch <ArrowUpRight size={13}/></Link><a href="mailto:info@agabrielle.co">info@agabrielle.co</a><SocialLinks/></div></div><div className="footer-bottom"><span>© 2026 A Gabrielle. All rights reserved.</span></div></footer><Dialog open={open} onOpenChange={setOpen}><DialogContent variant="drawer" className="store-bag" aria-describedby="bag-description"><DialogTitle>Your bag ({count})</DialogTitle><p id="bag-description" className="quiet-label">A little luxury for your skin</p>{lines.length===0?<div className="bag-empty"><p>Your bag is empty.</p><Button asChild className="btn btn-default" onClick={()=>setOpen(false)}><Link to="/shop">Shop the products</Link></Button></div>:<>{lines.map((line,i)=><div className="bag-item" key={line.product.slug+line.size}><img src={line.product.image} alt={line.product.name}/><div className="bag-item-info"><Link to="/products/$slug" params={{slug:line.product.slug}} onClick={()=>setOpen(false)}><h3>{line.product.name}</h3></Link><p>{line.product.kind==='oil'?'Luxe body oil':'Whipped body butter'} · {line.size===0?'4 oz':'8 oz'} · {money(line.product.prices[line.size] ?? line.product.prices[0])}</p><div className="quantity"><Button variant="ghost" size="icon" aria-label={`Decrease ${line.product.name}`} onClick={()=>change(i,-1)}><Minus/></Button><span>{line.quantity}</span><Button variant="ghost" size="icon" aria-label={`Increase ${line.product.name}`} onClick={()=>change(i,1)}><Plus/></Button></div></div><Button variant="ghost" size="icon" aria-label={`Remove ${line.product.name}`} onClick={()=>setLines(old=>old.filter((_,n)=>n!==i))}><X/></Button></div>)}<div className="bag-total"><span>Subtotal</span><strong>{money(total)}</strong></div><p className="quiet-label">{total>75?'Your order qualifies for free shipping.':`Free shipping on orders over $75.`}</p><p className="checkout-note">Online checkout is not connected yet. Contact us for order assistance.</p><Button asChild className="btn btn-default bag-checkout"><a href="mailto:info@agabrielle.co?subject=Order%20assistance">Contact us about your order</a></Button></>}</DialogContent></Dialog><RelaunchPopup/></BagContext.Provider>
}
