//Çünki map yeni çoxluq döndürür, forEach isə yeni çoxluq döndürmür.
var a = [1, 2, 3];
var b = a.map(function (f) {
  return f * f;
});
var c = a.forEach(function (f) {
  return f * f;
});
console.log(b);
console.log(c);

//map funksiyasından sonra birbaşa başqa funksiyaları işlədə bilərik
var a = [1, 2, 3];
var b = a.map(Math.sqrt).sort();
console.log(b);
