import React,{Component, Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navberr from "../components/home_component/Nav";
import mdismail from '../asset/img/mdismail.jpg';
import Futer from '../components/home_component/Footer';
import '../asset/css/about.css';
class AboutPage extends Component{
    render(){
        return (
<Fragment>
    <Navberr />
            <div className='mainDiv'>
                <Container>
                <div className='divCenter'>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <img className='mdismail' src={mdismail} />
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <h1>আমাদের উদ্দেশ্য।</h1>
                        <p className='AboutPara'>
                           মানুষ এখানে এসে ভালো কিছু শিখবে এবং ভালো কিছু জানবে।<br></br>
                           এবং টেকনোলজি নিয়ে বিভিন্ন কোর্স এখানে ফ্রীতে দেওয়া হবে ইনশাআল্লাহ।<br></br>
                           বর্তমান আমরা ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট এর কাজ শেখাবো, <br></br>
                           এবং বিভিন্ন প্রবলেমের সলিউশন দেয়া হবে ইনশাআল্লাহ।
                        </p>
                    </Col>
                </Row>
                </div>
                </Container>
            </div>
    <Futer />
</Fragment>
        )
    }
}
export default AboutPage;


