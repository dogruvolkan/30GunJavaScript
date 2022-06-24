//set()  her değerin sadece birer kez yazıldığı veri türüdür

//create set
const sayilar = new Set();
sayilar.add(1);
sayilar.add(2);
sayilar.add(3);
sayilar.add(3);
sayilar.add(4);
sayilar.add(5);
console.log(sayilar);

//size set elaman sayısını verir
console.log(sayilar.size)

//delete() set eleman silme
sayilar.delete(3);
console.log(sayilar);

//has() parametre olarak verilen elemanın set içerisinde olup olmadığına bakar
console.log(sayilar.has("apple"));

//clear()  set içini temizler
sayilar.clear();

//diziden set oluşturma
const dizi = ["sen","bir","ben","bir"];
const sarkiSet = new Set(dizi);
console.log( sarkiSet);   //tekrar eden elemanlardan yalnızca birer tane bırakır


//set elemanlarını for of ve forEach() ile  yazdırma
for(let item of sarkiSet){
    console.log(item);
}

sarkiSet.forEach(eleman=>{
    console.log(eleman);
})


//map veri tipi
const iller = new Map();
//set() metodu ile eleman eklenir
iller.set("01","adana");
iller.set("02","adıyaman");
iller.set("35","izmir");

//get() metodu ile map veri türünden değer alınır
console.log(iller.get("35"));


//size map veri türündeki elemanların sayısını verir
console.log(iller.size);


//has() metodu parametre aldığı key değerinin olup olmadığına bakar
console.log(iller.has("02"));


//delete() aldığı key değeri sonucu elemanı siler
iller.delete("02");
console.log(iller)

//keys() map veri türündeki tüm key değerlerini verir
console.log(iller.keys());

//values()  map veri türündeki tüm value değerlerini verir
console.log(iller.values());

//clear()
iller.clear();
console.log(iller)