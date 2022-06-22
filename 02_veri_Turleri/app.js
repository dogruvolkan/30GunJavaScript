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





