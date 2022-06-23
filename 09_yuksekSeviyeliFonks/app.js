//yüksek seviyeli fonksiyonlar

//callback fonksiyonlar

const callback = n => {
    return n ** 2;
}

function cube(callback, n) {
    return callback(n) * n;
}
console.log(cube(callback, 5));

//setinterval()

function sayHello() { //callback fonksiyon
    console.log("hello");
}
//setInterval(sayHello ,1000);   her 1 saniyede çalışır

function sayBye() { //callback fonksiyon
    console.log("bye bye");
}
setTimeout(sayBye, 4000);


//.forEach() metodu
const dizi = ["elma", "muz", "kivi","ananas"];
const elemanlar = dizi.forEach(item => {
    console.log(item);
})

const elemanlar2 = dizi.forEach(function (item2, index, array) {
    console.log(item2);
    console.log(index);
    console.log(array);
})


//map() , forEach() metodu gibi dizi elemanlarını döndürür ve geriye dizi döndürür

const sayilar = [2, 4, 8];
const elemanlar3 = sayilar.map(item3 => {
    return item3 * 3;
})

console.log(elemanlar3);


//filter() verilen koşulu sağlayan dizi elemanlarını bir dizide toplar
const kosul = dizi.filter(item5 => {
    return item5.length > 3;
})

console.log(kosul);


//every() dizideki tüm elemanlarının belirtilen kosulu sağlayıp sağlamadığına göre true false döndürür
const kosul2 = dizi.every(item6=>{
    return item6.length>=3;
})

console.log(kosul2);  //true döner 


//find() belirtilen koşulu sağlayan ilk elemanı döndürür
const kosul3 = dizi.find(item7=>{
    return item7.length==3;
})

console.log(kosul3);


//findIndex()  belirtilen koşulu sağlayan ilk elemanın indeksini döndürür
const kosul4 = dizi.findIndex(item8 =>{
    return item8.length==3;
})

console.log(kosul4);



//some() ,every() metodu gibidir farkı sadece bir elemanın koşulu sağlaması yeterlidir every() metodunda tüm elemanların koşulu sağlaması gerekmekte

const kosul5 = dizi.some(item9 =>{
    return item9.length>=6;
})

console.log(kosul5);   //true sadece ananas sağlar


//sort() dizi elemanlarını default olarak alfabetik ya daküçükten büyüğe doğru sıralar tam tersi için function(a,b){return b-a} parametresi eklenir

const dizi7 = [8,1,6,14,5];
console.log(dizi7.sort());
console.log(dizi7.sort(function(a,b){return b-a}));

const dizi8 =["ankara","izmir","aydın","sakarya","bilecik"];
console.log(dizi8.sort());



//reduce()
