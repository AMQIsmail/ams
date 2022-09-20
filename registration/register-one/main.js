
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
    const emaill = document.getElementById("email").value;
    const passwordd = document.getElementById("password").value;
    console.log(emaill, passwordd)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(emaill, passwordd)
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
    })
 
    .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    // ..
    });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.getElementById("message").innerHTML = 'Your Log In Seccess Full.';
            console.log(result)
            //message seccess alert
    setTimeout(() => {
        document.getElementById("message").style.display = "block";
        }, 1000);
        //message set time out none
        setTimeout(() => {
        document.getElementById("message").style.display = "none";
        }, 4000);
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}