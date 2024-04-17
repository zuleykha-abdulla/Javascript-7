// her soz ayri-ayriliqda qeyd edilir

var olkeler = ["Azerbaycan", "Turkiye", "Rusiya"];
var uzunluq = olkeler.length;
for (i = 0; i < uzunluq; i++) {
  document.write(olkeler[i] + "<br>");
}

// Nəticədə elementlərin yerlərini dəyişdiyini, azdan çoxa sıralandığını görəcəyik.
var regem = [3, 5, 1, 2, 8];
regem.sort();
alert(regem);

//Elementlər ədəd yox yazı olduqda sıralama əlifba sırasına görə aparılır.
var adlar = ["Orxan", "Elxan", "Cavid", "Aygun", "Bilure"];
adlar.sort();
alert(adlar);

//Bəzən çoxluğa yeni element əlavə etmək lazım ola bilər. Bunu push() funksiyası ilə edə bilərik
var names = ["Orxan", "Elxan", "Cavid", "Aygun", "Bilure"];
names.push("Gulnare");
alert(names);

//Burada fruit=[]; yazaraq çoxluq elan etdiyimizi bildiririk. İlk olaraq çoxluğun elementi olmur və boş olur
var fruit = [];
fruit[0] = "Alma";
fruit[1] = "Banan";
fruit[2] = "Gavali";
alert(fruit);
