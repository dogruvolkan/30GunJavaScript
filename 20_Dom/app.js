//dom işlemleri

const allTitle = document.getElementsByTagName('h1');
const allTitle2  =document.getElementsByClassName('title')
const baslikDom = document.getElementById('second_title');
const baslikDom2 = document.querySelector('#first_title');   //id class ve tagname ile almak için kullanılır
const allTitle3 = document.querySelectorAll('h1');           //tüm h1 etiketlerini seçer

baslikDom.className = 'kirmizi';
baslikDom2.id = 'yesil';
baslikDom.setAttribute("class","red");
baslikDom.classList.add("kirmiz","buyuk");
baslikDom.classList.remove("kirmizi");
baslikDom2.textContent ="merhaba ben bir metinim";
baslikDom2.style.fontSize="12px";


const ulDom = document.querySelector("#list");
const liDom = document.createElement("li");
const aDom = document.createElement("a");
aDom.textContent="Google için tıkla"
aDom.setAttribute("href","https://www.google.com.tr/?hl=tr")
aDom.classList.add("link");
ulDom.appendChild(liDom);
liDom.appendChild(aDom);

baslikDom2.remove();