// 1. Create an array named numbers and store 5 number values in it
let numbers = [1 ,2 , 3, 4, 5];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0 ;
for (i = 0 ; i < numbers.length; i++){
    sum = sum + numbers[i] ;
}
console.log (sum) ;

// 3. Calculate the average of array items and print it to the console using console.log()
console.log (sum / numbers.length ) ;

// 4. Find the highest number in the array and print it to the console using console.log()
let highest = [] ;
for (i = 0 ; i < numbers.length; i++){
    if (numbers[i] > numbers[i + 1]){
        highest.push ( numbers[i]) ;
    }
    else if (numbers[i] < numbers[i + 1]){
        highest.push ( numbers[i + 1] ) ;
    }
    else {
        alert (" two number are equal")
    }
}
console.log (highest)

// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
let odd = [] , even = [];
for (let num of numbers){
    if (num % 2 === 0){
        even.push (num) ;
    }
    else {
        odd.push (num) ;
    }
}
 console.log (even) ;

// 7. Find the odd numbers in the array and print them to the console using console.log()
console.log (odd) ;

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisibleBy = []
for (let numb of numbers){
    if (numb % 5 === 0){
        divisibleBy.push (numb) ;
    }
}
console.log (divisibleBy)

// 9. Log all the element of the array one by one
for (let i = 0; i < numbers.length ; i++) {
    console.log (numbers[i])
}

// 10. Find all the number in the array that is divisible by 3
let divisibleBy3 = []
for (let numb of numbers){
    if (numb % 3 === 0){
        divisibleBy3.push (numb) ;
    }
}
console.log (divisibleBy3)