import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';  //npm install react-bootstrap bootstrap@5.1.3
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/style.css';
import Navberr from "./Nav";

class Topbanner extends Component{
  render(){
     return(
    <Fragment>
     <Container fluid={true} className='homeTopFixBanner p-0'>
       <div className='homeTopBannerOverlay'>
       <Navberr />
        <Container className="homeTopContent">
          <Row>
            <Col className='text-center'>
               <h2 className='homeTopTitle'>بسم الله الرحمن الرحيم</h2>
               <h2 className='homeTopTitle'>আসসালামু আলাইকুম।</h2>
               <h3 className='homeTopTitle'>WelCome My Website</h3>
               <p className='homeTopSubTitle'>এই জায়গা কাজ শেখার জায়গা এবং সমস্যার সমাধান পাওয়ার জায়গা।</p>
               <p className='homeTopSubTitle'>তবে শর্ত হল ধৈর্য ধরেন তাড়াহুড়ো করবেন না এদিক-ওদিক ছোটাছুটি করবেন না।<br></br> 
               ধৈর্য ধরে এক জায়গায় লেগে থাকুন ভালো কিছু শিখুন, আপনাদেরকে এখানে MERN Stick ডেভেলপার হিসেবে গড়ে তোলা হবে।</p>
               <p className='homeTopSubTitle'>এবং বিভিন্ন সমস্যার সমাধান দেওয়া হবে, MERN Stick কি তা নিচে বিস্তারিত দেওয়া হবে।</p>
            </Col>
          </Row>
        </Container>
       </div>
     </Container>
    </Fragment>
     )
  }
}
export default Topbanner;
