import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  

  return (  
    <div className="frem">
    
        <div className="cpp">বিষয়</div>
        

        

        <Link to="/Star">
          <button type="button">
        <div className="sip"><img src="./images/item1.png" alt="" /></div>
        </button>
        </Link>
        
        <div className="moral">স্টার ম্যাপ </div>



        <Link to="/Planet">
          <button type="button">
        <div className="sip1"><img src="./images/item2.png" alt="" /></div>
        </button>
        </Link>
        
        <div className="moral1">গ্রহ </div>






        <Link to="/Gallary">
          <button type="button">
        <div className="sip2"><img src="./images/item3.png" alt="" /></div>
        </button>
        </Link>
        
        <div className="moral2">গ্যালারী </div>


        <Link to="/SP">
          <button type="button">
        <div className="sip3"><img src="./images/item4.png" alt="" /></div>
        </button>
        </Link>
        
        <div className="moral3">স্পেস মিশন </div>


        <Link to="/Story">
          <button type="button">
        <div className="sip4"><img src="./images/item5.png" alt="" /></div>
        </button>
        </Link>
        
        <div className="moral4">সায়েন্স ফিকশন গল্প
</div>


</div>

  );
}