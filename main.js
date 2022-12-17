const tasksTableBodyElement = document.getElementById("tasks-table-body");

const loadTasks = async () => {
  await fetch('/api/tasks')
  .then((res) => {
    res.json().then((responseData) => {
      responseData.tasks.forEach((task) => {
        const titleTdElement = document.createElement("td");
        titleTdElement.innerText = task.title;

        const createdAtTdElement = document.createElement("td");
        createdAtTdElement.innerText = task.createdAt.toLocaleString();

        const trElement = document.createElement("tr");
        trElement.appendChild(titleTdElement);
        trElement.appendChild(createdAtTdElement);

        tasksTableBodyElement.appendChild(trElement);
      });
    });
  }).catch((e) => {
    console.error(JSON.stringify(e));
  })
}

const main = async () => {
  // タスク一覧を取得する
  await loadTasks();
}

main();
