// scope değişkenlerin kapsam alanıdır
// global ve local olmak üzere 2 ye ayrılır

//değişkenler var let ve const ile tanımlanır
//var ile tanımlanan değişkene her yerden erişebiliriz kullanımı tavisye edilmez
//let ile tanımlanan değişkene sadece tanımlandığı block içerisinde erişilir
//const sabit tanımlarken const let gibi localdir

var selam = "hi everyone";

function sayHi(){
    console.log(selam);   //selam değişkeni global her yerden erişilir
}
sayHi();


function topla(){
    let sayi =15;
    return sayi +5;
}

//console.log(sayi);   sayiya erişemeyiz çünkü local
console.log(topla());


//object

const person ={
    firstName :"ali",
    birthYear:2000,
    city: "turkey",
    //obje içerisine arrow function eklediğimizde this anahtar sözcüğünü kullanamayız
    calculateAge : function(){
        const tarih = new Date();
        return tarih.getFullYear()-this.birthYear;
    }
}

//nesne elemanlarına erişme
console.log(person.birthYear);
console.log(person["firstName"]);
console.log(person.calculateAge());
