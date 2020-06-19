//Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Dom Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task for event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);

}

//Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];

  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task));
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

  });

}


// function keyuponaddtask(e) {
//   const text = e.target.value.toLowerCase();
//   console.log("inside keyup on add task, text =",text);
// }


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

  //store in LS
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = '';


  e.preventDefault();
}
//Store Task

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];

  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove  task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      //Remove from LS
      removeTaskFromLocalStorage();
      (e.target.parentElement.parentElement);
    }
  }

}

//Remove from LS
function removeTaskFromLocalStorage (taskItem){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];

  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach (function(task){
    if(taskItem.textContent === task){
     tasks.splice(index ,1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Clear tasks
function clearTasks() {
  //  taskList.innerHTML = '';

  //Faster

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  // clear from LS
  clearTasksFromLoacalStorage();

}
// Clear Tasks from LS
function clearTasksFromLoacalStorage(){
  localStorage.clear();
}

//Filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach

    (function (task) {
      const item = task.firstChild.textContent;

      console.log(task);


      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';

      } else {

        task.style.display = 'none';

      }
    });
}