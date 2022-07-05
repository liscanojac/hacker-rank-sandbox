// https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

function lonelyInteger(arr) {

  if (arr.length === 1) {
    return sortedArr[0]
  }

  const sortedArr = arr.sort((a, b) => a - b)
  
  let i = 0
  let j = sortedArr.length - 1

  while(i < j) {

    if (sortedArr[i] - sortedArr[i + 1] !== 0) {
      return sortedArr[i]
    }
    if (sortedArr[j] - sortedArr[j - 1] !== 0) {
      return sortedArr[j]
    }
    i = i + 2
    j = j - 2
  }
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]))