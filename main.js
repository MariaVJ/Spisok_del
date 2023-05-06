const form =document.getElementById("form");
const todoul= document.getElementById('todo');

const all =document.getElementById("all");
const done =document.getElementById("done");
const notDone =document.getElementById("notDone");

const ulli=document.getElementsByTagName("li")

all.addEventListener("click", event =>{
    for (let i=0; i<ulli.length;i++){
        ulli.item(i).classList.remove("hidden");
    }

})

done.addEventListener("click",event =>{
for (let i=0; i<ulli.length;i++){
    if (ulli.item(i).classList.contains("done")){
        ulli.item(i).classList.remove("hidden");
    }else {
        ulli.item(i).classList.add("hidden");
    }
}
    
})

notDone.addEventListener("click",event =>{
    for (let i=0; i<ulli.length;i++){
        if (ulli.item(i).classList.contains("done")){
            ulli.item(i).classList.add("hidden");
        }else {
            ulli.item(i).classList.remove("hidden");
        }
    }
        
    })
form.addEventListener("submit", event=>{
    event.preventDefault();
    newElement();
})

todoul.addEventListener("click", function (ev) {
    if (ev.target.tagName=== "LI"){
        ev.target.classList.add('done')
    }
    else if (ev.target.tagName==="SPAN"){
        let li= ev.target.parentNode;
        li.remove();

    }
} )


function newElement() {
    const userInput=document.getElementById("UserInput").value;
    const ul= document.querySelector('ul')
    const li=document.createElement("li");
    let text= document.createTextNode(userInput);
    li.appendChild(text);
    if (document.getElementById("UserInput").value != "")
    ul.appendChild(li);
    document.getElementById("UserInput").value = "";

    let span = document.createElement('span');  
    let sym = document.createTextNode("X")
    span.appendChild(sym);
    span.className = "close";
    li.appendChild(span);
}


