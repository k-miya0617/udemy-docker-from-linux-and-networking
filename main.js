const main = async () => {
  // APIからデータを取得する
  await fetch('/api/hello')
  .then((value) => {
    console.log(JSON.stringify(value));
  }).catch((e) => {
    console.error(JSON.stringify(e));
  })
}

main();