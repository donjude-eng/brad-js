const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');


////clear input

taskInput.value='';

form.addEventListener('submit', runEvent);

////Keydown
 taskInput.addEventListener('keydown' , runEvent);

// //keyup
taskInput.addEventListener('keyup' , runEvent);

////keypress
taskInput.addEventListener('keypress' , runEvent);

////Foucs
taskInput.addEventListener('focus',runEvent);

////Blur
taskInput.addEventListener('blur' , runEvent);

////Cut
taskInput.addEventListener('cut', runEvent);

////Cut
taskInput.addEventListener('paste', runEvent);

////Input
taskInput.addEventListener('input', runEvent);

//Change event
select.addEventListener('change' , runEvent);




function runEvent(e){
   console.log(`Event type: ${e.type}`);

   console.log (e.target.value);

   // heading.innerText = e.target.value;


   //Get input value
   // console.log (taskInput.value);

   // e.preventDefault();
}