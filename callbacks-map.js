var words = ["ground", "control", "to", "major", "tom"];

var result = map(words, function(word) {
  return word.length;
});

function map(array, cb) {
  var resultArray = []

  array.forEach(function(item) {
    resultArray.push(cb(item))
  });

  return resultArray
}

console.log(result)