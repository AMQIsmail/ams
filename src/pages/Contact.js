import React,{Component, Fragment} from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Navberr from "../components/home_component/Nav";
import Futer from '../components/home_component/Footer';
import '../asset/css/contact.css';
class ContactPage extends Component{  
    render(){
        return (
        <Fragment>
            <Navberr />
            <div className='mainCon'>
            <Container>
               <Row>
                  <Col lg={12} md={12} sm={12}>
                        <div className='contactTitle'>
                            <h2>Our Contact Information.</h2>
                            <p>
                               আপনারা ভিডিও দেখে যে জায়গাটা না বোঝেন সে জায়গার একটা স্ক্রিনশট,
                               অথবা ওয়েবসাইটের Content পড়ে যে জায়গাটা না বোঝেন
                                সে জায়গার একটা স্ক্রিনশট দিয়ে Submit করুন।
                               আপনাদেরকে 24 ঘন্টার মধ্যে রিপ্লাই দেওয়ার চেষ্টা করা হবে
                               তবে শর্ত হলো আপনার ভিডিওর ভিতর থেকে যে অংশ না বুঝেন অথবা ওয়েবসাইটের আর্টিকেল পড়ে যে অংশ না বোঝেন
                               সে অংশের একটা স্ক্রিনশট এখানে দিয়ে সাবমিট করুন, তবেই আপনি রিপ্লাই পাবেন এবং সলিউশন পাবেন।
                               এখানে আপনার নাম ইমেইল Address এবং Message মোবাইল নাম্বার দিয়ে সাবমিট করুন,
                               কারণ আপনার ই-মেইলে আপনার সলিউশন দিয়ে মেইল করা হবে
                               অথবা ফোন করে, বলে সমস্যা সমাধান করে দেওয়া হবে।
                               ধন্যবাদ আপনাদের জন্য শুভকামনা রইল।
                            </p>
                            <hr />
                        </div>
                  </Col>
               </Row>

              <Row>
                        <Col lg={6} md={12} sm={12}>
                        <div className='contactIn'>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <i className='fa fa-envelope-o'></i>
                                    <h4>ismailsahab4@gmail.com</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <i className='fa fa-mobile mobile'></i>
                                    <h4>01874631310</h4>
                                </Col>
                            </Row>
                        </div>
                        </Col>
                  

                  <Col lg={6} md={12} sm={12}>
                  <div className='formItems'>
                      <Row>
                          <Col>
                          
                            <form>
                                    <h2>Submit Your Problem Then Receive your solution.</h2>
                                    <h5>Type Your Name:</h5>
                                    <input type='text' required placeholder='Type Your Name.....'></input>
                                    <h5>Type Your Valid Email:</h5>
                                    <input type='email' required placeholder='Type Your Valid Email.....'></input>
                                    <h5>Type Your Mobile Number:</h5>
                                    <input type='text' required placeholder='Type Your Mobile Number.....'></input>
                                    <h5>Type Your Message:</h5>
                                    <textarea className='texarea' type='text' required placeholder='Type Your Message.....'></textarea><br></br>
                                    <div className='agree'>
                                        <h6>I Agree to the Terms of Service and I read the Privacy</h6>
                                        <input style={{width: '30px'}} type='checkbox' name='Terms' value='Ok'></input>
                                    </div>
                                        <Navbar>                  
                                        <Nav className="me-auto">
                                        <Nav.Link  as={Link} to='/Terms_and_conditions'><p className='terms'>Terms and Conditions |</p></Nav.Link>
                                        <Nav.Link as={Link} to='/Privacy_policy'><p className='terms'>Privacy Policy</p></Nav.Link>
                                        </Nav>
                                    </Navbar>
                                    <textarea  className='termsfild' type='text' required value='
                                    PRIVACY POLACY PAGE.

                                    1. এই গোপনীয়তা নীতি পৃষ্ঠায়, কীভাবে অতি সহজে একজন ওয়েব ডেভলপার হতে শিখবেন সে সম্পর্কে এখানে কিছু টিপস এবং কৌশল রয়েছে৷
                                    1. Here are some tips and tricks on how to learn to be a web developer easily on this privacy policy page.
                                    
                                    2. আপনি যখন শিখবেন প্র্যাকটিস করবেন প্রতিদিন সকালে ভোরে উঠে প্র্যাকটিস করবেন, কারণ সকালে মানুষের মাথায় এগুলো মুখস্ত থাকে ভালো, এজন্য সকালে প্র্যাকটিস করবেন।
                                    2. When you learn to practice, get up early every morning to practice because it is better to memorize them in the morning, so practice in the morning.
                                    
                                    3. আপনি যদি প্রতিদিন কিছু সময়ের জন্য অতীতে শেখা পাঠগুলিকে রিভিশন করেন, তবে এগুলি আপনার হৃদয়ের গভীরে চলে যাবে এবং আপনি সেগুলি ভুলে যাবেন না।
                                    3. If you revistion the lessons learned in the past for a while every day, then these will go deep into your heart and you will not forget them.
                                    
                                    4. আপনাদেরকে এখানে শুরু থেকে, কাজ শেখা শুরু থেকে টাকা হাতে আসা পর্যন্ত, এখানে সমস্ত বিষয় শেখানো হবে, এবং পথ দেখিয়ে নেয়া হবে, তো আপনার যদি এখানে শিখতে থাকেন অবশ্যই কিছু একটা করতে পারবেন।
                                    4. You will be taught everything from the beginning here, from the beginning of learning the job to earning money, and you will be shown the way, so if you continue to learn here, you must do something
                                    
                                    5. আপনি চাইলে পার্ট টাইম শিখতে পারেন। ধরুন আপনি 8 ঘন্টা বা 12 ঘন্টা কাজ করেন এবং আপনি যদি বাকী চার থেকে পাঁচ ঘন্টা বা দুই থেকে তিন ঘন্টা প্রতিদিন দেন তবে আপনি এটি এক বছর আগে শিখতে পারবেন এবং আয়ের একটি ভাল উত্স করতে পারবেন।
                                    5. You can learn it part time if you want. Suppose you work 8 hours, or 12 hours, and if you give the remaining four to five hours or two to three hours daily, you can learn it a year earlier and make a good source of income.
                                    
                                    6. তাছাড়া এই ওয়েবসাইটে আপনাদের সাপোর্ট পাওয়ার একটা ব্যবস্থা রয়েছে।
                                    6. Moreover, this website has a system to get your support.
                                    Thank you very much for reading the articles.
                                    '></textarea>
                                    
                                    <h5 style={{textAlign: 'center'}}>Submit Your Problem</h5>
                                    <input className='submit' type='submit' value='Submit'></input>
                            </form>
                          </Col>
                      </Row>
                      </div>
                  </Col>
               </Row>
            </Container>
            </div>
            <Futer />
        </Fragment>
        )
    }
}
export default ContactPage;



    
    
 


