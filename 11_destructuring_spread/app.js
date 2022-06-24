//destructuring

//dizilerde destructuring değişkenlere aktarma
const numbers = [1,2,3];
let [n1,n2,n3]=numbers;
console.log(n1,n2,n3);


//ayşe herhangi bir değişkene atanmadı
//geri kalan isimler otherName değişkenine atandı
const isimler =["ali","ayşe","selim","gizem","pınar"];
let [i1, ,i2, ...otherName] = isimler;


//nesnelerde destructuring  değişkenlere aktarma
const users ={
    ad:"volkan",
    yas:45,
    sehir :"aydın"
}

//nesne keyleri değişkenlere aktarıldı ve sehir key vilayet olarak değiştirildi
const {ad,yas , sehir:vilayet} = users;
//eski kullanımda nesne adı üzerinde elemanlara ulaşılıyordu
console.log(users.ad);
console.log(ad);
console.log(vilayet);


//spread operator

//dizi elemanlarının geri kalanlarını almak için kullanılır
const sayilar=[1,2,3,4,5,6];
let [r1,r2, ...otherRakam] = sayilar;
console.log(r1);
console.log(otherRakam);


//diziyi kopyalamak ve birleştirmek için kullanılır
const group1 = [1,2,3];
const group2 = [4,5,6];
const groups =[...group1 , ...group2];
console.log(groups);


//stringi parçalayıp dizi haline getirme
const isim="volkan";
const isimDizisi = [...isim];
console.log(isimDizisi);        //['v', 'o', 'l', 'k', 'a', 'n']
