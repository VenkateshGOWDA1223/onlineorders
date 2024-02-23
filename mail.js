const firebaseConfig = {
  apiKey: "AIzaSyBloD2f97f6wOhnz0jALQ7slM-CJaSpNuE",
    authDomain: "contactform-8ea25.firebaseapp.com",
    databaseURL: "https://contactform-8ea25-default-rtdb.firebaseio.com",
    projectId: "contactform-8ea25",
    storageBucket: "contactform-8ea25.appspot.com",
    messagingSenderId: "416188748735",
    appId: "1:416188748735:web:7793c830036bc4df89c70a"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};