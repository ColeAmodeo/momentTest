moment().format();

$("#start-btn").click(startSession())
$("#end-btn").click(endSession())

// Creating environment for timer function
var x;
var y;
var duration;
// On start button, grab a beginning value of time.
// On end session button, grab an ending value of time.
// Send this duration to the database relative to the staff ID
function startSession () {
 startObject = new moment()
 console.log(x)
 runTime()
}

function endSession () {
 endObject = new moment()
 console.log(y)
 duration = moment.duration(y.diff(x))
 console.log(duration)
}

var runTime = setInterval(function() {
  //Set running timer
  var activeTime = 0
  activeTime++;
  console.log(activeTime)
  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((activeTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((activeTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((activeTime % (1000 * 60)) / 1000);

  // Display the result in the element with id="display"
  $("#display").text(hours + "h " + minutes + "m " + seconds + "s ")
}, 1000);
