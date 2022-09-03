import React,{Component, Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navberr from "../components/home_component/Nav";
import Futer from '../components/home_component/Footer';

class CssPage extends Component{
    render(){
        return (
        <Fragment>
            <Navberr />
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div style={{marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>
                            <h2>Css Gradient Style Circle.</h2>
                            <div style={gradient}>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}></Col>
                </Row>
            </Container>
            <Futer />
        </Fragment>
        )
    }
}
export default CssPage;

const gradient = {
    background: 'conic-gradient(red, yellow, black,  lime, aqua, black, blue, magenta, red, black)',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    margin: '0 auto'
}