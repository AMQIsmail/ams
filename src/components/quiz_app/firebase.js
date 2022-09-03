import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics";

const app = initializeApp ({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});
export default app;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD-_iLgnx4tGoRowaKhtIcxUEn_UjGibNU",
//   authDomain: "amq1-11804.firebaseapp.com",
//   projectId: "amq1-11804",
//   storageBucket: "amq1-11804.appspot.com",
//   messagingSenderId: "1032472186464",
//   appId: "1:1032472186464:web:2d5bfee935534569fd3d05",
//   measurementId: "G-Z9PT1NY581"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);