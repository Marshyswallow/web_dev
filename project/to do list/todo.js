let todoList = [{item:'buy milk',dueDate: '18/11/2004'},{item:'go to college',dueDate: '18/11/2004'}];
displayItems();



function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let todoItem=inputElement.value;
  let inputDate=document.querySelector('#todo-date');
  let todoDate=inputDate.value;
  todoList.push({item:todoItem,dueDate:todoDate})
  inputElement.value='';
  inputDate.value='';

  displayItems();


}


function displayItems(){
  let containerElement=document.querySelector('.todo-container');

  let newHtml='';
  for(let i=0;i<todoList.length;i++){
    let {item,dueDate}=todoList[i];
    
    newHtml+=`
    <span>${item}</span>
    <span>${dueDate}</span>
    <button id="del" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML=newHtml;
}

