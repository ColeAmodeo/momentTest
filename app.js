
moment().format();
// Creating environment for timer function
var start;
var startDate;
var end;
var duration;
var minutes = 0;
var hours = 0;
var secondsPassed = 0;
function timer() {
  secondsPassed = parseInt(secondsPassed + 1);
  console.log(secondsPassed)
  // Time calculations for hours, minutes and seconds
  if (secondsPassed === 60) {
    secondsPassed = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  // Display the result in the element with id="display"
  $("#display").text(hours + "h " + minutes + "m " + secondsPassed + "s ")
};
//Start button
function startSession () {
  clearInterval(timer)
  start = new moment()
  console.log(start)
  setInterval(timer, 1000)
};
//End Button
function endSession () {
 end = new moment()
 console.log(end)
 duration = moment.duration(end.diff(start))
 console.log(duration)
};

$("#start-btn").click(startSession())
$("#end-btn").click(endSession())
