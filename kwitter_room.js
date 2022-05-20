var firebaseConfig = {
      apiKey: "AIzaSyCQawT-roXBMsYSOJgcD1E2z9NimoS4KrA",
      authDomain: "kwitter-9a3d7.firebaseapp.com",
      databaseURL: "https://kwitter-9a3d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-9a3d7",
      storageBucket: "kwitter-9a3d7.appspot.com",
      messagingSenderId: "572772899469",
      appId: "1:572772899469:web:80a59b69a809d2cf5c60c4"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name",Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
