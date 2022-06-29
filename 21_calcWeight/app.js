const btn = document.querySelector(".btn");
btn.addEventListener("click", calcWeight);

let inputArea = document.querySelector(".inputArea");
let selectArea = document.querySelector(".selectArea");

const icerikDom = document.querySelector(".icerik");
const sonucDom = document.querySelector(".sonuc");
const resimDom = document.querySelector(".resim");


function calcWeight(e) {
   
    const photo = document.createElement("img");
    const sonucYazi = document.createElement("h1");
    let agirlik;
    let kutle = inputArea.value;
    let gezegen = selectArea.value;

    if (gezegen == 1) {
        agirlik = parseFloat(kutle * 247.2).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/sun.png");
        resimDom.appendChild(photo);

    } else if (gezegen == 2) {
        agirlik = parseFloat(kutle * 3.70).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/mercury.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 3) {
        agirlik = parseFloat(kutle * 8.87).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/venus.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 4) {
        agirlik = parseFloat(kutle * 9.81).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/earth.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 5) {
        agirlik = parseFloat(kutle * 1.62).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/moon.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 6) {
        agirlik = parseFloat(kutle * 3.77).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/mars.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 7) {
        agirlik = parseFloat(kutle * 23.30).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/jupiter.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 8) {
        agirlik = parseFloat(kutle * 9.2).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/saturn.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 9) {
        agirlik = parseFloat(kutle * 8.69).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/uranus.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 10) {
        agirlik = parseFloat(kutle * 11).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/neptun.png");
        resimDom.appendChild(photo);
    } else if (gezegen == 11) {
        agirlik = parseFloat(kutle * 0.06).toFixed(2) + 'N';
        sonucYazi.textContent = agirlik;
        sonucYazi.className = "yazi";
        sonucDom.appendChild(sonucYazi);
        photo.setAttribute("src", "img/pluto.png");
        resimDom.appendChild(photo);
    }

}