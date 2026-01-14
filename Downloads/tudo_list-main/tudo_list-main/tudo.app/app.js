function addTask() {
  const inp = document.getElementById("task");
  const task = inp.value.trim();

  if (task === "") {
    alert("Please enter your task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function() {
    editTask(li);
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function() {
    li.remove();
  };

  li.append(" ", editBtn, delBtn);
  document.getElementById("task-list").appendChild(li);

  inp.value = "";
}
function editTask(li) {
  const newTask = prompt("Edit your task:", li.firstChild.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    li.firstChild.textContent = newTask.trim();
  }
}
