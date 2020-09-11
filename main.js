window.onload = function(){
 const addInput = document.getElementById('add-input');
 const addButton = document.getElementById('add-button');
 const ul = document.querySelector('#list');
 const addItemHandler = () => {
     let inputValue = addInput.value;
     if(!inputValue) {
         return;
     }

 const finishTaskHandler = (e) => {
     if(e.target.checked){
        e.target.setAttribute('class', 'strike');
     } else {
        e.target.removeAttribute('class');
     }
 }

     const template = document.getElementById('template');
     const clone = document.importNode(template.content, true);
     clone.querySelector('span').textContent = inputValue;
     clone.querySelector('input').addEventListener('click', finishTaskHandler);
     ul.appendChild(clone);
     addInput.value = '';

 }
 addButton.addEventListener('click', addItemHandler);
};