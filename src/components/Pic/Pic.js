import "./Pic.css";
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




<video className="val1" autoPlay loop muted >
      <source src="./images/val1.mp4" />
      </video>

      <video className="val2" autoPlay loop muted >
      <source src="./images/val2.mp4" />
      </video>

      <video className="val3" autoPlay loop muted >
      <source src="./images/val4.mp4" />
      </video>

     
<div className="pic1">স্যাটেলাইট</div>
<div className="pic2">সূর্য এবং পৃথিবী</div>
<div className="pic3">পৃথিবী এবং শুক্রগ্রহ</div>

 <link href="https://fonts.maateen.me/kalpurush/font.css" rel="stylesheet"></link>
</div>
   
   

  );
}
