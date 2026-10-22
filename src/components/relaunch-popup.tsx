import {useEffect,useState} from 'react';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import {SignupForm} from '@/components/signup-form';

const KEY='ag-relaunch-popup-dismissed';
export function RelaunchPopup(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{try{if(window.localStorage.getItem(KEY))return}catch{return}const t=window.setTimeout(()=>setOpen(true),6000);return ()=>window.clearTimeout(t)},[]);
  function change(next:boolean){setOpen(next);if(!next){try{window.localStorage.setItem(KEY,'1')}catch{}}}
  return <Dialog open={open} onOpenChange={change}><DialogContent className="relaunch-popup"><p className="eyebrow">We’re back</p><DialogTitle>Enjoy 20% off<br/><em>for our relaunch.</em></DialogTitle><DialogDescription>We’re back and so is your glow. Join the list for relaunch news, new scents, and limited-edition drops.</DialogDescription><SignupForm source="popup"/><button type="button" className="popup-dismiss" onClick={()=>change(false)}>No thanks</button></DialogContent></Dialog>;
}
