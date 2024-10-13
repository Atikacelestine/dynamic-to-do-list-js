document.addEventListener('DOMContentLoaded', function(){
    //select the add task button and store in a constant named addButton
    const addButton= document.getElementById('add-task-btn');

    //select the input field where users enter tasks
    const taskInput= document.getElementById('task-input');

    //select the unordered list where the tasks will be added
    const taskList = document.getElementById('task-list');

    //intialize the task array 
    let tasks =[];

    //function to load tasks from the local storage and populate the task list
    function loadTasks(){
        const storedTasks= localStorae.getItem('tasks');
        if(storedTasks){
            tasks=JSON.parse(storedTasks);
            tasks.forEach(function(taskText);{
                createTaskElement(taskText);
})
        }
    }

    //function to create a new task
    function createTaskElement(taskText){

        const li=
            document.createElement('li');
        li.textContent=taskText;

        //Create a new button element for removing tasks
        const removeButton = document.createElement('button');
        removeButton.textContent="Remove";
        removeButton.classList.add="remove-btn";

        //Assign an onclick event to the remove button 
        removeButton.onclick=function(){
            //remove the task from thr DOM
            taskList.removeChild(li);

            //remove the task from the tasks array
            tasks=tasks.filter(task==>task!==taskText);

            //Update local storage 
            saveTaks();
        };

        //append te remove button to the li element
        li.appendChild(removeButton);

        //append the li element to the taskList
        taskList.appendChild(li);
    }

    //Function to save tasks array to local storage 
    function saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(tasks));
function addTask(){
    //retrieve and trim the value from the task input field
    const taskText= taskInput.value.trim();

//Check if taskText is not empty
if(taskText ===""){
    alert("Please enter a task.");
    return;//exit the function
}
    //Add a new task to the DOM
    createTaskElement(taskText);
    //Add a new task to the tasks array 
    tasks.push(taskText);

    //Saved te updated tasks array to local storage 
    savedTasks();
    
//Clear the task inout field 
    taskInput.value="";
}

        addButton.addEventListener('click',addTask);

        taskInput.addEventListener('keypress',function(event){
            if(event.key==='Enter'){addTask();
                                   }
    
};
        loadTasks();

//Create a new li element
const li= document.createElement('li');
li.textContent=taskText;

//Create a new button element for removing the task
const removeButton = document.createElement('button');
removeButton.textContent="Remove";
removeButton.classList.add="remove-btn";

//Assign an onclick event to the remove button
removeButton.onclick=function(){
    taskList.removeChild(li);
};

//Append the remove button to the li element
li.appendChild(removeButton);

//Append the li element to the tasklist
tasklist.appendChild(li);

//Clear the task input field 
taskInput.value="";
 
document.addEventListener('DOMContentLoaded'),function()
{

    //select the add task button
    const addButton=document.getElementById('add-task-btn');

    //select the task input field
    const taskInput= document.getElementById('task-input');

    //select the atsk list
    const taskList=
    document.getElementById('task-list');

    //define the addTask function
    function addTask(){
        //Retrieve and trim the value form the task input field

        const taskText=
        taskInput.value.trim();

        //check if its not empty

        if(taskText ===""){
            alert("Please enter a task.");
        return;}
        //Create a new li element
const li= document.createElement('li');
li.textContent=taskText;

//Create a new button element for removing the task
const removeButton = document.createElement('button');
removeButton.textContent="Remove";
removeButton.classList.add="remove-btn";

//Assign an onclick event to the remove button
removeButton.onclick=function(){
    taskList.removeChild(li);
};

//Append the remove button to the li element
li.appendChild(removeButton);

//Append the li element to the tasklist
tasklist.appendChild(li);

//Clear the task input field 
taskInput.value="";}
}
addButton.addEventListener('click',addTask);

taskInput.addEventListener('keypress'),function(event){
    if(event.key === 'Enter'){
        addTask();
    }
}

addTask();
