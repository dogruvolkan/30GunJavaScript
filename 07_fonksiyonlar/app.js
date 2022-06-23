//fonksiyonlar

//fonksiyon tanımlama

//parametresiz fonksiyon
function kareAl() {
    const sayi = 4;
    return sayi ** 2;
}

console.log(kareAl()); //16   


//parametreli fonksiyonlar
function kareAl2(sayi2) {
    return sayi2 ** 2;
}

console.log(kareAl2(7)); //49

function sayHello(isim, meslek) {
    return `Merhaba Sayın ${meslek} ${isim} Bey`;
}
console.log(sayHello("volkan", "mühendis"));


//sınırsız parametre durumu dizi ile gönderme
function toplaHepsini(dizi) {
    let toplam = 0;
    dizi.forEach(item => {
        toplam += item;
    })
    return toplam;
}
const sayilar = [8, 7, 6,7 , 12, 5 ,6 ,14];
console.log(toplaHepsini(sayilar));


//sınırsız parametre durumu spread operatör ile birlikte
function carpHepsini(...elemanlar){
    let carpim=1;
    for(let item of elemanlar){
        carpim*=item;
    }
    return carpim;
}

console.log(carpHepsini(2,7,2,5,4));


//anonim fonksiyon : fonksiyon adı olmaz işlemi değişkene atarız
const hesaplaKdv = function(kdvOran , urunSayisi ){
    let sonuc = kdvOran*urunSayisi;
    return sonuc;
}
console.log(hesaplaKdv(1.8,5));


//arrow fonksiyon function ifadesi yerine => ifadesini kullanır
const printFullName = (firstName , lastName) =>{
    console.log(`${firstName}${lastName}`)
}
printFullName("volkan","doğru");


//default parameter fonksiyon
const cemberCevre = (yaricap , piSabiti=3.14)=>{
    const cevre = 2*piSabiti*yaricap;
    return cevre;
}
console.log(cemberCevre(4));