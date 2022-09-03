// npx create-react-app amq, npm install, npm run build, cd amq, cd amq/frontant/react, npm start
// (Github npm information) npm install gh-pages --save-dev
// git status, git add ., git comit -m"Github pages / g-h pages added", git push, npm run deploy,
// link: https://www.npmjs.com/package/gh-pages
import React from "react"; 
import ReactDOM from "react-dom"; //npm install react-dom --save
import App from "./components/App";

export default function Index(){
  return (
      <App />
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));


// const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(<Index />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );




