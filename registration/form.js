
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHheHBfAf-vbN59zcLUzz-daWcjhRDebg",
  authDomain: "registerlogin-b7b7e.firebaseapp.com",
  databaseURL: "https://registerlogin-b7b7e-default-rtdb.firebaseio.com",
  projectId: "registerlogin-b7b7e",
  storageBucket: "registerlogin-b7b7e.appspot.com",
  messagingSenderId: "469521728124",
  appId: "1:469521728124:web:349df3d2659ee317917ff9"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



// Sign up function
const signUp = () => {
    
    const RegisterEmail = document.getElementById("register-email").value;
    const RegisterPassword = document.getElementById("register-password").value;
    console.log(RegisterEmail, RegisterPassword)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(RegisterEmail, RegisterPassword)
    .then((result) => {
     // Signed in 
    console.log(result)
    //message seccess alert
    setTimeout(() => {
    document.getElementById("Smessage").style.display = "block";
    }, 1000);
    //message set time out none
    setTimeout(() => {
    document.getElementById("Smessage").style.display = "none";
    }, 4000);
    // form reset
    setTimeout(() => {
    document.getElementById("register-div").reset();
    }, 1000);
    })

    .catch((error) => {
    console.log(error.code);
    console.log(error.message)
        // ..
    });
}



// Sign In function
const signIn = () => {
    const LoginEmail = document.getElementById("login-email").value;
    const LoginPassword = document.getElementById("login-password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(LoginEmail, LoginPassword)
    .then((result) => {
    // Signed in 
    document.querySelector(".Lmessage").innerHTML = 'Your Log In Seccess Full.';
    console.log(result)
    })
    .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    });
     //message seccess alert
     setTimeout(() => {
    document.querySelector(".Lmessage").style.display = "block";
    }, 1000);
    //message set time out none
    setTimeout(() => {
      document.querySelector(".Lmessage").style.display = "none";
    }, 4000);
    setTimeout(() => {
    document.getElementById("login-div").reset();
    }, 1000);
}

 
 
 // Log in button click to show Resgister page 
document.getElementById("log-div").addEventListener("click", regBlock);
function regBlock() {
    document.getElementById('login-div').style.display='block';
    document.getElementById("register-div").style.display="none";
}

// Resgister button click to show log in page 
document.getElementById("reg-div").addEventListener("click", logBlock);
function logBlock() {
    document.getElementById("register-div").style.display="block";
    document.getElementById('login-div').style.display='none';
}

// page load then display alert message
function registerLogin() {
    alert("WelCome Our Register Page");
}




