//fetch api

const btn =document.querySelector("#btn");
btn.addEventListener("click" , getPosts);

const cardDom = document.querySelector("#card");

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( response => {
        return response.json();
    })
    .then((post) =>{
        post.forEach(eleman=>{
            const card = document.createElement("div");
            card.classList.add("card","w-25");
            cardDom.appendChild(card);
            const p = document.createElement("p");
            cardDom.appendChild(p);
            const h3 = document.createElement("h3");
            cardDom.appendChild(h3);
            p.textContent = eleman.title;
            h3.textContent = eleman.completed;
        })    
    })
}