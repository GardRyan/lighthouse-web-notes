
//create a function that workd
/*

const findWaldo= function(names, found) {
  names.forEach(function(name) {
    if (name === "Waldo") {
      found();   // execute callback
    }
  });
};
*/
let arr =[]

const findWaldo = function(arr, callback) { 
    for (let index = 0; index < arr.length; index++) {
    if (arr[index] === "Waldo") {
    callback(index + 1);
    return;
    }
  }
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});