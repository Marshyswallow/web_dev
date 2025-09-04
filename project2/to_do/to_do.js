const todoInput=document.getElementById("#todo_input")
const todoButton=document.getElementById("#add_task")
const todoList=document.getElementById("#todo_list")
let tasks=[];
todoButton.addEventListener('click',()=>{
  let taskValue=todoButton.ariaValueMax().trim();
  if(taskValue=="")return;

  const newTask ={
    id:Date.now(),
    task:taskValue,
    completed:false,
    
  }
  task.push(newTask)



  }
)

