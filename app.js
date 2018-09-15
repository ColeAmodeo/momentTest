
moment().format();
// ***********************************************************
// Creating environment for timer function
// ***********************************************************
var start;
var startDate;
var end;
var duration;
var minutes = 0;
var hours = 0;
var secondsPassed = 0;
var timerId;
// ***********************************************************
// Timer Logic
// ***********************************************************
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
function intervalTrigger() {
  return window.setInterval(timer, 1000)
};
// ***********************************************************
//      BUTTON TRIGGER FUNCTIONS
// ***********************************************************

//Start button
function startSession () {
  clearInterval(timerId)
  timerId = intervalTrigger()
  start = new moment()
  disableThis();
  enablePause();
  enableEnd();
};
//End Button
function endSession () {
  clearInterval(timerId)
  secondsPassed = 0;
  end = new moment()
  duration = moment.duration(end.diff(start))
  console.log(duration)
  disableThis()
  enableStart();
};
// Pause time
function pause() {
  clearInterval(timerId)
  disableThis();
  enableResume();

}
// Resume time
function resume() {
  timerID = intervalTrigger()
  disableThis();
  enablePause();
}
// ***********************************************************
// Click Handlers
// ***********************************************************
$("#start-btn").off().on('click', startSession)
$("#end-btn").off().on('click', endSession)
$("#pause-btn").off().on('click', pause)
$("#resume-btn").off().on('click', resume)

// ***********************************************************
// Environment for disabling buttons to stop idiots from pressing shit they shouldnt
// ***********************************************************
function disableThis(){
  var buttonId = this.id;
  $(buttonId).attr('disabled','disabled');

}
function enableStart() {
  $("#start-btn").removeAttr('disabled');
}
function enableEnd() {
  $("#end-btn").removeAttr('disabled');
}
function enableResume() {
  $("#resume-btn").removeAttr('disabled');
}
function enablePause() {
  $("#pause-btn").removeAttr('disabled');
}
