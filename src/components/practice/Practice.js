import React, { Fragment } from 'react'; 
import { Container } from 'react-bootstrap';
import './style.css';
import style from './practice.module.css';
import  '../../asset/css/My.scss';

import QuizC from '../quiz_app/Quiz';
import Services from '../home_component/Services';
import TodoIndex from '../todo_component/AppInsertHome'
import CssPage from '../../pages/Css';


function PracticeReact(){
    const Pstyle = {
        color: 'red',
        fontSize: '30px',
        backgroundColor: 'black',
        textAlign: 'center'
    }
    return (                          
        <Fragment>  
<QuizC />

        <div className={style.back}>
            <Container>
            <h2 className='hading'>1.Normal css</h2>
            <h1 style={{textAlign:'center', color:'green'}}>2.axtranel css and 3.inline css</h1>
            <p style={Pstyle}>4.Css Objact Property</p>
            <p className='ParaStyle'>5.Sass styleing with My.scss file</p>
                    <Services />    
            </Container>

            <TodoIndex/>
        </div>
        <CssPage />
        </Fragment>
    )}
export default PracticeReact;









// //{ Country  App  1 First Page Application 36}
// import React, { Fragment, useEffect, useState,  } from "react";
// //import Countries from "./Amq";
// import {v4 as uuidv4} from 'uuid';

// const url = 'https://restcountries.com/v3.1/all';
// const PracticeReact = () => {
  
//   const [loding, setLoding] = useState(true);
//   const [error, setError] = useState(null);
//   const [countries, setCounrties] = useState([]);

//   const fetchData = async (url) => {
//           setLoding(true);
//     try {
//     const response = await fetch(url);
//     const data = await response.json();
//     setCounrties(data);
//     setLoding(false);
//     setError(null);
//     //console.log(countries);
//     } catch(error){
//         setLoding(false);
//         setError(error);
//         //console.log(error);
//     }
//   }

//   useEffect(() => {
//      fetchData(url)
//   }, [])
  
//   return (
//   <Fragment>
//   <div>
//      <h1>Country App</h1>
//      {loding && <p style={{color: 'green'}}>.....Pleage wate 5 secant.</p>}
//      {error && <h2 style={{color: 'black'}}>{error.message}</h2>}
//     {countries.map((axtra) => {
//         return (
//            <div id={uuidv4()}>
//             <img src={axtra.flags.png} alt={axtra.name.common} />
//             <h1>{axtra.name.common}</h1>
//             </div>

//         )
//     })}


//      {/* {countries && <Countries countryData={countries}/> } */}
  
//   </div>
//  </Fragment>
//   );
// };
// export default PracticeReact;



















//{ Coustom Hook  2 Application 35}
// import React, { useState, useEffect } from "react";
// const CoustomHook = (url) => {
//   const [data, setData] = useState(null);
//   const [loding, setLoding] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//      setTimeout(() => {
//        fetch(url)
//        .then((res) => {
//        if(!res.ok){
//         throw Error('Sorry Your API Link Problem! Pleass Cheack your API Link!')
//        }else{
//          return res.json();
//        }
//        })
//        .then((dataa) => {
//        setData(dataa);
//        setLoding(false);
//        setError(null);
//        //console.log(todos);
//        })
//        .catch((error) => {
//           setError(error.message);
//           setLoding(false);
//        });
//      }, 5000)
//   }, [url]);
//   return { data, loding, error }
// }
// export default CoustomHook;

// //{ Coustom Hook  1 Application 35}
// import React, { Fragment } from "react";
// import CoustomHook from './Amq';
// const PracticeReact = () => {
  
//   const { data, loding, error } = CoustomHook('https://jsonplaceholder.typicode.com/todos');
  
//   const lodingMessage = <p style={{color: 'green'}}>.....Pleage wate 5 secant.</p>;
//   const errorMessage = <p style={{color: 'red'}}>{error}</p>;
  
//   const todoElement = data &&
//   data.map((axtra) => {
//   return <h3 key={axtra.id}>{axtra.title}</h3>;
//   })
//   return (
//     <Fragment>
//    <h1>Todos</h1>
//   <div>
//   {error && errorMessage}
//   {loding && lodingMessage}
//     {todoElement}
//   </div>
//     </Fragment>
//   );
// };
// export default PracticeReact;











// //{ useEffect with catch 2 Application 34}
// import React, { Fragment, useState, useEffect } from "react";
// const lodingMessage = <p style={{color: 'green'}}>.....Pleage wate 5 secent.</p>;
// const PracticeReact = () => {
//   const [todos, setTodos] = useState(null);
//   const [loding, setLoding] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//      setTimeout(() => {
//        fetch("https://jsonplaceholder.typicode.com/todos")
//        .then((res) => {
//        if(!res.ok){
//         throw Error('Sorry Your API Link Problem! Pleass Cheack your API Link!')
//        }else{
//          return res.json();}})
//        .then((data) => {
//        setTodos(data);
//        setLoding(false);
//        setError(null);})
//        .catch((errorr) => {
//           setError(errorr.message);
//           setLoding(false);});
//      }, 5000) }, []);
//   const todoElement = todos && todos.map((axtra) => {return <h3 key={axtra.id}>{axtra.title}</h3>; })
//   return (
//     <Fragment><h1>Todos</h1>
//   <div>{error && <p style={{color: 'red'}}>{error}</p>}
//        {loding && lodingMessage}
//        {todoElement}
//   </div></Fragment>);};export default PracticeReact;


// //{ useEffect with fetch 1 Application 34}
// import React, { Fragment, useState, useEffect } from "react";
// const lodingMessage = <p>.....This Loding message</p>;
// const PracticeReact = () => {
//   const [todos, setTodos] = useState(null);
//   const [loding, setLoding] = useState(true);
//   useEffect(() => {
//      setTimeout(() => {
//        fetch("https://jsonplaceholder.typicode.com/todos")
//        .then((res) => {
//        return res.json();
//        })
//        .then((data) => {
//        setTodos(data);
//        setLoding(false);
//        //console.log(todos);
//        });
//      }, 5000)
//   }, []);
//   const todoElement = todos &&
//   todos.map((axtra) => {
//   return <h3 key={axtra.id}>{axtra.title}</h3>;
//   })
//   return (
//     <Fragment>
//    <h1>Todos</h1>
//   <div>
//   {loding && lodingMessage}
//     {todoElement}
//   </div></Fragment>);};export default PracticeReact;












// //{ FAQ Application 1 33 }
// import React, { useState } from 'react';
// import { FaqData } from './Data';
// import Faq from './Amq';
// const PracticeReact = () => {
//     console.log(FaqData);
// const [faqs, setFaqs] = useState(FaqData);
// return (
//  <main style={container}>
//    <section style={faqss}>
//        <h1 style={h1}>Faq Data</h1>
//      {
//        faqs.map((axtra ) => (
//          <Faq key={axtra.id} { ...axtra} />
//        ))
//     }
//    </section>
//  </main>
// );
//     }
// export default PracticeReact;
// const container = {
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: '#D5F6FF',
//     padding: '1rem'
// }
// const faqss = {
//     width: '50rem',
//     maxWidth: '100%',
//     backgroundColor: '#F0F0F0',
//     borderRadius: '0. 6rem',
//     padding: '1rem'
// }
// const h1 = {textAlign: 'center' }

//{ FAQ Application 2 33 }
// import React, { Fragment, useState } from 'react';
// const Faq = ({id, title, desc}) => {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <Fragment>
// <article style={faq}>
//     <div key={id} style={faqDiv}>
//         <h4>{title}</h4>
//         <button onClick={() => {setToggle(!toggle);}}>
//            {toggle ? '-' : '+'}
//         </button>
//     </div>
//         {toggle && <p>{desc}</p>}
// </article>
//     </Fragment> 
//   )
// }
// export default Faq;
// const faq = {
//   margin: '1rem',
//   backgroundColor: '#ECD2B7',
//   padding: '1rem',
//   borderRadius: '0.6rem',
//   boxShadow: '0.1rem 0.1rem'
// }
// const faqDiv = {
//   display: 'flex',
//   justifyContent: 'space-between'
// }


//{ FAQ Application 3 33 }
// export const FaqData = [
//     {
//       id:1,
//       title: 'FAQ Projact 1',
//       desc: 'Hello I am Amq and FAQ Projact 1',
//     },
//     {
//       id:2,
//       title: 'FAQ Projact 2',
//       desc: 'Hello I am Amq and FAQ Projact 2',
//     },
//     {
//       id:3,
//       title: 'FAQ Projact 3',
//       desc: 'Hello I am Amq and FAQ Projact 3',
//     }
//   ];










//{ Toggle Application 3 32 }
// import React, { Fragment, useState } from 'react';
// const App = () => {
// const [toggle, setToggle] = useState(false);
// /* const togglep = () => {
// setToggle(!toggle);
// } */
//  return(
//   <Fragment>
//     <div>
//       <button onClick={() => {setToggle(!toggle);}}>
//         {!toggle ? 'Hide' : 'Show'}
//       </button>
//     </div>
//     <div>
//       {!toggle && (
//         <p>Amq Ismail Saheb Amq Ismail Saheb</p>
//       )}
//     </div>
//   </Fragment>
//  )
// }
// export default App;


//{ Toggle Application 2 32 }
// import React, { Fragment, useState } from 'react';
// const App = () => {
// const [toggle, setToggle] = useState(true);
// /* const togglep = () => {
// setToggle(!toggle);
// } */
//  return(
//   <Fragment>
//     <div>
//       <button onClick={() => {setToggle(!toggle);}}>
//         {toggle ? 'Hide' : 'Show'}
//       </button>
//     </div>
//     <div>
//       {toggle && (
//         <p>Amq Ismail Saheb Amq Ismail Saheb 2</p>
//       )}
//     </div>
//   </Fragment>
//  )
// }
// export default App;


////{ Toggle Application 1 32 }
// import React, { Fragment, useState } from 'react';
// const App = () => {
// const [toggle, setToggle] = useState(true);
//  const togglet = () => {
// setToggle(true);
// } 
//  const togglef = () => {
// setToggle(false);
// } 
//  return(
//   <Fragment>
//     <div>
//       <button onClick={togglet}>Show</button>
//       <button onClick={togglef}>Hide</button>
//     </div>
//     <div>
//       {toggle && (
//         <p>Amq Ismail Saheb Amq Ismail Saheb</p>
//       )}
//     </div>
//   </Fragment>
//  )
// }
// export default App;








//{ Data  Destructuring Application 31 }
// import React, { Fragment } from 'react';

// function PracticeReact (){

//     const arryP = ['ismail', 'You', 'There'];
//     const [my, you] = arryP;

//     // const my = arryP[0];
//     // const you = arryP[1];
//     // const he = arryP[2];

//     return (
//         <Fragment>
//             <h1>{my}</h1>
//             <h2>{you}</h2>
//             <h3>{arryP[2]}</h3>
//         </Fragment>
//     )
// }
// export default PracticeReact;





//{ Date() Application 30 }
// import React, { Fragment } from 'react';
// function PracticeReact (){
//   const date = new Date();
//   const getdate = date.getDate();
//   const day = date.getDay();
//   const fullyear = date.getFullYear();
//   const hours = date.getHours();
//   const milliseconds = date.getMilliseconds();
//   const minutes = date.getMinutes();
//   const month = date.getMonth();
//   const seconds = date.getSeconds();
//   const time = date.getTime();
//   const timezoneoffset = date.getTimezoneOffset();
//     return (
//         <Fragment>
//           <div style={{textAlign: 'center', marginTop: '200px'}}>
//               <h1>{ new Date().getDate() }</h1>
//               <h2>{getdate + '/' + month + '/' + fullyear}</h2>
//               <h4>{getdate + ' (getdate) '}</h4>
//               <h4>{day + ' (day) '}</h4>
//               <h4>{fullyear + ' (fullyear) '}</h4>
//               <h4>{hours + ' (hours) '}</h4>
//               <h4>{milliseconds + ' (milliseconds) '}</h4>
//               <h4>{minutes + ' (minutes) '}</h4>
//               <h4>{month + ' (month) '}</h4>
//               <h4>{seconds + ' (seconds) '}</h4>
//               <h4>{time + ' (time) '}</h4>
//               <h4>{timezoneoffset + ' (timezoneoffset) '}</h4>
//           </div>
//         </Fragment>
//     )
// }
// export default PracticeReact;







//{ Hooks Context Application (Data Provider) 29 }
// import React, { Fragment } from 'react';
// import { DataProvider } from './ContextApi';
// import MyConsumer from './Consumer';
// function PracticeReact (){
//     return (
//         <Fragment>
//           <div style={{textAlign: 'center', marginTop: '200px'}}>
//             <DataProvider value='Data Send Provider, Consumer You Resive Data Ok.'>
//                      <MyConsumer />
//             </DataProvider>
//           </div>
//         </Fragment>
//     )
// }
// export default PracticeReact;

//{ Hooks Context Application (Conrext Creator) 29 }
// import React from 'react';
// const MyContext = React.createContext();
// const DataProvider = MyContext.Provider
// const RisevConsumer = MyContext.Consumer
//  export{DataProvider, RisevConsumer}

//{ Hooks Context Application (Data Resiver) 29 }
// import React, { Fragment } from 'react';
// import { RisevConsumer } from './ContextApi';
// function MyConsumer (){
//     return (
//         <Fragment>
//           <div style={{textAlign: 'center', marginTop: '200px'}}>
//                <RisevConsumer>
//                     {
//                         masseg=>{
//                             return masseg;
//                         }
//                     }
//                </RisevConsumer>
//           </div>
//         </Fragment>
//     )
// }
// export default MyConsumer;








//{ Hooks useState mathode Application 28 }
// import React, { Fragment, useState } from 'react';
// function PracticeReact (){
//     const [country, setContry] = useState({
//       ContryName:'Bangladesh'
//     })
//     const ChangeCountry = () => {
//         setContry({ContryName: 'USA'})
//     }
//     return (
//         <Fragment>
//           <div style={{textAlign: 'center', marginTop: '200px'}}>
//              <h1>{country.ContryName}</h1>
//              {/* <button onClick={ () => setContry({ContryName: 'USA'}) }>Change</button> */}
//              <button onClick={ChangeCountry}>Change</button>
//           </div>
//         </Fragment>
//     )
// }
// export default PracticeReact;

//{ onChange Mathode with useState Line by Line 1 Application 28 }
// import React, { Fragment, useState, } from 'react';
// const PracticeReact = () => {
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const onchangeNameHandler = (event) => {
//     const name = event.target.value;
//     setName(name);
// };
// const onchangeEmailHandler = (event) => {
//     const email = event.target.value;
//     setEmail(email);
// };
// const onchangePasswordHandler = (event) => {
//     const password = event.target.value;
//     setPassword(password);
// };
// const onsubmitHandler = (event) => {
//     console.log(name);
//     console.log(email);
//     console.log(password);
//     event.preventDefault();
// }
//     return (
// <Fragment>
//              <p>{name}</p>
//              <p>{email}</p>
//              <p>{password}</p>
// <form onSubmit={onsubmitHandler}>
//   <h3>Name:</h3>
//   <input type='text' name='name' onChange={onchangeNameHandler} /> <br></br>
  
//   <h3>Email:</h3>
//   <input type='email' name='email' onChange={onchangeEmailHandler} /> <br></br>
  
//   <h3>PassWord:</h3>
//   <input type='password' name='password' onChange={onchangePasswordHandler} /> <br></br>
  
//   <button type='submit'>Submit User</button>
// </form>
// </Fragment>
//     )
// }
// export default PracticeReact;

//{ onChange Mathode with useState Objact 2 Application 28 }
// import React, { Fragment, useState } from 'react';
// const PracticeReact = () => {
// const [userInfo, setUser] = useState({
//     name: '',
//     email: '',
//     password: ''
// });
// const {name, email, password} = userInfo;

// const onchangeHandler = (event) => {
//     setUser({...userInfo, [event.target.name]: event.target.value,});
// };
// const onsubmitHandler = (event) => {
//     console.log('I am consl');
//     console.log(userInfo);
//     console.log(name);
//     console.log(email);
//     console.log(password);
//     event.preventDefault();
// };
//     return (
//         <Fragment>
//             <p>{name}</p>
//             <p>{email}</p>
//             <p>{password}</p>
// <form onSubmit={onsubmitHandler}>
//   <h3>Name:</h3>
//   <input type='text' name='name' onChange={onchangeHandler} /> <br></br>
  
//   <h3>Email:</h3>
//   <input type='email' name='email' onChange={onchangeHandler} /> <br></br>
  
//   <h3>PassWord:</h3>
//   <input type='password' name='password' onChange={onchangeHandler} /> <br></br>
  
//   <button type='submit'>Submit User</button>
// </form>
//         </Fragment>
//     )
// }
// export default PracticeReact;










//{ API axios.post('') Application 27 }
// <?php
// header('Access-Control-Allow-Origin: *');
// $data = file_get_contents('php://input');
// echo  'From My Locel Server ' . $data;
// ?>
// import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state = {
//             PostData: '', 
//             PostResult: '' } }
//         onChangHandler = (event) => {
//             const SendData = event.target.value; 
//              this.setState({PostData: SendData})
//         }
//         onClickHandler = () => {
//             axios.post('http://localhost/amq/amq.php', this.state.PostData)
//             .then(response => {
//                 this.setState({PostResult: response.data})
//                 alert(this.state.PostResult);
//             })
//             .catch(error => {
//                 alert('Somthing Wrong!');
//             })
//         }
//     render (){
//         return (
//             <Fragment>
//                 <div style={{textAlign: 'center', marginTop: '200px'}}>
//                     <p>{this.state.PostResult}</p>
//                     <input onChange={this.onChangHandler} type='text'></input><br></br>
//                     <button onClick={this.onClickHandler}>Send</button>
//                 </div>
//             </Fragment> ) } } export default PracticeReact;










//{ API axios.get('') Application 26 }
// import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state = {
//             Country: 'Country Data List', 
//             ApiData: [] 
//         } }
//    componentDidMount(){ // https://restcountries.com/v2/all // response.data  // response.status
//        axios.get('https://restcountries.com/v2/all')
//        .then(response =>{
//           console.log(response.data);
//           this.setState({ApiData: response.data})
//        })
//        .catch(error =>{
//         console.log(error + ' (Net Work Problem)');
//        })
//    }
//     render (){
//         const Api = this.state.ApiData.map((axtra) => {
//             return <li>{axtra.name}</li>
//         })
//         return (
//             <Fragment>
//                 <div>
//                     <h1>{this.state.Country}</h1>
//                     <ol>{Api}</ol>
//                 </div>
//             </Fragment> ) } } export default PracticeReact;









//{ Router Application 25 }
// import React from "react"; //npx create-react-app amq, npm install, npm run build, cd amq, npm start
// import ReactDOM from "react-dom"; //npm install react-dom --save
// import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm install react-router-dom --save
// import 'font-awesome/css/font-awesome.min.css';   //npm install --save font-awesome
// import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
// import ContactPage from "./pages/Contact";
// import ApppIndex from "./component/todo_component/AppInsertHome";
// import PracticeReact from "./component/practice/Practice";
// import NoPage from "./pages/Nopage";
//  import reportWebVitals from "./reportWebVitals";

// export default function App(){
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<HomePage />}></Route>  
//           <Route path="About" element={<AboutPage />} />
//           <Route path="Contact" element={<ContactPage />} />
//           <Route path="AppInsertHome" element={<ApppIndex />} />
//           <Route path="Practice" element={<PracticeReact />} />
//           <Route path="*" element={<NoPage />} />        
//       </Routes>
//     </BrowserRouter>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("root"));
//  reportWebVitals();









//{ Jason array Application 24 }
// import React, {Component, Fragment} from 'react';
// class PracticeReact extends Component{
//     AxtraCity = (axtra) =>{
//         return <option>{'City Is : ' + axtra.city}</option>
//     }
//        AxtraZip = (axtra) =>{
//         return <option>{'Zip Is : ' + axtra.zip}</option> }
//     render(){
//        const cityAll = [
//            {
//               city: 'Dhaka',
//               zip: '1200'
//            },
//            {
//             city: 'Brhammanbaria',
//             zip: '1300'
//            },
//            {
//             city: 'Selet',
//             zip: '1100'
//            }
//        ];
//        const CityAxtra = cityAll.map(this.AxtraCity);
//        const ZipAxtra = cityAll.map(this.AxtraZip);
//         return(
//             <Fragment>
//                 <div style={{textAlign: 'center', marginTop: '200px'}}>
//                    <select>{CityAxtra}</select> <select>{ZipAxtra}</select>
//                 </div>
//             </Fragment>
//         )}} export default PracticeReact;









//{ List Axtra Application 23 }
// import React, {Component, Fragment} from 'react';
// class PracticeReact extends Component{
    
//     render(){
//        const contry = ['BanglaDesh', 'Indea', 'Usa', 'Pakisten'];
//        const contryItem = contry.map((axtra) =>{
//           return <option>{'Is : ' + axtra}</option>})
//         return(
//             <Fragment>
//                 <div style={{textAlign: 'center', marginTop: '200px'}}>
//                    <select>
//                        {contryItem}
//                    </select>
//                 </div>
//             </Fragment>
//         )}}
// export default PracticeReact;








//{ Auto Select Application 22 }
// import React, {Component, Fragment} from 'react';
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state = {
//             city1: 'Dhaka',
//             city2: 'Brhammanbaria',
//             city3: 'Selet',
//             city4: 'Gazipur',
//             show: '',
//             auto: 'Brhammanbaria'
//         } }
//     onChangeHandler = (event) => {
//       let  SelectValue = event.target.value;
//         this.setState({show: SelectValue, auto: SelectValue})
//     }
//     render(){
//         return(
//             <Fragment>
//                 <div style={{textAlign: 'center', marginTop: '200px'}}>
//                     <p>{this.state.show}</p>
//                    <select onChange={this.onChangeHandler} value={this.state.auto}>
//                        <option>{this.state.city1}</option>
//                        <option>{this.state.city2}</option>
//                        <option>{this.state.city3}</option>
//                        <option>{this.state.city4}</option>
//                    </select>
//                 </div>
//             </Fragment>
//         )}}
// export default PracticeReact;











//{ Valition form Application 21 }
// import React, { Component, Fragment } from 'react';
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state ={   
//             fName: '',
//             eMail: '',
//             mObile: ''} }
//     onChangeHandler = (event) => {
//      let InValue = event.target.value;
//      let NewIn = event.target.name;
//      this.setState({[NewIn] : InValue})
//      if(NewIn==='fName'){
//         let namePattern = /^([a-zA-Z]){2,30}$/;
//         if(!namePattern.test(InValue)){
//             this.setState({fName : 'First Name Is Not Valid'});
//         }}
//     if(NewIn==='eMail'){
//         let emailPattern = /\S+@\S+\.\S+/;
//         if(!emailPattern.test(InValue)){
//             this.setState({eMail : 'Email Is Not Valid'});
//         }}
//     if(NewIn==='mObile'){
//         if(!Number(InValue)){
//             this.setState({mObile : 'Number Is Not Valid'});
//         }}
//      }
//      onSubmitHandler = () => {
//          alert(this.state.fName);
//      }
//     render(){
//       return(
//         <Fragment>
//     <div style={{textAlign: 'center', marginTop: '200px'}}>
//     <form onSubmit={this.onSubmitHandler}>
//         <p>Test onChange</p>
//         <p>{this.state.fName}</p>
//         <p>{this.state.eMail}</p>
//         <p>{this.state.mObile}</p>
//         <input name='fName' onChange={this.onChangeHandler} type="text" placeholder='onChange'></input><br></br>
//         <input name='eMail' onChange={this.onChangeHandler} type="email" placeholder='onChange'></input><br></br>
//         <input name='mObile' onChange={this.onChangeHandler} type="text" placeholder='onChange'></input><br></br>
//         <input type='submit' value='Submit Now'></input>
//      </form>                                                                                                 
//     </div>
//         </Fragment>
//       ) } }
// export default PracticeReact;










//{ onSubmit Mathode Application 20 }
// import React, { Component, Fragment } from 'react';
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state ={
//             fName: '',
//             lName: ''} }
//     onChangeHandler = (event) => {
//      let NewIn = event.target.value;
//      let Name = event.target.name;
//      this.setState({[Name] : NewIn})}
//      onSubmitHandler = () => {
//          alert(this.state.fName);
//      }
//     render(){
//       return(
//         <Fragment>
//     <div style={{textAlign: 'center', marginTop: '200px'}}>
//     <form onSubmit={this.onSubmitHandler}>
//         <p>Test onChange</p>
//         <p>{this.state.fName}</p>
//         <p>{this.state.lName}</p>
//         <input name='fName' onChange={this.onChangeHandler} type="text" placeholder='onChange'></input><br></br>
//         <input name='lName' onChange={this.onChangeHandler} type="email" placeholder='onChange'></input>
//         <br></br>
//         <input type='submit' value='Submit Now'></input>
//      </form>                                                                                                 
//     </div>
//         </Fragment>
//       ) } }
// export default PracticeReact;









//{ onChange Mathode Application 19 }
// import React, { Component, Fragment } from 'react';
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state ={
//             fName: '',
//             lName: ''
//         }
//     }
//     onChangeHandler = (event) => {
//      let NewIn = event.target.value;
//      let Name = event.target.name;
//      this.setState({[Name] : NewIn})
// }
//     render(){
//       return(
//         <Fragment>
//     <div style={{textAlign: 'center', marginTop: '200px'}}>
//     <form>
//         <p>Test onChange</p>
//         <p>{this.state.fName}</p>
//         <p>{this.state.lName}</p>
//         <input name='fName' onChange={this.onChangeHandler} type="text" placeholder='onChange'></input>
//         <br></br>
//         <input name='lName' onChange={this.onChangeHandler} type="email" placeholder='onChange'></input>
//      </form>                                                                                                 
//     </div>
//         </Fragment>
//       ) } }
// export default PracticeReact;











//{ findDOMNode Mathode Application 18 }
// import React, { Component, Fragment } from 'react';
// import ReactDOM from "react-dom"; //npm install react-dom --save
// import ManImg from '../../asset/img/icon/man.png';

// class PracticeReact extends Component{
//     FindDomNodeChangeImag(){
//   let changImg = document.getElementById('ChangImg');  
//   //.style = 'width: 30px'         
//   ReactDOM.findDOMNode(changImg).src='http://localhost:3000/static/media/amq.8997ad226535f046f14b.png';
// }
//     render(){
//       return(
//         <Fragment>
//             <div style={{textAlign: 'center', marginTop: '200px'}}>
//             <button onClick={this.FindDomNodeChangeImag}>findDOMNode Chang Image</button>
//             <br></br>
//             <img id='ChangImg' src={ManImg} />                                                                                                   
//             </div>
//         </Fragment>
//       )
//     }
// }
// export default PracticeReact;











// { Render and Hydrate Mathode Application 17 }
// import React, { Component, Fragment } from 'react';
// import ReactDOM from "react-dom"; //npm install react-dom --save

// class PracticeReact extends Component{
//     ReactRenderHydrate(){
//            let container = document.getElementById('RenderHydrate');
//            let element = <h1>Hello I am Render and Hydrate Mathode</h1>;
//            let callback = function(){
//                alert('I am From Render and Hydrate Mathode');
//            }

//             ReactDOM.render(element, container, callback);
//     }
//     render(){
//       return(
//         <Fragment>
//             <div style={{textAlign: 'center', marginTop: '200px'}}>
//                 <button onClick={this.ReactRenderHydrate}>React Render Hydrate Button</button>
//                 <h3 id='RenderHydrate'>Chang The Element Click to Render Mathode.</h3>
//             </div>
//         </Fragment>
//       )
//     }
// }
// export default PracticeReact;










// //{ forceUpdate(); Application 16 }
// import React, { Component, Fragment } from 'react';

// class PracticeReact extends Component{

//     // constructor(){
//     //     super()
//     //     this.ForceUpdateV = this.forceUpdateNow.bind(this);
//     // }

//   forceUpdateNow = () => {
//         this.forceUpdate();
//     }
    
//     render(){
//       return(
//         <Fragment>
//             <div style={{textAlign: 'center', marginTop: '200px'}}>
//                 <button onClick={this.forceUpdateNow}>ForcUpdate Button</button>
//                 <h1>{Math.random()}</h1>
//             </div>
//         </Fragment>
//       )
//     }
// }
// export default PracticeReact;












//{ Element Conditionel Application 15 }
// import React, { Component } from 'react';

// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state={
//            login: true
//         }
//     }
    
//     render(){
//       return(
//         //this.state.login? <h1>Login true</h1> : <h1>Login false</h1>
//         this.state.login? 
//         (
//           <h1>Login true</h1>  
//         ):(
//           <h1>Login false</h1>
//         )
//       )
//     }
// }
// export default PracticeReact;








//{ Conditionel Application 14 }
// import React, { Component } from 'react';

// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state={
//            login: true
//         }
//     }
    
//     render(){
//        if(this.state.login==true){
//            return (<button>LOGOUT BUTTON</button>)
//        }
//        else{
//         return (<button>LOG IN BUTTON NOW</button>)
//        }
//     }
// }
// export default PracticeReact;











//{ setState Application 13 }
// import React, { Component, Fragment } from 'react';
// const ChangValue = 'chang';
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state={
//            name: 'Ismail Saheb',
//         }
//     }
//     ChangName(chang){
//         this.setState({name:chang})
//     }
//     render(){
//         return(
//             <Fragment>
//         <div>
//         <h1>{this.state.name}</h1>
//         <button onClick={this.ChangName.bind(this, ChangValue)}>Chang Name</button>
//         </div>
//             </Fragment>
//         )
//     }
// }
// export default PracticeReact;









//{ Objact Advenc Application 12 }
// import React, { Component, Fragment } from 'react';
// const ObjactAdvenc = {
//     name: 'Objact Advenc',
//     age: ['10', '20', '30', '33'],
//     phone: {
//        NumberRoby: '01874631310',
//        NumberGrammin : '0171237447',
//        NumberBanglalink : [
//                         '0196478691',
//                         '0193665454',
//                         '0193505231 Real my number Two'         
//             ]
//     }
//  }
// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state = ObjactAdvenc;
//     }
//     render(){
//         return(
//             <Fragment>
//                 <div>
//                     <h1>{this.state.name}</h1>
//                     <h2>{this.state.age[3]}</h2>
//                     <h3>{this.state.phone.NumberRoby}</h3>
//                     <h3>{this.state.phone.NumberBanglalink[2]}</h3>
//                 </div>
//             </Fragment>
//         )
// }}export default PracticeReact;














// // { State Application 11 Eleven }
// import React, { Component, Fragment } from 'react';

// class PracticeReact extends Component{
//     constructor(){
//         super()
//         this.state={
//            name: 'Ismail Saheb',
//            age: '33',
//            phone: '01874631310'
//         }
//     }
//     render(){
//         return(
//             <Fragment>
//                 <div>
//                     <h1>{this.state.name}</h1>
//                     <h2>{this.state.age}</h2>
//                     <h3>{this.state.phone}</h3>
//                 </div>
//             </Fragment>
//         )
//     }
// }
// export default PracticeReact;











// // { Bootstrap Application 10 Ten }
// import React, { Component, Fragment } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// //npm install react-bootstrap / bootstrap@5.1.3
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// //npm install --save bootstrap

// class PracticeReact extends Component{

//     render(){
//         return(
//             <Fragment>
//                 <Container>
//                    <Row>
//                        <Col><h2 className="text-center">Bootstrap Try</h2></Col>
//                        <Col><Button>Bootstrap Button</Button></Col>
//                        <Col><h2 className="text-center">Bootstrap Try</h2></Col>
//                    </Row>
//                 </Container>
//             </Fragment>
//         )
//     }
// }
// export default PracticeReact;












// { Bind Application 09 Nine }
// { Dextop time 03:00 But Terget 02:00 }
// { Mobile time 00:00 But Terget 07:00 }
// import React, { Fragment } from 'react';
// function PracticeReact(){

// function bindTest(b){
//        alert( b + ' I am from alert.');
//    }
//         return(
//                 <Fragment>
//                     <button onClick={bindTest.bind(this, 'I am from bind')}>Click bind</button>
//                 </Fragment>
//     )
// }
// export default PracticeReact;












// { Event Application 08 Eight }
// { Dextop time 03:00 But Terget 02:00 }
// { Mobile time 00:00 But Terget 07:00 }
// import React, { Component, Fragment } from 'react';
// class PracticeReact extends Component{
    
// eventTest(){
//        alert('I am from EventTest function.');
//    }
//     render(){
//         return(
//                 <Fragment>
//                     <button onClick={this.eventTest}>Click Event</button>
//                 </Fragment>
//     )
// }
// }
// export default PracticeReact;











//{ Css Application 07 seven }   
// import React, { Fragment } from 'react'; 
// import './style.css';
// import style from './practice.module.css';
// import  '../../asset/css/My.scss';    //npm install node-sass
// function PracticeReact(){
//     const Pstyle = {
//         color: 'red',
//         fontSize: '30px',
//         backgroundColor: 'black',
//         textAlign: 'center'
//     }
//     return (                          
//         <Fragment>  
//         <div className={style.back}>
//             <h1 style={{textAlign:'center', color:'green'}}>1.inline css</h1>
//             <h2 className='hading'>2.Normal css ( import './style.css'; )</h2>
//             <p className={style.back}>3.practice.module.css Link this file.</p>
//             <p style={Pstyle}>4.Css Objact Property</p>
//             <p className='indexCssStyle'>5.index.html Link style.css file, Class Name Use This file</p>
//             <p className='ParaStyle'>6.Sass styleing with My.scss file</p>
//         </div>
//         </Fragment>
//     )}
// export default PracticeReact;












// { font awesome 06 Six }
// font awesome import rowls index.js file
// import 'font-awesome/css/font-awesome.min.css';   //npm install --save font-awesome
// <i className='fa fa-trash fa-2x'></i>


// { Map Application 05 Five }
// { Dextop time 10:00 But Terget 05:00 }
// { Mobile time 00:00 But Terget 07:00 }
// import React, { Fragment } from 'react';       
// import Maping from './map';                      
// const dummyText = [                             
//     { id : 1, name : 'Ismail saheb', mobile : '01874631310' },
//     { id : 2, name : 'Ismail saheb', mobile : '01746313100' } ];
// function PracticeReact(){
//     return (                          
//         <Fragment>                    
//             {
//                 dummyText.map((axtra) => (
//                      <Maping key={axtra.id}  maping={axtra} desc="Object Data." />
//                 ))
//             }
//         </Fragment>
//     )}
// export default PracticeReact;


// //{ Map destructuring Application 05 Five }
// import React, { Component, Fragment } from 'react';
// class Maping extends Component{
//     render(){
//         const { id, name, mobile } = this.props.maping; //destructuring
//         return (
//             <Fragment>
//                 <h1>{id}</h1>
//                 <h2>{name}</h2>
//                 <h3>{mobile}</h3>
//                 <h4>{this.props.desc}</h4>
//             </Fragment>
//         ) } }
// export default Maping;


//{ Json Date Maping and Loping  Application 5 }
// import React, { Fragment } from 'react';
// import Data from './data.json';
// function PracticeReact (){
//     // console.log(Data);
//     // console.log(Data[10]);
//     // console.log(Data[10].name);

//     // let nameItems = [];
//     // let mobileItems = [];
//     // for(let d=0; d<Data.length; d++){
//     //     nameItems.push(Data[d].name)
//     //     mobileItems.push(Data[d].mobile)}
//     const nameItems = Data.map((axtra, index) => {return <li key={index}>{axtra.name}</li>})

//     const mobileItems = Data.map((axtra, index) => {
//         return <li key={index}>{axtra.mobile}</li> 
//     })
//     return (
//         <Fragment>
//              <ol>{nameItems}</ol>
//              <ol>{mobileItems}</ol>  
//         </Fragment>
//     )
// }
// export default PracticeReact;


//{ Nested  Json Date Maping  Application 5 }
// import React, {Component, Fragment } from 'react';
// import {v4 as uuidv4} from 'uuid'; //
// const jsonData=[
//     {
//       name: 'Ismail saheb',
//       age: '33',
//       phone: [ {home: '01757484410'}, {office: '89408483'}],
//     },
//     {
//         name: 'Ismail saheb',
//         age: '33',
//         phone: [ {home: '01757484410'}, {office: '89408483'}],
//       },
//       {
//         name: 'Ismail saheb',
//         age: '33',
//         phone: [ {home: '01757484410'}, {office: '89408483'}],
//       },
// ];
// 
// class PracticeReact extends Component{
//     render(){
//     return (
//         <Fragment>
//               <div style={{textAlign: 'center', marginTop: '200px'}}>
//               {
//                   jsonData.map((axtra) => {
//                       return (
//                           <div key={uuidv4()}>
//                               <ol>
//                                     <li>{axtra.name}</li>
//                                     <li>{axtra.age}</li>
//                               </ol>
//                               {
//                                   axtra.phone.map((phon) => {
//                                       return (
//                                           <div key={uuidv4()}>
//                                         <ol>
//                                             <li>{phon.home}</li>
//                                             <li>{phon.office}</li>
//                                          </ol>
//                                           </div>
//                                       )})
//                               }
//                           </div>
//                       ) })}
//                    </div>
//         </Fragment>
//     );}} export default PracticeReact;












// { Application 04 Four }
// { Dextop time 10:00 But Terget 05:00 }
// { Mobile time 00:00 But Terget 07:00 }
// import React, { Component, Fragment } from 'react';
// import Props from './PropsReact';

// const dummyText = 'Props 1 application (4)';
// class PracticeReact extends Component{

//     render(){
//       return(
//           <Fragment>
//               <Props PropsReact={dummyText} />
//           </Fragment>
//       )
//     }
// }
// export default PracticeReact;

// import React, { Fragment } from 'react';

// const Props = (props) => {
//     //console.log(props.PropsReact);
//     return (
//         <Fragment>
//             <h1>{props.PropsReact}</h1>
//         </Fragment>
//     )
// }
// export default Props;


//{  props 2 Child to Parent Data pass Application 4 }
// import React, { Fragment } from 'react';
// import ChildCom from './Child';

//  const PracticeReact = () => {
//     const onChildDataResive = (child) => {
//         console.log(child);
//     }

//     return (
//         <Fragment>
//             <ChildCom onChildData={onChildDataResive}/>
//         </Fragment>
//     )
// }
// export default PracticeReact;

// import React, { Fragment } from 'react';
// const ChildCom = (props) => {
//         const data = 'I am from Child Component';
//         props.onChildData(data);
    
//     return (
//         <Fragment>
//             <h1>I am child component</h1>
//         </Fragment>
//     )
// }
// export default ChildCom;












// { Application 03 Three }
// { Dextop time 02:02 But Terget 01:00 }
// { Mobile time 00:00 But Terget 01:30 }
// import React, { Fragment } from 'react';

// const PracticeReact = () => {

//     return (
//         <Fragment>
//             <h1>Arrow function component (3)</h1>
//         </Fragment>
//     )
// }
// export default PracticeReact;











// { Application 02 Two }
// { Dextop time 02:10 But Terget 01:00 }
// { Mobile time 30:00 But Terget 01:30 }
// import React, { Fragment } from 'react';

// function PracticeReact (){
    
//     return (
//         <Fragment>
//             <h1>function component (2)</h1>
//         </Fragment>
//     )
// }
// export default PracticeReact;












// { Application 01 One }
// { Dextop time 02:29 But Terget 01:00 }
// { Mobile time 00:00 But Terget 01:30 }
// import React, { Component, Fragment } from 'react';
// class PracticeReact extends Component{

//     render (){
//         return (
//             <Fragment>
//                 <h1>Class component (1)</h1>
//             </Fragment>
//         )
//     }
// }
// export default PracticeReact;