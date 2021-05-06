const numbers = [1, 2, 3, 4, 5, 6, 7]

const result = numbers.filter(number => number % 2 === 0).map(number => number*2)

console.log(result)
// [4, 8, 12]


/* Bonus if python*/
// [i*2 for i in n if i%2]
