// The second argument/parameter is expected to be a (callback) function

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

//refactor

const findWaldo1 = function(names, found) {
  names.forEach(function(name) {
    if (name === "Waldo") {
      found();   // execute callback
    }
  });
};

const actionWhenFound1 = function() {
  console.log("Found him!");
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
findWaldo1(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);