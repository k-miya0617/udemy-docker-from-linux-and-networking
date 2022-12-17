const tasksTableBodyElement = document.getElementById("tasks-table-body");
const taskTitleInputElement = document.getElementById("task-title-input");
const taskAddButtonElement = document.getElementById("task-add-button");

const loadTasks = async () => {
  await fetch('/api/tasks')
  .then((res) => {
    // OKではなかった場合
    if (!res.ok) {
      alert("エラーが発生しました");
      return;
    }

    // レスポンスからデータを取得する
    res.json().then((responseData) => {
      
      // タスク一覧をテーブルの形に変換する
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
    alert("エラーが発生しました");
    console.error(JSON.stringify(e));
  })
}

const registerTask = async () => {
  // 入力値を取得する
  const title = taskTitleInputElement.value;

  // 送信するデータ
  const requestBody = {
    title: title,
  }

  // APIに送信する
  await fetch('/api/tasks', {
    method: "POST",
    body: JSON.stringify(requestBody),
  })
  .then((res) => {
    // OKではなかった場合
    if (!res.ok) {
      alert("エラーが発生しました");
      return;
    }

    // タスク一覧を一度削除する
    while(tasksTableBodyElement.firstChild) {
      tasksTableBodyElement.removeChild(tasksTableBodyElement.firstChild);
    }

    // 再取得をする
    loadTasks();

    // テキストボックスの中身を消す
    taskTitleInputElement.value = "";

  }).catch((e) => {
    alert("エラーが発生しました");
    console.error(JSON.stringify(e));
  })
}

const main = async () => {
  // ボタンクリック時のイベントを追加
  taskAddButtonElement.addEventListener('click', registerTask);

  // タスク一覧を取得する
  await loadTasks();

}

main();
