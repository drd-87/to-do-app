function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
   event.preventDefault();

   // get the text
   let title = newToDoText.value;

   // create a new li with specified class
   let newLi = document.createElement('li');
   newLi.setAttribute("class", "mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-grid--no-spacing mdl-card mdl-shadow--2dp");
   newLi.setAttribute("id", "contain");

   // attach the li to the ul
   toDoList.appendChild(newLi);

   // create a new input(checkbox) within a div
   let checkbox = document.createElement('div');
   checkbox.setAttribute("class", "mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone mdl-grid--no-spacing checkdiv");
   checkbox.innerHTML = "<input type = 'checkbox' class = 'checktask'>";

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   //create a div within the li
   let newDiv = document.createElement('div');
   newDiv.setAttribute('class', 'mdl-cell mdl-cell--9-col mdl-cell--5-col-tablet mdl-cell--2-col-phone mdl-grid--no-spacing lidiv');
   newLi.appendChild(newDiv);

   // set the title
   newDiv.textContent = title;

   //create placeholder for the delete box

   let deldiv = document.createElement('div');
   deldiv.setAttribute("class", "mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--1-col-phone mdl-grid--no-spacing delhold");

   // attach the remove option to the li
   newLi.appendChild(deldiv);

   // delete box img
   let removeLi = document.createElement('img');
   removeLi.src = "./img/baseline-delete_outline-24px.svg"
   removeLi.setAttribute("class", "delimg");
   removeLi.setAttribute("alt", "Delete Task");

   //del box identifier
   let deltask= document.createTextNode("Delete");

   //attach the identifier to the button
   removeLi.appendChild(deltask);

   //attach the button to the deldiv
   deldiv.appendChild(removeLi);

   //empty the input
   newToDoText.value = '';

   // event listener for deleting
    removeLi.addEventListener('click', function() {
      newLi.parentNode.removeChild(newLi);
    })
 });
}

window.onload = function() {
    onReady();
};
