
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbUOlhS2h1eOsuIqtORIKdJicbwuaoU0Y",
    authDomain: "facebookidfillter.firebaseapp.com",
    databaseURL: "https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js",
    projectId: "facebookidfillter",
    storageBucket: "facebookidfillter.appspot.com",
    messagingSenderId: "265365318801",
    appId: "1:265365318801:web:c5dbbcc7ffb1717db86330"
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
    }, 500);
    //message set time out none
    setTimeout(() => {
    document.getElementById("Smessage").style.display = "none";
    }, 8000);
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
            document.getElementById("message").innerHTML = 'Your ID Data Base Existing!';
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