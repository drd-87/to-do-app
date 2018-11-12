function onReady() {
 let id = 0;
 let toDos = [];
 const addToDoForm = document.getElementById('addToDoForm');

 function createNewToDo() {
   const newToDoText = document.getElementById('newToDoText');
   if (!newToDoText.value) { return; }

   toDos.push({
     title: newToDoText.value,
     complete: false,
     id: ++id
   });

   newToDoText.value = '';

   renderTheUI();
   }

/*delete function, executed by the event listener. Compares the id
property of each toDo, and through the filter method, a new array is created,
returning values meeting the conditions given
*/
 function deleteLi(id) {
   return toDos.filter(toDo => toDo.id !== id);
 }

 function renderTheUI() {
   const toDoList = document.getElementById('toDoList');

   toDoList.textContent = '';

   toDos.forEach(function(toDo) {
     const newLi = document.createElement('li');
     const checkbox = document.createElement('input');
     checkbox.type = "checkbox";

 //create a delete button
     const del = document.createElement('button');
     del.innerHTML = '<span>Delete</span>';

     newLi.textContent = toDo.title;

     toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
//append the Delete button to the li
     newLi.appendChild(del);

//event listener for the user clicking delete
    del.addEventListener('click', event => {
      toDos = deleteLi(toDo.id);
      renderTheUI();
    });
   })

 };

 addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });

 renderTheUI();
}

window.onload = function() {
  onReady();
};
