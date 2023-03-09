// // primitive data types
//1.number
var a = 10; 
console.log(a,typeof a);
//2.string
var name = 'koushik';
console.log(name,typeof name);
//3.boolean
var b = true;
console.log(b, typeof b);
//4.null
var c = null;
console.log(c, typeof c);
//5.undefined 
var d;
console.log(d, typeof d);
//6.symbol
var e = Symbol();
console.log(e, typeof e);

// program for user eligible to vote or not 

var age = 21;
if(age>18) {
    console.log('You are Eligible to vote');
}
else {
    console.log('You are not eligible to vote');
}

//Write a function that adds 1 to any number you give, return the final output, and prints using the console.log function.

function add(a)
{
    a+=1;
    return a;
}
console.log(add(3));


//Take an array of size 20 (length 20) and use a loop to print each element of the array and log using console.log.

var arr = [12,13,23,24,45,65,78,67,45,34,23,89,23,67,89,09,56,65,18,97];
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

// Take an array of size 5 and add new elements using Push and unshift and remove elements using shift and pop.

var arr1 = [21,56,79,54,34];

arr1.push(12);
console.log(arr1);

arr1.unshift(45);
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.pop();
console.log(arr1);
