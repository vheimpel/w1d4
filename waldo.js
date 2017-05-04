
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    index = i
    if (arr[i] === "Waldo") {
      found();   // execute callback

    }
  }
}

function actionWhenFound() {
  console.log("Found him at", index, "!");
}

function foundPosition() {

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)