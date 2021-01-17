//Changing Case

//Question 01
  // var a = prompt("enter any thing")
  // var b = a.toUpperCase();
  // alert(b)

//Question 02
  // var a =  prompt("enter any thing")
  // var b = a.toLocaleLowerCase();
  // alert(b)

// Strings: measuring length and extracting parts

// Question 01
  // var phone = prompt("What's your favourite Mobile Phone model?");
  // document.write("My favourite phone is: " + phone +"<br>Length of String: " + phone.length + "<br><br>" );

// //Question 02
// var a = "Hello World"
// var lastIndex = a.charAt(10);
// document.write( lastIndex)

//Strings: finding segments

//Question 01
//  var n = "Pakistani";
//  var indexOfN = n.indexOf("n");
//  document.write("String: "+n + "<br>Index of 'n': "+ indexOfN + "<br><br>");

// Question 02
//  var userName = prompt("Enter your name");
//  for(i=0; i < userName.length; i++){
//  if(userName[i] === "@" ||userName[i] ===  "." ||userName[i] ===  "," ||userName[i] ===  "!" ||userName[i] === "#" ||userName[i] === "$" ||userName[i] === "%" ||userName[i] === "^" ||userName[i] === "&" ||userName[i] === "*" ||userName[i] === "(" ||userName[i] === ")" ||userName[i] === "=" ||userName[i] === "+" ||userName[i] === ";" ||userName[i] === ":" ||userName[i] === "," ||userName[i] === "/"  ){
//         alert("Please enter a valid username\n\n Prevent this page from creating additional dilogs.")
//     } 
//   }
 

//Question 03
// var c = "The quick brown fox jumps over the lazy dog";
// var d = c.match(/the/gi);
// alert(d)

//Strings: finding a character at a location

//Question 01
// var a = "Pakistani"
// var b = a.charAt(3)
// document.write(b)

//Strings : Replacing Characters 

//Question 01
// var city1 = "Hyderabad";
// var city2 = city1.replace("Hyder","Islam");
// document.write("City1: " + city1 + "<br>After replacement: " + city2 + "<br><br>");

// Question 02
// var message1 = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message1.replace(/and/g,"&");
// document.write(message1 + "<br>" + message2 );

// Rounding numbers

// Question 01
// var a = prompt("Enter a positive integer");
// var b = Number(a);
// var c = Math.round(a);
// var d = Math.floor(a);
// var e = Math.ceil(a);
// document.write("Number: " + b + "<br>round off value: " + c + "<br>floor value: " + d + "<br>ceil value: " + e);

// Question 02
// var a = prompt("Enter a negative floating point number");
// var b = Number(a);
// var c = Math.round(a);
// var d = Math.floor(a);
// var e = Math.ceil(a);
// document.write("number: " + b + "<br>round off value: " + c + "<br>floorvalue: " + d + "<br>ceil value: " + e );

//Generating Random Numbers 

//Question 01
// var a = prompt("Enter any number")
// var b = Math.random(a)
// document.write(b)

//Question 02
// var value = Math.floor(Math.random() * 2) + 1;
// document.write("Random dice Value : " + value);
// if (value === 2) {
//  document.write("<br>Random coin Value : Heads")
// } else {
// document.write("<br>Random coin Value : Tails")
// }
// Question 03
// var secret = Math.floor(Math.random() * 10) +1;
// var guess = +prompt('Enter a Number Between 1 to 10 ');
// if(secret === guess){
//     alert('You Win!');
// } else{
//     alert('Try Again!');
// }

// Converting strings to integers and decimals


// Question 01
// var input = prompt("Enter your weight in kilograms");
// var p = parseInt(input);
// document.write("The weight of user is " + input  + " kilograms");


//convert strings to numbers,numbers to strings

//Question 01
      //   var a = "472"
      //  var b = Number(a)
      //   var c = typeof(b)
      //   alert(c); 
        
 //Question 02      
// var a = "35.36"
// var b = a.toString().replace (".", "")
// document.write(b)

//Controlling the length of decimals

//Question 01
// var a = 30 / 45 * 100;
// var b = a.toFixed(2)
// alert(b)