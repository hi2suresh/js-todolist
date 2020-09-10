window.onload = function(){
 const addInput = document.getElementById('add-input');
 const addButton = document.getElementById('add-button');

 const addItemHandler = () => {
     let inputValue = addInput.value;
     console.log(inputValue);
 }
 addButton.addEventListener('click', addItemHandler);
};