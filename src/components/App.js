import React, { Fragment } from "react"; //npx create-react-app amq, npm install, npm run build, cd amq, npm start
import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm install react-router-dom --save
import 'font-awesome/css/font-awesome.min.css';   //npm install --save font-awesome
import HomePage from '../pages/Home'
import AboutPage from "../pages/About";
import TermsAndCondition from '../pages/Terms_and_conditions';
import PrivacyPolicy from '../pages/Privacy_policy';
import ContactPage from "../pages/Contact";
import NoPage from "../pages/Nopage";
import ApppIndex from "../components/todo_component/AppInsertHome";
import PracticeReact from "../components/practice/Practice";
import reportWebVitals from "../reportWebVitals";

//import Myroute from "./component/route/MyRoute";

function App(){
  return (
   <Fragment> 
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>  
          <Route path="About" element={<AboutPage />} />
          <Route path="Terms_and_conditions" element={<TermsAndCondition />} />
          <Route path="Privacy_policy" element={<PrivacyPolicy />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="Practice" element={<PracticeReact />} />
          <Route path="*" element={<NoPage />} />        
      </Routes>
    </BrowserRouter>
   </Fragment>
  );
}
export default App;
reportWebVitals();