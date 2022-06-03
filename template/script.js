

const findLargest =(numbers)=>{
  let largest = numbers[0]
  
  for (let i = 0; i < numbers.length; i++) {
   if( largest <numbers[i])
   largest = numbers[i]

  }
console.log(largest)
}

findLargest([6666,1,-33,44,444,66])
