import "./Story.css";
import { Link } from "react-router-dom";


export default function Story() {
  

  return (
    <div className="k">
        <div  className="sf">সায়েন্স ফিকশন গল্প</div>
        <div  className="sfh1">  শনির ষড়ভুজ আতঙ্ক</div>
        <div  className="sft1">১৯৮১ সালে মহাকাশযান ভেয়জার শনির খুব 
        কাছ থেকে প্রদক্ষিণ করার সময়, উওর মেরুতে একটি রহস্যময় অবয়বের সন্ধান পায়।  
        </div>

         <div className="sfk2">অবয়বের সন্ধান পায়। কয়েক দশক বিজ্ঞানীদের ধোঁয়াশায় রাখার পর,
             ২০০৬.................................. 


             <Link to="/SF1">
   <button type="button">
   <div className="sfb">আরো পড়ুন</div>
 </button>
</Link>

 </div>
<div className="sfh2"> বৃহস্পতির অনন্ত ঝড়</div>
 <div className="sft2"> আপনারা যারা ছবিতে মহারাজ বৃহস্পতিকে দেখবেন, তারা গ্রহে একটা লাল রঙের 
 একটা স্পট লক্ষ্য করবেন। ধারণা করা হয় এই লাল বিন্দুটি প্রথম পর্যবেক্ষণ করা হয় 
 ১৬৬৫ সালের দিকে জ্যোতির্বিদ.........</div>


 <Link to="/SF2">
   <button type="button">
   <div className="sfb1">আরো পড়ুন</div>
 </button>
</Link>



<div className="sfh3">ইউরোপের হারানো সাগর</div>
<div className="sf1"><img src="./images/sf1.png" alt="" /></div>
<div className="sft3">বৃহস্পতির আবিষ্কত ৭৯ টি উপগ্রহের মধ্যে সবচেয়ে ছোট উপগ্রহ হলো ইউরোপা (Europa)। </div>
<div className="sft4">রহস্যময় উপগ্রহটির পরিবেশ অনেকটাই পৃথিবীর সাথে সাদৃশ্যপূর্ণ।
 অক্সিজেনের বায়ুমন্ডলসমৃদ্ধ..............</div>

 <Link to="/SF3">
   <button type="button">
   <div className="sfb2">আরো পড়ুন</div>
 </button>
</Link>

  <div className="sf2"><img src="./images/sf2.png" alt="" /></div>     




  <div className="sf3"><img src="./images/sf3.png" alt="" /></div>   
    
</div>

  );
}
