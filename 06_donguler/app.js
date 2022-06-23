//döngüler

//for döngüsü
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i*i}`);
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const yeniDizi = [];
for (let i = 0; i < countries.length; i++) {
    yeniDizi.push(countries[i].toLocaleUpperCase());
}
console.log(yeniDizi);


//while döngüsü
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}


//do while koşul ne olursa olsun do blokları en az bir kez çalışır
// let index = 0;
// do{
//     console.log(index);
//     i++
// }
// while(index<=5);


//for of döngüsü dizi elemanlarını yazdırmak için
const dizi = [1, 2, 3, 4, 5, 6];
for (let item of dizi) {
    console.log(item);
}


//döngülerde break deyimi   şart sağlandığında döngüyü bitirir
for (let sayac = 10; sayac >= 5; sayac--) {
    if (sayac == 7)
        break;
    console.log(sayac);
}

console.log("------------------------------------------")
//döngülerde continue deyimi şart sağlandığında döngünün o adımını atlar diğer adıma geçer
for (let sayac2 = 10; sayac2 >= 5; sayac2--) {
    if (sayac2 == 7)
        continue;
    console.log(sayac2);
}


//egzersizler
// for (let x = 0; x < 10; x++)
// {
//     for (let i = 0; i <= x; i++)
//     {
//        console.log("#");

//     }
//     console.log("\n");
// }



//6 haneli random şifre qc6s13

const rndDizi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "q", "s", "t", "u", "v", "y", "z", "w", "x"];
const password = [];

for (let sayac = 0; sayac < 6; sayac++) {
    const rndNumber2 = Math.round(Math.random() * 36);
    password.push(rndDizi[rndNumber2]);
}
console.log(password.join(""));

//max 100 haneli random şifre mqdb8knionjffpw1vbf2m4
const rndDizi2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "q", "s", "t", "u", "v", "y", "z", "w", "x"];
const password2 = [];

const rndnumber = Math.round(Math.random() * 100);
for (let sayac = 0; sayac < rndnumber; sayac++) {
    const rndNumber3 = Math.round(Math.random() * 36);
    password2.push(rndDizi[rndNumber3]);
}
console.log(password2.join(""));



//hexadecimal code üretme

//rgb(r,g,b) renk üretme


//bonus bölüm dom daha sonra öğrenilecek
//background color rengini buttona her tıklandığında değiştirme
const btn = document.querySelector("#btn");
btn.addEventListener("click", renkDegistir);

function renkDegistir() {
    var red = Math.round(Math.random() * 256);
    var green = Math.round(Math.random() * 256);
    var blue = Math.round(Math.random() * 256);
    const renk = `rgb(${red},${green},${blue})`;
    const body = document.querySelector("body");
    body.style.backgroundColor = renk;
    const renkAlani = document.querySelector("#renkAlani");
    renkAlani.innerHTML = renk;
}