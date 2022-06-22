//boolean
let isLightOn = true;
let isDoorOpen = false;

let isCompare = 4 > 3;
console.log(isCompare);

// 0 hariç tüm sayılar ve içi dolu olan ifadeler tru döndürür
// false döndürenler 0 , NAN , "" , null , undefined , false 

//undifend tanımladığımız ama değer atamadığımız 
let sayi;
console.log(sayi);


//operators

// = değişken atama operatörü
let number = 14;

// + toplama operatörü
console.log(4 + 5);

// - çıkarma operatörü
console.log(9 - 8);

// * çarpma operatörü
console.log(7 * 8);

// / bölme operatörü
console.log(8 / 2);

// % mod alma operatörü
console.log(8 % 2);

// ** üs alma operatörü
console.log(2 ** 5);


//karşılaştırma operatörleri

// == sadece değerlerin eşit olup olmadığına bakar
console.log(7 == "7"); //true değerler eşit

// === değişken değeri ve türünün eşit olup olmadığına bakar
console.log(7 === "7"); //false değişken değerleri eşit ama türler aynı değil

// != eşit değildir
console.log(3 != 2); //true çünkü 3 2 ye eşit değildir

// > büyüktür 
console.log(3 > 2);

// < küçüktür
console.log(24 < 7);

// >= büyüktür ve eşit
console.log(7 >= 7); //true büyük değil ama eşit

// <= küçüktür ve eşit
console.log(8 <= 2); //false 8 2 den küçük ya da eşit değil



//mantıksal operatörler

// && ve
const kontrol = 7 == 8 && 6 == 6;
console.log(kontrol); //false

// || veya
const kontrol2 = 7 == 8 || 6 == 6;
console.log(kontrol2); //true


// ! değil 

const kontrol3 = (4 > 5);
console.log(kontrol3); //false
console.log(!(4 > 5)); // !(false) = true


//artırma operatörleri

//pre-increment
let sayac = 0;
console.log(++sayac); // 0 artırdık 1 oldu yazdık 1;

//post-increment
let sayac2 = 0;
console.log(sayac2++); //0 yazdık daha sonra artırdık cevap sıfır
//hafıza 1 olarak tutuldu  yazdıralım
console.log(sayac); //1


//azaltma operatörleri

//pre-decrement
let sayac3 = 1;
console.log(--sayac3); //1 di azaltık 0 oldu yazdık 0

//post-decrement
let sayac4 = 1;
console.log(sayac4--); //1 di yazdık 1 azaltık hafızada 0 
console.log(sayac4); //0


//ternary operators
//tek satırda if else koşularını yazmamızı sağlar
let isRaining = true;
isRaining ? console.log("şemsiye al") : console.log("şemsiye alma");


//windows method

//aler()  
//console.log(alert("hoşgeldiniz"));

//prompt()
//console.log(prompt("bir sayi girin: "));

//confirm()
//console.log(confirm("are you sure"));



// date object

const now = new Date();
console.log(now);

//getFullYear(): yılı verir
console.log(now.getFullYear());

//getMonth() : ayı sayı ile verir
console.log(now.getMonth());

//getDate() : ayın kaçıncı günü olduğunu verir
console.log(now.getDate());

//getHours() : saati verir
console.log(now.getHours());

//getMinutes() : dakikayı verir
console.log(now.getMinutes());

//getSeconds() : saniyeyi verir
console.log(now.getSeconds());

//getMilliseconds() : milisaniyeyi verir
console.log(now.getMilliseconds());

//getTime()  1ocak 1970 tarihinden itibaren geçen saniyeyi verir
console.log(now.getTime());

//getDay()  : haftanın kaçıncı günü olduğunu verir
console.log(now.getDay());

//  gg/aa/yy  saat/dakika/saniye

let gun = now.getDate();
let ay = now.getMonth();
let yil = now.getFullYear();



if (gun < 10) {
    gun = "0" + gun;
} else if (ay < 10) {
    ay = "0" + ay;
} else if (yil < 10) {
    yil = "0" + yil;
}

let tarih = `${gun}/${ay}/${yil}`;
console.log(tarih);


let saat = now.getHours();
let dakika = now.getMinutes();
let saniye = now.getSeconds();

if (saat < 10) {
    saat = "0" + saat;
} else if (dakika < 10) {
    dakika = "0" + dakika;
} else if (saniye < 10) {
    saniye = "0" + saniye;
}

let tamSaat = `${saat}:${dakika}:${saniye}`;
console.log(tamSaat);