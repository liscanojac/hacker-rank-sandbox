// https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

function gradingStudents(grades) {

  let roundedGrades = []

  for (let i = 0; i < grades.length; i++) {

    let grade = grades[i]

    if (grade >= 38) {
      grade = roundGrade(grade)
    }
    roundedGrades.push(grade)
  }
  return roundedGrades
}

function roundGrade(grade) {

  const roundingFactor = grade % 5

  switch(roundingFactor) {
    case 4:
      return grade + 1
    case 3:
      return grade + 2
    default:
      return grade
  }
}

let testGrades = [73, 67, 38, 33]

console.log(gradingStudents(testGrades))

console.log(33 % 5)