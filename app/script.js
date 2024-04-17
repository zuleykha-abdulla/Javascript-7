//burda a[0] birinci qeremi temsil edir yeni 1
var a = [1, 3, 5, 2, 4];
alert(a[0]);

//

var b = new Array(3, 6, 5, 7, 4);
alert(b[0]);

//

var c = [1, 3, 5, 2, 4];
c[0] = 42;
alert(c[0]);

//

var d = [1, 3, 5, 2, 4];
alert(d);

// regem evezine adlardan istifade olunur

var olkeler = ["Azerbaycan", "Turkiye", "Rusiya"];
alert(olkeler[0]);

//Bəzi hallarda çoxluğun uzunluğu məlum olmur və onun uzunluğunu tapmağa ehtiyac olur. Bu halda çoxluğun uzunluğunu tapmaq üçün length xüsusiyyətindən istifadə olunur.

var country = ["Almaniya", "Bolqariya", "Canada"];
alert(country.length);
