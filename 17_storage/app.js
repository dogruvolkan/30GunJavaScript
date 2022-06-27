
//There are two web storages
//sessionstorage
//localstorage

//string ekleme ve alma
localStorage.setItem("userName" ,"volkan");
localStorage.setItem("city","aydın");
console.log(localStorage.getItem("userName"));


//dizi ya da object ekleme ve alma
const skills = ["html","css","bootstrap","js","react"];
localStorage.setItem("yetenek",JSON.stringify(skills));

let ozelik = JSON.parse(localStorage.getItem("yetenek"));
console.log(ozelik);



//clear()  depolamayı temizler
localStorage.clear();