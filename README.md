# JS_algorithm_3_CW
Code Wars Kata 

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Best solution:

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
