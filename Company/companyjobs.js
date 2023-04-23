import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'

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

const db = getFirestore(app);
const name = localStorage.getItem("Name");
const colref = collection(db,name);

const querySnapshot = await getDocs(colref);
querySnapshot.forEach((doc) => {
  const li = document.createElement("li");
  const brk1 = document.createElement("br");
  const brk2 = document.createElement("br");
  const brk3 = document.createElement("br");
  const data1 = document.createTextNode(name);
  const data2 = document.createTextNode(doc.data().Post);
  const data3 = document.createTextNode(doc.data().CG);
  const data4 = document.createTextNode(doc.data().Description);
  const ul = document.getElementById("company-list");
  const company = document.createTextNode("Company : ");
  const Post = document.createTextNode("Post : ");
  const CG = document.createTextNode("CG : ");
  const Description = document.createTextNode("Description : ");
  li.appendChild(company);
  li.appendChild(data1);
  li.appendChild(brk1);
  li.appendChild(Post);
  li.appendChild(data2);
  li.appendChild(brk2);
  li.appendChild(CG);
  li.appendChild(data3);
  li.appendChild(brk3);
  li.appendChild(Description);
  li.appendChild(data4);
  ul.appendChild(li);
  // console.log(doc.id, " => ", doc.data().Post);
});
