$("#start-btn").click(startSession())
$("#end-btn").click(endSession())

moment().format();
// Creating environment for timer function
var x;
var y;
var duration;
// On start button, grab a beginning value of time.
// On end session button, grab an ending value of time.
// Send this duration to the database relative to the staff ID
function startSession () {
 x = new moment()
 console.log(x)
}
function endSession () {
 y = new moment()
 console.log(y)
 duration = moment.duration(y.diff(x))
 console.log(duration)
}
