import "./Read.css";
import { Link } from "react-router-dom";


export default function Read() {
  

  return (
    <div className="me">
    <div className="lp">অ্যাস্ট্রোনোমার</div>

    <div className="them">
        <img src="./images/image 1.png" alt="" />

    </div>

    <div className="cool">
        <div className="you"><img src="./images/User - Scan.png" alt="" /></div>
        <div className="ren">
        <Link to="/Login">
          <button type="button" className="btnbtn2">
          সাইন আপ
          </button>
        </Link>

        </div>
    </div>

    <div className="poor">

        <div className="rich"><img src="./images/User-plus.svg" alt="" /></div>
        <div className="op">

        <Link to="/Home">
          <button type="button" className="btnbtn3">
          সদস্য
          </button>
        </Link>
        



        </div>
    </div>
</div>
  );
}
