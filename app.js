const form = document.querySelector('form');
const ul = document.querySelector('ul');
const clearBtn = document.querySelector('.clearBtn');
const input = document.getElementById('item');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items',JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) =>{
    const li = document.createElement("li");
    const icon = document.createElement("i");
    li.className = "reverseIcon";
    icon.className ='fas fa-check';
    li.textContent= text;
    ul.appendChild(li);
    li.appendChild(icon);
}

form.addEventListener("submit",function(e){
    e.preventDefault(); // prevent auto refresh

    itemsArray.push(input.value);
    localStorage.setItem('items',JSON.stringify(itemsArray));
    if(input.value !==""){
        liMaker(input.value);
    }else{
        alert("please entry something")
    }
    input.value="";
})

data.forEach(element => {
    liMaker(element)
});

//delete

clearBtn.addEventListener('click',function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
})