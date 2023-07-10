import "./Login.css";
import { Link } from "react-router-dom";

const SignupFrom=()=>{
  const handleFormSubmit=(event)=>{
    event.preventDefault();
  }
}


export default function Login() {
  

  return (
        <div className="cl">
            <div className="app-wrapper">
              <div>
              <div className="ti"><img src="./images/a.png" alt="" /></div>
              </div>
              <form className="form-wrapper">
                <div className="name">
                <label className="label5">নাম</label>
                <input className="input10"type="text" n/>

                </div>

                

                <div className="email">
                <label className="label6">মেইল</label>
                <input className="input11"type="email" name="email" />


                <div className="password">
                <label className="label7">পাসওয়ার্ড</label>
                <input className="input12"type="password" />

                </div>
                <div>
                  <button className="submit">
                  <div className="label0">সাইন আপ</div></button>
                </div>

                </div>
              </form>
            </div>

           </div>
           
  );
}