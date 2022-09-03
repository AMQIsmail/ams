import React,{Component, Fragment} from 'react';
import { Container } from 'react-bootstrap';
import Navberr from "../components/home_component/Nav";
import Futer from '../components/home_component/Footer';
import '../asset/css/privacy.css';
class PrivacyPolicy extends Component{  
    render(){
        return (
        <Fragment>
            <Navberr />
              <div className='privacyBack'>
                <Container>
                    <article className="privacy-text">
                        <h2>PRIVACY POLACY PAGE.</h2>
                        <p>1. এই গোপনীয়তা নীতি পৃষ্ঠায়, কীভাবে অতি সহজে একজন ওয়েব ডেভলপার হতে শিখবেন সে সম্পর্কে এখানে কিছু টিপস এবং কৌশল রয়েছে৷<br></br>
                           1. Here are some tips and tricks on how to learn to be a web developer easily on this privacy policy page.</p>
                        <p>2. আপনি যখন শিখবেন প্র্যাকটিস করবেন প্রতিদিন সকালে ভোরে উঠে প্র্যাকটিস করবেন, কারণ সকালে মানুষের মাথায় এগুলো মুখস্ত থাকে ভালো, এজন্য সকালে প্র্যাকটিস করবেন।<br></br>
                           2. When you learn to practice, get up early every morning to practice because it is better to memorize them in the morning, so practice in the morning.</p>
                        <p>3. আপনি যদি প্রতিদিন কিছু সময়ের জন্য অতীতে শেখা পাঠগুলিকে রিভিশন করেন, তবে এগুলি আপনার হৃদয়ের গভীরে চলে যাবে এবং আপনি সেগুলি ভুলে যাবেন না।<br></br>
                           3. If you revistion the lessons learned in the past for a while every day, then these will go deep into your heart and you will not forget them.</p>
                        <p>4. আপনাদেরকে এখানে শুরু থেকে, কাজ শেখা শুরু থেকে টাকা হাতে আসা পর্যন্ত, এখানে সমস্ত বিষয় শেখানো হবে, এবং পথ দেখিয়ে নেয়া হবে, তো আপনার যদি এখানে শিখতে থাকেন অবশ্যই কিছু একটা করতে পারবেন।<br></br>
                           4. You will be taught everything from the beginning here, from the beginning of learning the job to earning money, and you will be shown the way, so if you continue to learn here, you must do something</p>
                        <p>5. আপনি চাইলে পার্ট টাইম শিখতে পারেন।  ধরুন আপনি 8 ঘন্টা বা 12 ঘন্টা কাজ করেন এবং আপনি যদি বাকী চার থেকে পাঁচ ঘন্টা বা দুই থেকে তিন ঘন্টা প্রতিদিন দেন তবে আপনি এটি এক বছর আগে শিখতে পারবেন এবং আয়ের একটি ভাল উত্স করতে পারবেন।<br></br>
                           5. You can learn it part time if you want. Suppose you work 8 hours, or 12 hours, and if you give the remaining four to five hours or two to three hours daily, you can learn it a year earlier and make a good source of income.</p>
                        <p>6. তাছাড়া এই ওয়েবসাইটে আপনাদের সাপোর্ট পাওয়ার একটা ব্যবস্থা রয়েছে।<br></br>
                           6. Moreover, this website has a system to get your support.<br></br>
                           Thank you very much for reading the articles.</p>
                        <p></p>
                        <p></p>
                    </article>
                </Container>
              </div>
            <Futer />
        </Fragment>
        )
    }
}
export default PrivacyPolicy;