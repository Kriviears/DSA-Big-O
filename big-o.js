"use strict";

function yell() {
  let shout = "Who has a golden retriever?";
  if (owner) {
    return "I do, be happy to bring him over";
  }
}
/* This is a 0(1) timing algorythm due to it not even caring what the input
 of the function is. it will always take the same amount of time*/

function askOneByOne(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].dog === "golden retriever") {
      return `${people[i]} is the play person`;
    }
  }
  return `No one has a golden retreiver out of ${people.length} people`;
}
/* This is a O(log n) because while it CAN take a longer time with a longer
input and can finish very fast by simply reaching the end of a smaller array,
it does not neccesarily HAVE to take longer with a larger input due to the 
fact that the affirmative can happen at any point, making it faster than linear still*/

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}
/*this is a constant algorithm due to it not needing to iterate over any 
larger amount of inputs. The same number of operations occur regardless of inputs*/

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
/*Polynomial time O(n^k) nested loops increase the amount of ticks multiplicatavly
 per input*/

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
/*linear: it has to touch every single element of the input exactly once 
and there is no possibility of early finish of the function*/

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
/*Linear although it does not scale 1-to-1 with larger inputs it still does not 
half the array with each iteration will need some clearification with this difference*/

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
/*Nested loops make it a polynomial even though  the nested loop
 gets shorter as the function goes on*/

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
/*Linear, even tho there are multiple checks inside the loop that is 
 all a constant operation inside a single for loop */

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}
/*O(log n) as with logarithmic functions it requires a sorted array so that 
when the input is cut in half you can reliably eliminate the correct half of the 
search*/

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
/*this is a constant. It doesn't take any longer to find a random element between 1-10 
vs 1-10000*/

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}
/*Linear. For every number that n is higher, the algorithm takes exactly one more tick longer
So the speed is growing 1-to-1 */
