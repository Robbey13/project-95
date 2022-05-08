function addRoom()
{
    room_name = document.getElementById("room_name").value
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });    
     //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
      });});}
getData();
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}