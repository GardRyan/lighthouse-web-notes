/*
const raisinAlarm = function(cookie) {
    
  //  let raisin = "🍇";
    let raisinCount = 0;
  //  let alert = `Raisin alert!`;
  //  let raisinPass = `All good!`;
  //let chocolate ="🍫" ;

  const raisin = cookie.map(cookies => {
    if (cookies.includes("🍇")) {
      raisinCount++; // increases raisin count
    }else {
      raisinCount = raisinCount; //does nothing
    }
  
  const results = //count the number of raisins and return result (raisin alert or all good)
  
  
      //    return `Raisin alert!`;
  //  } else {
  //    return `All good!`;
    }
  }
  );
  return results;
};


//  for (let i = 0; i < cookie.length; i++) {
//    if (cookie[i] === raisin) {
//       return alert;
//       //raisinCount++;
//    }else {
//      return raisinPass;
      
//    }
//  }
//};

//console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
//console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


//  expected output
//  Raisin alert!
//  Raisin alert!
//  All good!*/

/*const raisinAlarm1 = function (cookie) {
  if (cookie.includes("🍇")) {
    return `Raisin alert!`;
  }
  return `All good!`;
};*/

const raisinAlarmArray = function (cookies) {
  const responses = [];

  for (const cookie of cookies) { //Cookies == main array, cookie == sub array
     if (cookie.includes("🍇")) { //values of childarray
      responses.push("Raisin alert!"); //value we don't want
    } else {
    responses.push("All good!"); //return all good if no value
    }
  }
  return responses;
};


/*
  console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


 
  const raisinAlarmArray = function (cookies) {
    // Put your solution here
  };

*/
  console.log(
    raisinAlarmArray([
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"],
    ])
  ); 

  //Expected: ["Raisin alert!", "Raisin alert!", "All good!"]