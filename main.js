
const loadTasks = async () => {
  await fetch('/api/tasks')
  .then((res) => {
    res.json().then((value) => {
      const messageElement = document.getElementById("message");
      messageElement.innerHTML = value.message;
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
