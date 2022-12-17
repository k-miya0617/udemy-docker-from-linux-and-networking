const main = async () => {
  // APIからデータを取得する
  await fetch('/api/hello')
  .then((value) => {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = value;
  }).catch((e) => {
    console.error(JSON.stringify(e));
  })
}

main();