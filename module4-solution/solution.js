function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    speak2(names[i]);
  } else {
    speak1(names[i]);
  }
}

}

var speakWord1 = "Hello";

function speak1(name) {
  console.log(speakWord1 + " " + name);
}

var speakWord2 = "Good Bye";

function speak2(name) {
  console.log(speakWord2 + " " + name);
}
