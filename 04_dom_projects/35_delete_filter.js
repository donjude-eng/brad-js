//Define UI Vra

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
   //Add task for event
   form.addEventListener('submit', addTask);
   //Remove task event
   taskList.addEventListener('click', removeTask);
   //Clear task event
   clearBtn.addEventListener('click', clearTasks);
   //Filter tasks event
   filter.addEventListener('keyup', filterTasks);

}

//Add task
function addTask(e) {
   if (taskInput.value === '') {
      alert('Ad a task');
   }

   //Create li element
   const li = document.createElement('li');
   //Add class
   li.className = 'collection-item';
   //create text node and append to li
   li.appendChild(document.createTextNode(taskInput.value));
   //Create new link element
   const link = document.createElement('a');
   //Add class
   link.className = 'delete-item secondary-content';
   //Add icon html
   link.innerHTML = '<i class="fa fa-remove"></i>';
   //Append the link to li
   li.appendChild(link);

   //Append li to ul
   taskList.appendChild(li);

   //clear input
   taskInput.value = '';



   e.preventDefault();
}

//Remove  task
function removeTask(e) {
   if (e.target.parentElement.classList.contains('delete-item')) {
      if (confirm('Are You Sure?')) {
         e.target.parentElement.parentElement.remove();
      }
   }

}

//Clear tsaks
function clearTasks() {
   //  taskList.innerHTML = '';

   //Faster

   while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild)
   }

}

//Filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  console.log("text",text);
  document.querySelectorAll('.collection-item').forEach

    (function (task) {
      const item = task.firstChild.textContent;


      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
        console.log("item found", item);

      } else {

        task.style.display = 'none';
        console.log("item not found", item);

      }
    });
}