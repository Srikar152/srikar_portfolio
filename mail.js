// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCCDQ_oFboXWwlfAIcQRzPI_bHx0aGMdg",
  authDomain: "srikarportfolio20.firebaseapp.com",
  databaseURL: "https://srikarportfolio20-default-rtdb.firebaseio.com",
  projectId: "srikarportfolio20",
  storageBucket: "srikarportfolio20.appspot.com",
  messagingSenderId: "662566120694",
  appId: "1:662566120694:web:4381bc44cb4652bb5e10d7",
  measurementId: "G-T8V7M02FHW"
};
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
var portfolioDB = firebase.database().ref('myportfolio');

// Add event listener to the form
document.getElementById('form').addEventListener('submit', submitForm);

// Function to handle form submission
function submitForm(e) {
  e.preventDefault();
  var name = getElementVal('name');
  var email = getElementVal('email');
  var msg = getElementVal('message');

  // Validate form inputs
  if (name === "" || email === "" || msg === "") {
     // alert("All fields are required!");
      return; // Do not save the message if any field is empty
  }

  // Save messages if all fields are filled
  saveMessages(name, email, msg);

  // Reset form after saving
  document.getElementById('form').reset();
}

// Function to save messages to Firebase
const saveMessages = (name, email, msg) => {
  var newPortfolio = portfolioDB.push();

  newPortfolio.set({
      name: name,
      email: email,
      msg: msg,
  });
};

// Function to get the value of an element by ID
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
