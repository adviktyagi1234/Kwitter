var firebaseConfig = {
      apiKey: "AIzaSyAaYRAzk1FN5P5Te66BqkMjXbJAISN5_yw",
      authDomain: "kwitter-7672b.firebaseapp.com",
      databaseURL: "https://kwitter-7672b-default-rtdb.firebaseio.com",
      projectId: "kwitter-7672b",
      storageBucket: "kwitter-7672b.appspot.com",
      messagingSenderId: "836012437150",
      appId: "1:836012437150:web:850733f4383f12e2a3158f",
      measurementId: "G-NE858SXDW3"
};

firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + userName + "!";

function addRoom() {
      Room_Name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_Name).update({ testing: "succesful" });
      localStorage.setItem("room_name", Room_Name);   
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;


            });
      });
}
getData();

function RedirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}