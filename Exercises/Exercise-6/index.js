const input = document.getElementById('task-input');
const addbtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addbtn.addEventListener('click', addTask);

function addTask() {
  
  const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  
  
  const tasksObject = {
    id: Date.now(), 
    text: input.value,
    completed: false
  }
  console.log(tasksObject);
  
  existingTasks.push(tasksObject);
   localStorage.setItem('tasks', JSON.stringify(existingTasks) );
 
  input.value = '';
  renderTasks();
}



function renderTasks() {

    taskList.innerHTML = ''; 
    
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    if(tasks.length === 0){
        const li =  document.createElement('li');
        li.textContent = 'No tasks available. Please add a task.';
        taskList.appendChild(li);
        return;
    }
    
    for(let i = 0; i < tasks.length; i++){
        const task = tasks[i];

        const li = document.createElement('li');

        if (task.completed) {
            li.classList.add('completed');
        }

        const actionWrapper = document.createElement('div')
        actionWrapper.classList.add('action-wrapper');

        const taskText = document.createTextNode(task.text);
        li.appendChild(taskText);

        const markButton = document.createElement('button');
        markButton.innerHTML = '&#x2713;';

        markButton.addEventListener('click', () => {
            completeTask(task.id);
        });
        
        li.appendChild(markButton);
        taskList.appendChild(li);
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&#x2715;';

        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
           deleteTask(task.id);
        });
        
        actionWrapper.appendChild(markButton);
        actionWrapper.appendChild(deleteButton);

        li.appendChild(actionWrapper);
        taskList.appendChild(li);
    }     
}
 
function completeTask(id) {

    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    
    tasks = tasks.map(task => {

        if (task.id === id) { 
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
}

function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
   renderTasks();
}

renderTasks();


