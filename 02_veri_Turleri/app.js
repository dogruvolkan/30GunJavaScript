//string tanımlama

let city = "";
let firstName ="volkan";
let country = "Türkiye";

//string birleştirme

let message = "Merhaba "+ firstName +" "+ country;
console.log(message);

//template literals

let message2 = `Merhaba sayın ${firstName} siz ${country}`;
console.log(message2);

//number tanımlama

let age=22;
const KDV =7.41;

console.log(age);

//dizi tanımlama

let nums = [1,2,3];
let numbers = [1,2,3];
let fruits =["elma","armut","kiraz"];
let groups =[1,"selim",4,"alper"];
console.log(nums==numbers);
console.log(fruits);
console.log(fruits[2]);


//obje tanımlama

let userOne ={
    firstName :"volkan",
    country :"turkey",
    age:22
}

let userTwo= {
    firstName :"asel",
    country :"turkey",
    age:3
}

console.log(userOne==userTwo);
userOne = userTwo;
console.log(userOne==userTwo);


//Math object

const PI =3.14;
console.log(Math.round(PI));              //en yakın sayıya yuvarlar
console.log(Math.floor(PI));              //aşağıya yuvarlar
console.log(Math.ceil(PI));               //yukarı yuvarlar  
console.log(Math.min(7,8,1,5,4));        //minimum sayıyı verir
console.log(Math.max(7,8,4,1,6));        //maksimum sayıyı verir


//random sayı üretme 

const rndNumber =Math.random();   //0-1 arasında sayı üretir
console.log(rndNumber);

const rndNumber2 = Math.round(Math.random() * 11);   //0-10 arasında
console.log(rndNumber2);

const rndNumber3 = Math.round(50+ Math.random() *50)
console.log(rndNumber3);


console.log(Math.abs(-10));              //mutlak değerini verir
console.log(Math.sqrt(100));             //karekökünü verir
console.log(Math.pow(5,2));               //kuvvetini alır



//string metotları

//charAt()   aldığı index değerinindeki stringin değerini verir
//length   string ifadenin karakter sayısını verir
let metin1 = "Merhaba ben javascript çalışıyorum";
console.log(metin1.charAt(5));                    //5.indeksteki değeri verir
console.log(metin1.length)                        //metinin uzunluğu
console.log(metin1.charAt(metin1.length-1));      //son index değerini verir


//charCodeAt()   indexteki değerinin ASCII karşığını verir
console.log(metin1.charCodeAt(0));      //0.index = M   M ASCII =77


//concat()   string birleştirmede kullanılır
let city1 = "kahraman";
let city2 = "maraş";
console.log(city1.concat(city2));
console.log(city1.concat(" selimiye"));


//endsWith()  stringin belirtilen ifade ile bitip bitmediğine bakar true ve false
console.log(city1.endsWith("aş"));
console.log(city1.endsWith("man"));


//starsWith() stringin belirtilen ifade ile başlayıp başlamadığına bakar
console.log("kar ile başlıyor mu " +  city1.startsWith("kar"));


//includes()  stringin belirtilen ifadeyi içerip içermediğine bakar true false
console.log(city1.includes("a"));
console.log(city1.includes("e"));


//indexof()  stringim belirtilen ifadeyi içerip içermediğine bakar içeriyorsa index numarasını içermiyorsa -1 döndürür
console.log(city1.indexOf("a"));      //a içerir ve 1.indexte
console.log(city1.indexOf("e"));      //e içermez ve -1 döndürür


//lastIndexOf() stringin belirtilen ifadeyi içerip içermediğine bakar birden fazla içeriyorsa sonuncunun index numarasını içermiyorsa -1  döndürür

console.log(city1.lastIndexOf("a"));  //a birden fazla içerir sonuncu index=6


//repeat()  aldığı parametre değeri kadar string ifadeyi tekrarlar
console.log(city1.repeat(10));


//replace() eski parametre ile yeni parametreyi değiştirir ilk eşleşenleri
//replaceAll() eski parametre ile yeni parametreyi değiştirir eşleşen hepsini
let metin3 = "ben bir kekmiyim ben bir elma mıyım";
console.log(metin3.replace("ben","sen"));
console.log(metin3.replaceAll("ben","sen"));


//search() , indexOf() metodu ile aynıdır eşleşme varsa index numarasını yoksa -1 verir
console.log(metin3.search("ben"));
console.log(metin3.search("sen"));


//split() stringi belirli bir karakter ayıracına göre böler ve dizi döndürür
let dizi = metin3.split(" ");
console.log(dizi[0]);


//substring()  stringi parlaçamak için kullanılır başlangı. ve karakter sayısı olmak üzere 2 tane parametre alır
let metin4 = "türkiye";
console.log(metin4.substring(0,3));  //0.indexten başla 3 karakter al
console.log(metin4.substring(3));    //3.indexten başla sona kadar


//slice() stringi parlaçamak için kullanılır başlangı. ve karakter sayısı olmak üzere 2 tane parametre alır negatif index değeride alabilir
console.log(metin4.slice(0,3));
console.log(metin4.slice(3));
console.log(metin4.slice(-2));


//toLowerCase() , toLocaleLowerCase() tüm büyük harfleri küçük harf yapar local olan ise türkçe harf duyarlılığı vardır
let metin5 = "ŞEKERİM";
console.log(metin5.toLocaleLowerCase());


//toUpperCase() , toLocaleUpperCase() tüm küçük harfleri büyük harf yapar local olan ise türkçe harf duyarlılığı vardır
let metin6 = "şekerim";
console.log(metin6.toLocaleUpperCase());


//trim() baştaki ve sondaki boşlukları alır
let metin7 = " selam ";
console.log(metin7);
console.log(metin7.trim());
