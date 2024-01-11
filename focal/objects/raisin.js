
const raisinAlarm = function(cookie) {
  for (const item of cookie) {
    if (item === "🍇")
    return "Raisin alert";
  }
  return "All good!";
}

/*
  console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

*/

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

  console.log(
    raisinAlarmArray([
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"],
    ])
  ); 

  //Expected: ["Raisin alert!", "Raisin alert!", "All good!"]