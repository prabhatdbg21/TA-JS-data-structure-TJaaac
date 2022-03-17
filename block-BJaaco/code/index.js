let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`
let collection = [] ;
for (let id of userIds){
  collection.push (id);
} 
for (let num of numbers){
  collection.push (num);
} 
console.log (collection)

// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`
let evenCollection = [] ;
for (let eachCollection of collection){
  if (eachCollection % 2 === 0){
    evenCollection.push(eachCollection)
  }
}  
console.log (evenCollection)

// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`
let oddCollection = [] ;
for (let eachCollection of collection){
  if (eachCollection % 2 !== 0){
    oddCollection.push(eachCollection)
  }
}  
console.log (oddCollection)

/*
  @param means parameter

 4. Write a function named times which accets two parameter and return an array. 

  @param times (number)
  @param character (string)
  @return array

  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/

function times (time , character = 'test' ) {
  if (time < 1)  return [];
  let array = [];
  for ( i = 0 ; i < time ; i++){
    array.push (character) ;
  }
  return array ;
}

// Uncomment the code below and test the output

console.log(times(5, 'c')); // ['c', 'c', 'c', 'c', 'c']
console.log(times(2, 'a')); // ['a', 'a']
console.log(times(0)); // []
console.log(times(5)); // ['test', 'test', 'test', 'test', 'test']

/*

 5. Write a function named revert which reverts the element of the input array. 

  @param arr (array)
  @return array

  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function revert( ary ) {
  let final = [] ;
  for ( i = ary.length -1 ; i >= 0 ; i--){
    final.push (ary[i])
  }
  return final ;
}

// Uncomment the code below and test the output
 console.log(revert([1, 2, 3, 4])); // [4, 3, 2, 1]
 console.log(revert(['a', 'd', 'c', 'b'])); // ['b', 'c', 'd', 'a']
console.log(revert(['Ryan', 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  

  @param arr (array)
  @return array

  Example: 
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function isUnwanted (value) {
  return (
    value == false ||
    value == undefined ||
    value == "" ||
    value == 0 ||
    value == null
  );
}

function clear(ary) {
  let final = [] ;
  for ( let value of ary){
    if (!isUnwanted (value)){
    final.push (value)
    }
  }
  return final ;
}

// Uncomment the code below and test the output
 console.log(clear([1, 2, 3, 4, '', 0, null, undefined])); // [4, 3, 2, 1]
 console.log(clear(['a', undefined, 'd', 0, 'c', 'b'])); // ['b', 'c', 'd', 'a']
 console.log(clear(['Ryan', null, 0, 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 7. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/

function arrayToObj( ary ) {
    let final = {} ;
    for ( i = 0 ; i < ary.length ; i++){
      final [i] = ary[i]
    }
    return final ;
  }

// Uncomment the code below and test the output
 console.log(arrayToObj([1, 2, 3, 4])); // {0: 1, 1: 2, 2: 3, 3: 4}
 console.log(arrayToObj(['a', undefined, 'd'])); // {0: 'a', 1: undefined, 2: 'd'}
console.log(arrayToObj(['Ryan', 'John'])); // {0: 'Ryan', 1: 'John'}
