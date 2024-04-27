const todoinput = document.querySelector("#todo-input");
const addbutton = document.querySelector("#add-button");
const todolist = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded",getLocal);
addbutton.addEventListener("click",addTodo);
todolist.addEventListener("click",manageTodo); // li에 있는 버튼을 가져옴

function addTodo(e){
    e.preventDefault();

    // 새로운 div 생성
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo"); // div의 클래스를 todo로 설정
    const newTodo = document.createElement("li"); // li 요소 생성
    newTodo.innerText = `${todoinput.value}`; // li의 값을 todoinput.value로 설정
    newTodo.classList.add("todo-content"); // li 요소에 todo-content 클래스 추가
    newDiv.appendChild(newTodo); // 자식으로 연결

    saveToLocal(todoinput.value);

    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton); // 자식으로 연결

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton); // 자식으로 연결

    todolist.appendChild(newDiv); // newDiv를 출력창에 연결
    todoinput.value ="";
}

function saveToLocal(todo){
    let todos; // 결과 값을 저장함
    if(localStorage.getItem('todos') === null){
        todos=[];
    } else todos = JSON.parse(localStorage.getItem('todos'));

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos)); // json에 값을 저장함
}

function getLocal(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos=[];
    } else todos = JSON.parse(localStorage.getItem('todos'));
    
    // localStorage에 있는 값을 바로 불러온다
    todos.forEach(function(todo){
        const newDiv = document.createElement("div");
        newDiv.classList.add("todo"); // div의 클래스를 todo로 설정
        const newTodo = document.createElement("li"); // li 요소 생성
        newTodo.innerText = todo; // li의 값을 todoinput.value로 설정
        newTodo.classList.add("todo-content"); // li 요소에 todo-content 클래스 추가
        newDiv.appendChild(newTodo); // 자식으로 연결

        const completeButton = document.createElement('button');
        completeButton.innerText = '완료';
        completeButton.classList.add('complete-button');
        newDiv.appendChild(completeButton); // 자식으로 연결
    
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton); // 자식으로 연결

        todolist.appendChild(newDiv);
        todoinput.value="";
    });
}

function manageTodo(e){
    const whichButton = e.target.classList[0]; // 클릭한 버튼 값을 가져옴
    if(whichButton === 'complete-button'){ // 그 값이 완료라면
        const todo = e.target.parentElement; // 그 부모노드에
        todo.children[0].classList.toggle('completed'); // completed 클래스를 토글한다
    } else if(whichButton === 'delete-button'){
        const todo = e.target.parentElement;
        removeLocal(todo); // 우선 localStorage에서 먼저 삭제
        todo.remove(); // 그이후 값을 화면에서 삭제한다
    }
}

function removeLocal(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos=[];
    } else todos = JSON.parse(localStorage.getItem('todos'));

    const index = todos.indexOf(todo.children[0].innerText);
    todos.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(todos));
}