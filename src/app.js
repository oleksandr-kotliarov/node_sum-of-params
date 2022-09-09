'use strict';

const formatNums = (nums) => nums.map(Number);

function add(nums) {
  const formatedNums = formatNums(nums);

  if (formatedNums.every(isNaN)) {
    return 'There is nothing to add';
  } else {
    return formatedNums.reduce((acc, val) => (
      isNaN(val) ? acc : acc + val), 0
    );
  }
}

function multiply(nums) {
  const formatedNums = formatNums(nums);

  if (formatedNums.every(isNaN)) {
    return 'There is nothing to add';
  } else {
    return formatedNums.reduce((acc, val) => (
      isNaN(val) ? acc : acc * val), 1
    );
  }
}

function calculator(arr) {
  switch (arr[0]) {
    case 'add':
      console.log(add(arr.slice(1)));
      break;

    case 'multiply':
      console.log(multiply(arr.slice(1)));
      break;

    default:
      console.log('Operation is not supported!');
  }
}

calculator(process.argv.slice(2));
