//bir çoxluğumuz var və çoxluğun bütün elementlərinin kök altısının tapılmasını istəyirik.
var a = [9, 49, 36];
var b = a.map(Math.sqrt);
alert(b);

//ədədin kvadratını tapan funksiya yaradıb map vasitəsilə onu çoxluğun bütün elementlərinə tətbiq edirik
function kvadrat(x) {
  return x * x;
}
var c = [3, 4, 5];
var d = c.map(kvadrat);
alert(d);

//Funksiyanı birbaşa map daxilində də yaza bilərik.
var a = ["Wellcome to Baku!", "Have a nice day!", "See you soon!"];
a.map(function (x) {
  h1.innerHTML += x + "<br>";
});

document.write("<br>");
document.write("<br>");

var b = ["To day a nice day!", "We are together again!", "God bless us!"];
b.map(function (y) {
  h1.innerHTML += y + "<br>";
});

//
var d = ["Orxan", "Aybeniz", "Cavid"];
d.map(function (item, index) {
  title.innerHTML += index + ":" + item + "<br>";
});
