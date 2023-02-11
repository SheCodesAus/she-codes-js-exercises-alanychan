const fruits = ["pear", "banana", "apple", "mango", "plum", "peach"]

console.log(fruits)

const result1 = fruits.map((fruit, index) => {
  return {amount: index + 3, name: fruit}
})

console.log(fruits)
console.log(result1)

const result2 = fruits.filter((fruit) => {
  return fruit !== "pear"
})

console.log(fruits)
console.log(result2)

const result3 = fruits.sort()
console.log(result3)

// Reduce 