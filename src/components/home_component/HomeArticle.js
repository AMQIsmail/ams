import React, { Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';  //npm install react-bootstrap bootstrap@5.1.3
import '../../asset/css/style.css';

const HomeArticle = () => {

    return (
<Fragment>
<div className='full_div'>
<Container>
    <Row>
      <Col lg={12} md={12} sm={12}><h1 className='h1'>কিভাবে ফুলস্টিক ডেভেলপার হওয়া যায় এবং ফুলস্টিক ডেভেলপার হতে গেলে কি কি শিখতে হবে।</h1></Col>
    </Row>
    <Row>
        <Col lg={4} md={12} sm={12}>
        <div className='addsens'>
             <p>Show Add</p>
        </div>
        </Col>
        <Col lg={8} md={12} sm={12}>
            <article className='content'>
            <h2>
                MERN Stick বলা হয় কাকে এখানে বুঝিয়ে বলা হবে, 
                যে front-end ডেভলপ করতে পারে এবং backend ডেভলপ করতে পারে,
                তাকেই Full Stick ডেভলপার বলে, অথবা MERN Stick ডেভলপার বলে,
                MERN বলতে বোঝায়।<br></br>1. M তে MongoDB Data base বোঝায়, <br></br>
                2. E তে Express.js বোঝায় it is Node.js Framwork, <br></br> 
                3. R তে React.js বোঝায় it is JavaScript Framwork, <br></br>
                4. এবং N তে Node.js বোঝায় it is JavaSvript Runtime.
            </h2>
            <h5>সুতরাং front-end ডেভলপ করার জন্য যেগুলো শিখব তা হল এগুলি,</h5>
               <h4>(1. Html and Html5, 2. Css and css3, 3. Bootstrap5, 4. JavaScript basic, 5. React js)</h4>
            <h5>এবং backend ডেভলপ করার জন্য যা শিখব তা হল এগুলি</h5>
               <h4>(1. Express js, 2. Mongo DB, 3. Node js)</h4>
            </article>
        </Col>
    </Row>
</Container>
</div>
<article className='pContent'>
    <Container>
<Row>
<Col>
    <h2 className='h2Content'>
        বেক এন্ড ডেভলপ করার জন্য আরও বিভিন্ন server-side ল্যাঙ্গুয়েজ রয়েছে যেমন: পিএইচপি, 
        পাইথন আরো বিভিন্ন server-side ল্যাঙ্গুয়েজ রয়েছে, এগুলো ল্যাঙ্গুয়েজ দিয়ে Backend ডেভলপ করা যায়, 
        তবে আমরা জাভাস্ক্রিপ্ট দিয়ে Backend ডেভলপ করা শিখব যেহেতু জাভাস্ক্রিপ্ট দিয়ে আমরা ফ্রন্টের ডেভেলপ করতেছি,
        পরবর্তীতে আমরা চাইলে অন্য অন্য ল্যাঙ্গুয়েজ দিয়ে কাজ করতে পারব      
    </h2>
</Col>
</Row>
    <Row>
        <Col lg={12} md={12} sm={12}>
              <p>
              1. এক নাম্বারে Html and html5 শিখতে হয় এ লেঙ্গুয়েজ হাইপারটেক্সট মার্কআপ ল্যাংগুয়েজ এটি দিয়ে ওয়েব পেজে স্ট্রাকচার তৈরি করতে হয়।<br></br>
              2. দুই নাম্বারে Css3 শিখতে হয় এটি ক্যাস্ক্যাডিং স্টাইল sheet, এ ল্যাঙ্গুয়েজ দিয়ে ওয়েব পেজের ডিজাইন করতে হয়।<br></br>
              3. তিন নাম্বারে Bootstrap শিখতে হয় এটি সিএসএস এর একটি ফ্রেমওয়ার্ক এটি দিয়ে অতি অল্প সময়ে একটি ওয়েবসাইট তৈরি করা যায় এটি একটি পপুলার ফ্রেমওয়ার্ক সিএসএস-এর ফ্রেমওয়ার্ক।<br></br>
              4. নাম্বারে জাভাস্ক্রিপ্ট শিখতে হয় এটি একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ এ ল্যাঙ্গুয়েজ দিয়ে বর্তমান front-end ডেভলপ করা যায় এবং backend ডেভলপ করা যায় একটি একটি পপুলার প্রোগ্রামিং ল্যাঙ্গুয়েজ।<br></br>
              5. পাঁচ নাম্বারে react.js শিখতে হয় এটি জাভাস্ক্রিপ্টের একটি ফ্রেমওয়ার্ক অথবা লাইব্রেরী, এটি পপুলার ফ্রেমওয়ার্ক এটা দিয়ে ওয়েব সাইটের front-end ডেভলপ করা হয়।।<br></br>
              6. নাম্বারে শিখতে হবে আমাদেরকে node.js এটি কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ না এটি জাভাস্ক্রিপ্ট দিয়ে তৈরি একটি রানটাইম।<br></br>
              7. নাম্বারে আমাদেরকে শিখতে হবে express.js এটা হল node.js এর একটি ফ্রেমওয়ার্ক এটা দিয়ে ডাটাবেজের সাথে কমিউনিকেশন করতে হয়।<br></br>
                 এটা খুবই পপুলার একটি Framwork।<br></br>
              8. নাম্বার আমাদেরকে শিখতে হবে MongoDB ডেটাবেজ কিভাবে ব্যবহার করতে হয়, এ ডাটাবেজ এর সাথে আমাদের লগ-ইন রেজিস্ট্রেশন এর ইনফরমেশন save থাকবে,
                 ডেটাবেজে আরো বিভিন্ন বহুৎ ইনফরমেশন save রাখা যায়।
              </p>
        </Col>
    </Row>
    </Container>
</article>
</Fragment>
    )
}
export default HomeArticle;
