import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
import { getAuth,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'
import {getDatabase, ref, push, set} from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js'

const firebaseConfig = {
    apiKey: "AIzaSyBF0sGOFOonG2DUwj0ZO3xdHwMS7Za0fKU",
    authDomain: "onestop-company.firebaseapp.com",
    databaseURL: "https://onestop-company-default-rtdb.firebaseio.com",
    projectId: "onestop-company",
    storageBucket: "onestop-company.appspot.com",
    messagingSenderId: "354319019643",
    appId: "1:354319019643:web:c301dca110f84645c37cde"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);
const colref = ref(database, "Company");


const x = document.querySelector(".companysignup");
x.addEventListener("submit", (e) =>{
    e.preventDefault();
    const name = x.companyname.value;
    const user = x.emailid.value;
    const pass= x.pass.value;
    const confirm = x.confirm.value;
    localStorage.setItem("Name",name);
    if (pass === confirm) {
        push(colref,name);
        createUserWithEmailAndPassword(auth,user,pass)
        .then(() => {
            window.location.replace("companyjobs.html");
        })
        .catch(() => {
            alert("Wrong User Credentials");
        })
    }
    else{
        alert("Passwords Don't Match. Enter Correct Details");
    }
})