const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyAqfh5m8alWiGn8xesEX_8OSu8f0Ghd9To",
  authDomain: "endeavor-d1599.firebaseapp.com",
  projectId: "endeavor-d1599",
  storageBucket: "endeavor-d1599.appspot.com",
  messagingSenderId: "391164311410",
  appId: "1:391164311410:web:ec87ef00d1b319a0f10feb",
  measurementId: "G-34H5967R3M"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// Signup Function
const signUp=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    console.log(email,password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("You're Signed up")
    console.log(result)
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
   console.log(error.code);
   console.log(error.message)
    // ..
  });
}
// Sign in function
const signIn=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("You are signed In")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
   console.log(error.message)
  });
}