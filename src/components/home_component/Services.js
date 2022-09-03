import React, {Component, Fragment} from "react";
import { Container, Row, Col } from "react-bootstrap";
import callLogo from '../../asset/img/icon/call.png';
import manLogo from '../../asset/img/icon/man.png';
import sendLogo from '../../asset/img/icon/send.png';

class Services extends Component{
    render(){
        return(
            <Fragment>
                <Container>
                   <Row className="text-center">
                       <h1><ins>Service Section.</ins></h1>
                       <Col lg={4} md={6} sm={12}>
                           <div className="serviceCard">
                               <img src={callLogo} />
                               <h2>Call to my phone</h2>
                               <p>This is my caller information This is my caller informationThis</p>
                           </div>
                       </Col>

                       <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard">
                               <img src={manLogo} />
                               <h2>Man with contact</h2>
                               <p>This is my caller information This is my caller informationThis</p>
                           </div>
                       </Col>

                       <Col lg={4} md={6} sm={12}>
                           <div className="serviceCard">
                               <img src={sendLogo} />
                               <h2>Send to message</h2>
                               <p>This is my caller information This is my caller informationThis</p>
                           </div>
                       </Col>
                   </Row>
                </Container>
            </Fragment>
        )
    }
}
export default Services;