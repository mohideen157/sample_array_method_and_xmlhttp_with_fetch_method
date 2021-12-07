// import chalk from 'chalk';



// const name = 'world';
// console.log(chalk.blue('blue color'));
// console.log(chalk.blue.bgRed.bold('multiple color'));
// console.log(chalk.rgb(123, 45, 67).underline('blue color'));
// console.log(chalk.green('Hello %s'), name);



// let arr = ["I", "go", "home","hello"];

// let arr2 =["this","mean stack","node","java script"];

// let arr3 =["red","blue","white","orange"];

// // arr
// console.log(delete arr[0]);//i remove

// console.log( arr[1] );//print go value

// console.log(arr.splice(1, 2));//print go and home value

// console.log(arr.length);// print 2 value

// console.log(arr.pop());// print last element in array set

// console.log(arr);//print all value(i anything in remainder after top operation is done)

// console.log(arr.push("world"));

// console.log(arr);
// // arr2 start
// console.log(arr2.shift());

// console.log(arr2.unshift("Explain"));

// console.log(arr2);


// // arr3 start

// console.log(arr3[0] = "Kiwi");

// console.log(arr3);

// console.log(arr3[arr3.length] = "Kiwi1");

// console.log(arr3);

// console.log(delete arr3[2]);

// console.log(arr3);

// console.log(arr3.splice(2, 0, "hello", "world"));

// console.log(arr3);

// console.log(arr3.splice(0, 3));    

// var final_array = arr.concat(arr2, arr3)

// console.log(final_array);


/*
//map function i have some doubt
//syntax
//array.map(function(currentValue, index, arr), thisValue)
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);


function myFunction(numbers) {
    console.log(numbers);
    return numbers * 10;

  }

console.log(newArr);


//reduce
//Syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const number1 = [175, 50, 25];

let value = number1.reduce(myFunc);

function myFunc(total, number1) {
    console.log("total:" +total);
    console.log("========");
    console.log("number:"+number1);
  return total - number1;
}


console.log(value);


*/
/*

var url = 'https://restcountries.com/'; //A local page

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
      console.log(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
  console.log(response);
}
*/
/*
import fetch from 'node-fetch';

//const fetch = require("node-fetch");

const url = "https://restcountries.com/v3.1/all";
fetch(url)
  .then(
    response => response.text() // .json(), .blob(), etc.
    
  ).then(
    text => console.log(text) // Handle here
  );
  

*/
import xhttp from 'XMLHttpRequest';

//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
xhttp.open("GET", "https://restcountries.com/v3.1/all");
xhttp.send();








  


