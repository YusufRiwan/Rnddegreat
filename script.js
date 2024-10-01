
const todo =[{name: "Day 1 of learning js",
    dueDate: "2024-10-01"
}];

renderTodoList()
function renderTodoList(){

    let renderTodo = '';
    for( let i=0; i<todo.length; i++){
      const todolist = todo[i];
      const {name,dueDate} = todolist;

      const html = `
      <div> ${name} </div>
      <div> ${dueDate}</div>
       <button class ="delete-btn"
        onclick ="todo.splice(${i}, 1); renderTodoList()">
        delete
        </button>` ;
      console.log(html);
      renderTodo += html;

      
    }
    document.querySelector('.todo-display').
 innerHTML = renderTodo;
    
}


function addTodo(){
    const todolist = document.querySelector('.todo-list');
    const name = todolist.value;
    const date = document.querySelector('.dates');
    const dueDate = date.value;
    todo.push({
        name,
        dueDate
    })
    todo.value = '';
    renderTodoList();
};
