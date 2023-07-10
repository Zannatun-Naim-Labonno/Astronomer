import "./Gallary.css";
import { Link } from "react-router-dom";


export default function Gallary() {
  




  return (

<div className="gallary">

<Link to="">
   <button type="button">
    
   <div className="f1">
   <div className="sob">সব</div>
   
   </div>
 </button>
 </Link>

 
 <Link to="/GK">
   <button type="button">
    
   <div className="f2">
   <div className="sobi">ছবি</div>
   
   </div>
 </button>
</Link>


<Link to="/Pic">
   <button type="button">
    
   <div className="f3">
   <div className="vid">ভিডিও</div>
   
   </div>
 </button>
</Link>

<div className="gal1"><img src="./images/Gal1.png" alt="" /></div>
<div className="gal2"><img src="./images/gal2.png" alt="" /></div>
<div className="gal3"><img src="./images/gal3.png" alt="" /></div>
<div className="gal4"><img src="./images/gal4.png" alt="" /></div>

<div className="galt1">গ্রহ</div>
<div className="galt2">পৃথিবী</div>
<div className="galt3">ছায়াপথ</div>
<div className="galt4">শনি গ্রহ</div>
<div className="galt5">ভিডিও</div>


<video className="gal6" autoPlay loop muted >
      <source src="./images/val1.mp4" />
      </video>



 <link href="https://fonts.maateen.me/kalpurush/font.css" rel="stylesheet"></link>
</div>
   
   

  );
}
