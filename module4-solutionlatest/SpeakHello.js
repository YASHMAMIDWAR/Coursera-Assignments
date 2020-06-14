(function (window) {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function (name2) {
  console.log(speakWord + " " + name2);
};
   window.helloSpeaker = helloSpeaker;
}) (window);
