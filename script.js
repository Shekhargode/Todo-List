const input=document.getElementById("inputItem");
const list=document.getElementById("listcontainer");

function addTask(){
    if(input.value===''){
        alert("Enter any task");
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
list.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showItems(){
    list.innerHTML=localStorage.getItem("data");
}
showItems();