/* 
           실습 : todo 리스트 만들기
           1. 사용자가 할 일을 입력한다.
           2. 등록버튼을 누른다.
               - 사용자가 입력한 '할일' 데이터를 가져온다.
               - 화면에 보여주기 위한 요소노드, 텍스트노드 생성
                   -> 요소노드 : li, 버틴 | 텍스트노드 : 사용자가 입력한 '할일', '삭제'
               -요소노드와 텍스트노드를 연결한다.
               -id가 'todoList'인 ul요소에 연결한다
           3. 웹페이지에 입력한 값이 출력된다.
           4. 삭제버튼을 누르면, 해당되는 요소만 삭제한다
               - 버튼에 클릭이벤트를 구현
               - 부모요소.removeChild(삭제할 자식노드)를 활용해서 삭제한다.
       */
const addBtn = document.todoForm.addBtn;

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const todo = document.todoForm.todo;
    const todoList = document.getElementById('todo-list');

    let li = document.createElement('li');
    let txt = document.createTextNode(todo.value);

    let button = document.createElement('button');
    let txt2 = document.createTextNode('삭제');

    button.appendChild(txt2);

    li.appendChild(txt);
    li.appendChild(button);

    todoList.appendChild(li);

    //삭제버튼을 모두 찾은 후 삭제기능 구현
    // - 삭제할 요소의 부모노드가 누구인지 알고 있어야 한다!
    removeElement(todoList);
});

const removeElement = (todoList) => {
    //1.삭제버튼요소를 모두 찾기
    const removeBtns = document.getElementsByTagName('button');
    console.log(removeBtns);

    //2.삭제버튼에 이벤트 적용하기
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', (event) => {

            //부모노드.removeChild(): 자식노드를 삭제하는 메소드
            todoList.removeChild(event.target.parentNode);
            console.log(event.target.parentNode);
        });
    }
}

