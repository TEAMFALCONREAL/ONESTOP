import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
import { getAuth,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyDcR_Ip-Ansrxve5HNuskSWm1lxB6qGgdw",
    authDomain: "onestop-students.firebaseapp.com",
    projectId: "onestop-students",
    storageBucket: "onestop-students.appspot.com",
    messagingSenderId: "847940577786",
    appId: "1:847940577786:web:b6c22f9a4f667532ee9c43"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const x = document.querySelector(".studentlogin");
x.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = x.emailid.value;
    const pass = x.pass.value;

    signInWithEmailAndPassword(auth,user,pass)
    .then(() => {
        window.location.replace("../Dasboard/dashboard.html");
    })
    .catch(() => {
        alert("Wrong User Credentials");
    })
})