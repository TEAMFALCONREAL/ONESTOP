import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
import { getAuth,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyBF0sGOFOonG2DUwj0ZO3xdHwMS7Za0fKU",
    authDomain: "onestop-company.firebaseapp.com",
    projectId: "onestop-company",
    storageBucket: "onestop-company.appspot.com",
    messagingSenderId: "354319019643",
    appId: "1:354319019643:web:c301dca110f84645c37cde"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const x = document.querySelector(".companylogin");



x.addEventListener("submit" , (e) => {
    e.preventDefault();
    const name = x.name.value;
    const user = x.emailid.value;
    const pass= x.pass.value;
    localStorage.setItem("Name",name);
    signInWithEmailAndPassword(auth,user,pass)
    .then(() => {
        // localStorage.setItem("User",user);
        // localStorage.setItem("Pass",pass);
        window.location.replace("companyjobs.html");
    })
    .catch(() => {
        alert("Wrong User Credentials");
    })
})


