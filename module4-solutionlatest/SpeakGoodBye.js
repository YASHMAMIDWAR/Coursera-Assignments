(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";
byeSpeaker.speak = function(name1) {
  console.log(speakWord + " " + name1);
};

   window.byeSpeaker = byeSpeaker;
}) (window);
