 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBcg5TXaWuDECZa8DNTeh6wjOwQTL3ToFc",
    authDomain: "train-schedule-d90fd.firebaseapp.com",
    databaseURL: "https://train-schedule-d90fd.firebaseio.com",
    projectId: "train-schedule-d90fd",
    storageBucket: "train-schedule-d90fd.appspot.com",
    messagingSenderId: "379671887953"
  };
 
  firebase.initializeApp(config);

// Variable to reference the database
var database = firebase.database();

// Initial Values
var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = "";

// Capture Button Click
$("#add-user").on("click", function(event) {
event.preventDefault();
      
// Hold the values entered from User.
trainName = $("#train-name").val().trim();
destination = $("#destinationval").val().trim();
firstTrain = moment($("#first-train").val().trim(), "HH:mm").format("HH:mm");
frequency = $("#frequency-display").val().trim();

// Code for "Setting values in the database"
database.ref().set({
	trainName: train,
	destination: destination,
	firstTrain: firsttrain,
	frequency: frequency,
	});
});


// // Firebase watcher + initial loader HINT: .on("value")
// database.ref().on("value", function(snapshot) {

//   // Log everything that's coming out of snapshot
//   console.log(snapshot.val());
//   console.log(snapshot.val().trainName);
//   console.log(snapshot.val().destination);
//   console.log(snapshot.val().firstTrain);
//   console.log(snapshot.val().frequency);

//   // Change the HTML to reflect
//   $("#train-display").text(snapshot.val().trainName);
//   $("#destination-display").text(snapshot.val().destination);
//   $("#firstTrain-display").text(snapshot.val().firstTrain);
//   $("#frequency-display").text(snapshot.val().frequency);

//   // Handle the errors
// }, function(errorObject) {
//   console.log("Errors handled: " + errorObject.code);
// });


