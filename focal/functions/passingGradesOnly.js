const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passing = function (num) {
  return num >= 70;
}

const passingGrades = grades.filter(passing);

console.log(passingGrades);
