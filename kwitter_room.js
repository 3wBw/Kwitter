var firebaseConfig = {
      apiKey: "AIzaSyC-iQGISxuTlgaP_VnYLkq9HAWHTzBNrSQ",
      authDomain: "kwitter-2-98fbe.firebaseapp.com",
      databaseURL: "https://kwitter-2-98fbe-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-98fbe",
      storageBucket: "kwitter-2-98fbe.appspot.com",
      messagingSenderId: "669056295655",
      appId: "1:669056295655:web:2fb5e34b701621e677f842",
      measurementId: "G-P12L9KMGEL"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

   function addRoom() {
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose: "adding room name" 
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
   }

   

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_names);
      row="<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+" </div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
