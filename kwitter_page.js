const firebaseConfig = {
    apiKey: "AIzaSyCoVDKcNqVq8CJuoH2ZwOLxhaxQQSH3UJ8",
    authDomain: "kwitter-67907.firebaseapp.com",
    databaseURL: "https://kwitter-67907-default-rtdb.firebaseio.com",
    projectId: "kwitter-67907",
    storageBucket: "kwitter-67907.appspot.com",
    messagingSenderId: "612629031289",
    appId: "1:612629031289:web:19481013d47e257f24a7a8",
    measurementId: "G-5M0C3F316Y"
};


firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        
        like: 0,


    });
    document.getElementById("msg").value = "";
}