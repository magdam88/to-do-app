document.getElementById("btn-add").addEventListener("click", function() {
  var inputValue = document.getElementById("input").value;
  if (inputValue) {
    addNewTask(inputValue);
  }
});

function addNewTask(inputValue) {
  var listOfItems = document.getElementById("todo-list");
  var newItem = document.createElement("li");
  listOfItems.appendChild(newItem);

  var label = document.createElement("label");
  newItem.appendChild(label);
  label.innerHTML = inputValue;

  var editInput = document.createElement("input");
  editInput.type = "text";
  newItem.appendChild(editInput);

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");

  newItem.appendChild(buttons);
  var remove = document.createElement("i");
  remove.classList.add("delete", "fa", "fa-trash-o");

  var edit = document.createElement("i");
  edit.classList.add("edit", "fa", "fa-pencil");

  var completed = document.createElement("i");
  completed.classList.add("completed", "fa", "fa-check-circle-o");

  buttons.appendChild(remove);
  buttons.appendChild(edit);
  buttons.appendChild(completed);

  remove.addEventListener("click", removeItem);
  edit.addEventListener("click", editItem);
  completed.addEventListener("click", addToCompleted);
}

function removeItem() {
  var item = this.parentNode;
  var parent = item.parentNode;
  parent.remove();
}

function editItem() {
  var parent = this.parentNode;
  var listItem = parent.parentNode;
  var editInput = listItem.querySelector("input");
  var label = listItem.querySelector("label");
  var hasEditClass = listItem.classList.contains("editItem");

  if (hasEditClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  listItem.classList.toggle('editItem');
}

function addToCompleted() {
  var parent = this.parentNode;
  var completedItem = parent.parentNode;
  var listOfCompletedItems = document.getElementById("completed-list");
  if (listOfCompletedItems.children.length <= 1) {
    var completedListHeading = document.createElement('h2');
    completedListHeading.innerText = "Completed";
    completedListHeading.classList.add('list-heading');
    listOfCompletedItems.appendChild(completedListHeading);

  }
  completedItem.classList.add('completed-item');
  listOfCompletedItems.appendChild(completedItem);
}