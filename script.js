const tasks = [];

function addTask() {
  const task = prompt("Enter a new task:");
  
   if (task === null || task.trim() === "") {
    alert("Please add a task!");
  } 
   else {
    tasks.push(task);
    alert("Task added!");
  }
}

function viewTasks() {
  let taskList = "Tasks:\n";
  for (const task of tasks) {
    taskList += `- ${task}\n`
  }

  alert(taskList);
}