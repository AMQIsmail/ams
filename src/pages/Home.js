import React, {Component, Fragment} from 'react';
import { Container } from 'react-bootstrap';
import Topbanner from '../components/home_component/topBanner';
import HomeArticle from '../components/home_component/HomeArticle';
import Futer from '../components/home_component/Footer';

class HomePage extends Component{

   render(){
        return (
            <Fragment>
                <Topbanner />
            <Container>
                
            </Container>
            <HomeArticle />
            <Futer />
            </Fragment>
)
}
}
export default HomePage;



