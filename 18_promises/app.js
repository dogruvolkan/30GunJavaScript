//promise

const doPromise = new Promise((resolve ,reject)=>{   //parametreler öntanımlı
    setTimeout(() =>{
        const skills = ["html","css","js"];
        if(skills.length>0){
            resolve(skills);
        }
        else{
            reject("hata oldu");
        }
    },2000)
})

doPromise
    .then(result=> console.log(result))                     //promise sonuca   
    .catch(error => console.log(error));   //promise reddedildiğinde



const todos = [
    {title:"Todo 1", description : "yemek ye"},
    {title:"Todo 2", description : "ders çalış"}
]

let ulDom = document.querySelector("#todoList");

function todoList(){
    setTimeout(() =>{
        let todoItems ="";
        todos.forEach(item=>{
            todoItems +=`
                <li>
                    <b>${item.title}</b>
                    <p>${item.description}</p>
                </li>
            `
        })
        ulDom.innerHTML = todoItems;
    },1000)
}


function newTodo(todo , callback){
    setTimeout(() =>{
        todos.push(todo);
        callback();
    },2000);
}

newTodo(
    {
        title:"todo 3",
        description : "discoya git"
    },
    todoList
);