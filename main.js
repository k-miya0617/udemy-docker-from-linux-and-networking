
const loadTasks = async () => {
  await fetch('/api/tasks')
  .then((res) => {
    console.log(res);
  }).catch((e) => {
    console.error(JSON.stringify(e));
  })
}

const main = async () => {
  // タスク一覧を取得する
  await loadTasks();
}

main();
