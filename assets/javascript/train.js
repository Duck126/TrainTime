$(document).ready(function(){
window.alert("working");
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC3r1m5xzrpCTbgrXrLQkQRkMBM6DnjDVU",
        authDomain: "train-time-homework-2696b.firebaseapp.com",
        databaseURL: "https://train-time-homework-2696b.firebaseio.com",
        projectId: "train-time-homework-2696b",
        storageBucket: "",
        messagingSenderId: "1067962045016"
    };
    firebase.initializeApp(config);

    //Gets a referance to the database 
    var database = firebase.database();

    

    //Functions
    $(".submitBtn").on("click", function(){
        trainName = $("#train-input").val().trim();
        destination = $("#destination-input").val().trim();
        time = $("#time-input").val().trim();
        freq = $("#freq-input").val().trim();
        

        database.ref().set({
            trainName: trainName,
            destination: destination,
            time: time,
            freq: freq,
        });
    });

    database.ref().on("value", function(snapshot){

        console.log(snapshot.val());
        console.log(snapshot.val().trainName);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().time);
        console.log(snapshot.val().freq);

        var tBody = $("tbody");
        var tR = $("<tr>");
        var tD = $("<td>");

        


       
    })
})

