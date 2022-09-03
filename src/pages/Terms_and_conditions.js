import React,{Component, Fragment} from 'react';
import { Container } from 'react-bootstrap';
import Navberr from "../components/home_component/Nav";
import Futer from '../components/home_component/Footer';
import '../asset/css/terms.css';
class TermsAndCondition extends Component{  
    render(){
        return (
        <Fragment>
            <Navberr />
            
            <div className="terms-box">
            <Container>
            <article className="terms-text">
            <h2>Terms Of Service Page</h2>
            <p>1. ওয়েবসাইট ডিজাইন অথবা ওয়েবসাইট ডেভেলপমেন্ট শেখার জন্য কিছু নিয়ম কানুন আছে।<br></br>
               1. There are some rules for learning website design or website development.</p>
            <p>2. এই কাজটা অনেক কষ্টের এবং অনেক ধৈর্য্য ধরে কাজটা শিখতে হয় একটু লং টাইম নিয়ে কাজটা শিখলে ভালভাবে শেখা যায় এবং নিজের ক্যারিয়ারে ভালো হয়।<br></br>
               2. It takes a lot of hard work and a lot of patience to learn the job.</p>
            <p>3. এই চাকরিতে বিশেষজ্ঞ হওয়ার জন্য প্রচুর অনুশীলন না করলে এই কাজ শেখা সম্ভব নয়।<br></br>
               3. It is not possible to learn this job if you do not have to practice a lot to become an expert in this job.</p>
            <p>4. এ কাজ করতে গেলে প্রচুর সমস্যা সামনে দাঁড় হবে তবে আপনাকে নিজেই সমাধান খুঁজে বের করার ক্ষমতা তৈরি করতে হবে বা কারও কাছ থেকে support পাওয়ার চেষ্টা করতে হবে।<br></br>
               4. There are a lot of problems in doing this, but you have to create the ability to find the solution yourself or try to get support from someone.</p>
            <p>5. আমাদের ওয়েবসাইট থেকে সাপোর্ট পাবেন তবে শর্ত হলো আমাদের ইউটিউব চ্যানেলের ভিডিও দেখে অথবা আমাদের ওয়েবসাইটের কোন কনটেন্ট পড়ে যে  জায়গা না বোঝেন, আপনি যদি সেই জায়গার একটা স্ক্রিনশট দিলে আমরা সমাধান দিয়ে দিব 24 ঘণ্টার মধ্যে।<br></br>
               5. You will get support from our website, but the condition is that if you watch a video on our YouTube channel or don't understand the content of our website, if you give me a screenshot of that place, we will give you the solution with in 24 hours.</p>
            <p>6. আপনারা ওয়েব ডেভলপার হতে গেলে প্রতিদিন চার থেকে পাঁচ ঘন্টা সময় দিতে হবে।<br></br>
               6. If you want to become a web developer, you have to spend four to five hours every day.</p>
            <p>7. আপনি যদি অনলাইন মার্কেটপ্লেসে কাজ করতে চান বা বাইরে কাজ করতে চান তবে আপনাকে প্রাথমিক স্তরের ইংরেজি জানতে হবে এবং আপনি যে চাকরিতে কাজ করতে চান সে বিষয়ে আপনাকে একজন বিশেষজ্ঞ হতে হবে। আপনি চাইলে এই কাজগুলো শিখতে পারেন এবং আপনি  মার্কেটপ্লেসে বা বিদেশে কাজ করতে পারেন।<br></br>
               7. If you want to work in the online marketplace or work outside, you need to know basic English and be an expert in the job you want to work in.  You can learn these jobs if you want and you can work in the marketplace or abroad.</p>
            <h4>I Agree to the Terms of Service and I read the Privacy.</h4>
            <div className="buttons">
            <button className="btn red-btn">Accept</button>
            <button className="btn gray-btn">No Accept</button>
           </div>
         </article>
            
        </Container>
    </div>
            
            <Futer />
        </Fragment>
        )
    }
}
export default TermsAndCondition;