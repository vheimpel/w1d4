
function findWaldo(arr, actionWhenFound) {
  arr.forEach(actionWhenFound);
}

function actionWhenFound(name, index, array) {
  if (name === 'Waldo'){
    console.log("Found him at", index, "!");
  }
}



findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)