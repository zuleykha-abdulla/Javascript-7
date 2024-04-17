//Beləliklə çoxluq elementləri vergüllə ayrılaraq string tipinə çevrilir və çap olunur
var olkeler = ["Azerbaycan", "Turkiye", "Rusiya"];
var yazi = olkeler.toString();
alert(yazi);

// Bu funksiya isə elementlərin arasına istənilən simvolu qoya bilir
var country = ["Azerbaycan", "Turkiye", "Rusiya"];
var goster = country.join(" * ");
alert(goster);

//pop() funksiyası — Bu funksiya çoxluğun son elementini silmək üçün istifadə olunur
var fruit = ["Alma", "Banan", "Gavali"];
fruit.pop();
alert(fruit);

// push() funksiyası — çoxluğa yeni element əlavə etmək üçün istifadə olunur
var adlar = ["Orxan", "Cavid", "Arzu"];
adlar.push("Akber");
alert(adlar);

//shift() funksiyası — Bu funksiya çoxluğun ilk elementini silmək üçün istifadə olunur
var words = ["Good morning", "Wellcome", "Have a nice day!", "See you soon!"];
words.shift();
alert(words);

//unshift() funksiyası — Bu funksiya çoxluğun əvvəlinə yeni element əlavə etmək üçün istifadə olunur
var rivers = ["Araz", "Kur", "Volga cayi"];
rivers.unshift("Ural");
alert(rivers);

// splice() funksiyası — çoxluğa yeni elementlər əlavə etmək üçün istifadə olunur
var denizler = ["Xezer", "Karadeniz", "Marmara"];
denizler.splice(2, 0, "Adriatik", "Baltik", "Qirmizi deniz");
alert(denizler);

//Bu funksiya çoxluqdan elementləri silmək üçün də istifadə oluna bilər
var flags = ["Azerbaycan", "Turkiye", "Amerika"];
flags.splice(0, 2);
alert(flags);

//concat() funksiyası — Bu funksiya bir neçə çoxluğu birləşdirərək yeni bir çoxluq yaratmaq üçün istifadə olunur
var meyveler = ["albali", "erik", "gilas"];
var meyveler2 = ["banan", "alma", "gavali"];
var meyveler3 = meyveler.concat(meyveler2);
alert(meyveler3);

//Aşağıdakı nümunədə isə 3 ədəd çoxluğun birləşməsindən yeni bir çoxluq alınır.
var derslik = ["Riyaziyyat", "Fizika", "Kimya"];
var derslik2 = ["Informatika", "Biologiya", "English"];
var derslik3 = ["Edebiyyat", "Azerbaycan dili"];
var derslik4 = derslik.concat(derslik2, derslik3);
alert(derslik4);

//split() funksiyası — Bu funksiya bir yazını müəyyən bir simvola görə ayırıb yeni bir çoxluq yaratmaq üçün istifadə olunur
var kitab = "Bu kitab cox qiymetlidir.";
var array = kitab.split(" ");
alert(array);
//reverse() funksiyası — Çoxluqdakı element ardıcıllığını tərsinə çevirmək üçün istifadə olunur. Nəticədə elementlərin yerləşmə ardıcıllığının tərsinə çevrildiyini görə bilərik.
var banklar = ["Kapital Bank", "ABB", "Respublika Bank", "Azer Turk Bank"];
banklar.reverse();
alert(banklar);
