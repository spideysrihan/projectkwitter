
const firebaseConfig = {
      apiKey: "AIzaSyDotcDGCU-Vwz5aLAsjxapOxOoeMuRyWa0",
      authDomain: "kwitter-app-af831.firebaseapp.com",
      databaseURL: "https://kwitter-app-af831-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-af831",
      storageBucket: "kwitter-app-af831.appspot.com",
      messagingSenderId: "266942759805",
      appId: "1:266942759805:web:a21f18ea3a9d1b295a0214"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!"
function addRoom()
{
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"

});
localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name -" + Room_names );
       row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}