$(document).ready(function(){

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
    
    console.log(moment());
    
    
    //Functions
    $(".submitBtn").on("click", function(){
        trainName = $("#train-input").val().trim();
        destination = $("#destination-input").val().trim();
        time = moment($("#time-input").val().trim(), 'hh:mm');
        freq = $("#freq-input").val().trim();
        
        database.ref().push({
            trainName: trainName, 
            destination: destination,
            time: time,
            freq: freq,
        });
        $('input').val('');
    });

    //var duration = moment.duration(end.diff(startTime));

    database.ref().on("child_added", function (trainData) {
        
        var freqTime = trainData.val().freq;
        var firstTime = moment(trainData.val().time).subtract(1, 'years');
        var currentTime = moment();
        

        //.format("hh:mm a");
        
        
        console.log(currentTime);
        //console.log(freqTime);
        console.log(currentTime - "firstTime._i" );
     

        $("#tBody").append("<tr><td> " + trainData.val().trainName +
            " </td><td> " + trainData.val().destination +
            " </td><td> " + trainData.val().freq +
            " </td><td> " + trainData.val().time + 
            "</td></tr>");
    });

    
})

