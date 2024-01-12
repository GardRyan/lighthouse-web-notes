const checkAllNums = (arr, callback) => {
  for(let item of arr) {
    console.log(callback(item));
      }
}
const arrNum = [1,2,3,4,5]
const arrStr = ["Bread", "Chicken", "Grapes"]

checkAllNums(arrNum, (item) => {
  console.log(item + 100)
})

checkAllNums (arrStr, (item) => {
  console.log("Remember to pick up " + item)
})