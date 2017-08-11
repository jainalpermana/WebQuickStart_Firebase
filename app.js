  (function (){  
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBx9HYxUMvh_RdP9N0PcLoQgS7WSk8vTMc",
    authDomain: "web-quickstart-19beb.firebaseapp.com",
    databaseURL: "https://web-quickstart-19beb.firebaseio.com",
    projectId: "web-quickstart-19beb",
    storageBucket: "",
    messagingSenderId: "170974178445"
  };
  firebase.initializeApp(config);
  
//Get elements
var preObject = document.getElementById('object');
var ulList = document.getElementById('list');

//create references
var dbRefObject = firebase.database().ref().child('object');
var dbRefList = dbRefObject.child('hobbies');

//Sync object changes
dbRefObject.on('value', snap=> {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);


//Sync list changes
dbRefList.on('child_added', snap => {

var li = document.createElement('li');
li.innerText = snap.val();
li.id = snap.key;
ulList.appendChild(li);


});

dbRefList.on('child_changed', snap => {

  var liChanged = document.getElementById(snap.key);
  liChanged.innerText = snap.val();

});

dbRefList.on('child_removed', snap => {

  var liRemove = document.getElementById(snap.key);
  liToRemove.remove();

});




});

}());

