//diziler

//Array() kurucusu ile dizi oluşturma
const dizi = Array(1,2,5);
console.log(dizi);

const dizi2 = new Array(4,7,8);
console.log(dizi2);


// köşeli parantez ile dizi oluşturma
const dizi3 = [4,5,2];

//dizi elemanlarını yazdırma 

//for of ile dizi elemanlarını yazdırma
const fruits =["elma","kivi",4,8];
for(let fruit of fruits){
    console.log(fruit);
}

//diziler farklı veri türlerini içerebilir
const groups = [1,4,"elma",true,["muz","kivi"]];


//string metodu olan split() ile dizi oluşturulabilir
const metin = "merhaba ben volkan aydında yaşıyorum";
const dizi4 = metin.split(" ");
for(let item of dizi4){
    console.log(item);
}


//dizi elemanlarına index numarası ile ulaşma
const dizi5 = ["banana","orange","mango","lemon"];
console.log(dizi5[0]);
console.log(dizi5[dizi5.length-1]);


//dizi elemanlarını değiştirme
dizi5[0]="watermelon";
console.log(dizi5[0]);


//dizi elemanlarına for döngüsüyle erişme

for(let i=0 ; i<dizi5.length ; i++){
    console.log(dizi5[i]);
}


//dizi elemanlarını forEach() metodu ile yazdırma
console.log("-------------------forEach-------------------------")

dizi5.forEach(function(eleman){
    console.log(eleman);
})

console.log("-------------------forEach arow-------------------------")
//foreach ve arrow function ile dizi elemanlarını yazdırma
dizi5.forEach(eleman=>{
    console.log(eleman);
})


//dizi metodları

//fill(): dizi boyutu kadar aldığı parametreyle diziyi doldurur
const dizi6 = Array(5);
dizi6.fill("a");
console.log(dizi6);


//concat() :iki diziyi birleştirmek için kullanılır
const dizi7 = [1,2];
const dizi8 = ["a","b","a","c"];
console.log(dizi7.concat(dizi8));


//length dizi boyutunu verir
console.log(dizi6.length);


//indexOf() belirtilen elemanın dizi içerisinde olup olmadığına bakar varsa index numarasını yoksa -1 döndürür
console.log(dizi8.indexOf("a"));


//lastIndexOf() dizi içerisinde aranan elemandan birden fazla varsa en sonuncunun index numarasını verir
console.log(dizi8.lastIndexOf("a"));


//includes() elemanın dizi içerisinde olup olmadığına bakar true false döndürür
console.log(dizi8.includes("a"));


//isArray() veri türünün dizi olup olmadığına bakar
console.log(Array.isArray(dizi8));


//join() dizi elemanlından string oluşturur
console.log(dizi8.join(""));


//slice() dizinin belirtilen aralığını alır ve yeni dizi döndürür
const dizi9 = [1,2,3,4,5,6];
console.log(dizi9.slice(2,4));    //[3,4]


//splice() 3 parametre alır ilk iki parametre ile silincek aralık belirlenir isteğe bağlı olarak 3. parametre ile çıkarılan kısım yerine eklenecek kısım yazılır
dizi9.splice(0,2,"kedi");
console.log(dizi9);


//push() dizinin sonuna eleman ekleme
dizi9.push("sen");
console.log(dizi9);


//unshift()  dizinin başına eleman ekleme
dizi9.unshift("nerdesin");
console.log(dizi9);


//pop() dizinin sonundaki elemanı silme
dizi9.pop();
console.log(dizi9);


//shift() dizinin başındaki elemanı silme
dizi9.shift();
console.log(dizi9);


//reverse() dizi elemanlarının sıralamasını ters çevirir
dizi9.reverse();
console.log(dizi9);


//sort() dizi elemanlarını sayısal ve alfabetik olarak küçükten büyüğe doğru sıralama
dizi9.sort();
console.log(dizi9);
dizi9.sort(function(a,b){return b-a});  //bu parametre ile sıralamayı değiştiririz
console.log(dizi9);
