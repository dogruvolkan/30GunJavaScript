//regexp oluşturmanın 2 yöntemi vardır
//1.yöntem / işareti ile
//2.yöntem Regexp() constructor ile

//düzenliyiciler
//g :  global arama işlemini tüm string içerisinde yapar
//i :  ignorace büyük küçük harf duyarlılığı olmadan arama yapar
//m :  multiline çok satırlı metinlerde aramayı tüm satırlarda yapar
//u :  unicode unicode karakter setinin desteklenmesi için 

const metin = "I love javaScript the best lang is javascript";
// const ifade = /javascript/gi;
const ifade = new RegExp("javascript","gi")

//test() metodu parametre olarak verilen ifadeyi stringte arar blursa true bulmazsa false döndürür
const sonuc = ifade.test(metin);
console.log(sonuc);

//match() eşleşme sağlanırsa eşleşmeyi bir dizide döndürür
const sonuc2 = metin.match(ifade);
console.log(sonuc2);

//search() eşleşme sağlanırsa index numarasını verir
const sonuc3 = metin.search(ifade);
console.log(sonuc3);

//replace() eşleşme sonucunda eşleşen ifadeyle parametre olarak verilen ifadeyi yer değiştirir
const sonuc4 = metin.replace(ifade,"css");
console.log(sonuc4);


//desenler

//[a-z]  : a dan z ye herhangi bir harf
//[0-9]  : 0 dan 9 a kadar herhangi bir rakam

// \d  :rakam içermesi
// \D  :rakam içermemesi

// .  : \n hariç herhangi bir karakter


// ^  : belirtilen ifadeyle başlaması ve olumsuzlama
// ^kedi : kedi ile başlaması
//[^ab]  : a ve b harfleri dışında


// $  : belirtilen ifade ile sonlanması
// kedi$ : kedi ile bitmesi

//*  : 0 ya da daha fazla tekrarlanması
//+  : 1 ya da daha fazla tekrarlanması
//?  : 0 ya da 1 defa tekrarlanması

//{}  : belirtiğimiz kadar tekrarlanması
//{3}    : 3 defa tekrarlanması
//{3.}   : 3 ya da daha fazla tekrarlanması
//{2,7}  : en az 2 en fazla 7 defa tekrarlanması


// | : ya ya da
// isim | yas  : isim ya da yaş