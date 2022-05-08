function addUser(){
    
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    
}

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBxdWelPUjzoYQYi6avqHUAzyBmflauuwQ",
    authDomain: "real-project-94.firebaseapp.com",
    projectId: "real-project-94",
    storageBucket: "real-project-94.appspot.com",
    messagingSenderId: "999987342383",
    appId: "1:999987342383:web:98d279dae4250ca323eada"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);