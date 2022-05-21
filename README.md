# JS-Exercises
 JavaScript Exercises




/* Color Flipper */

 Topics Covered

 1. DOM
 2. document object
 3. document object method properties
 4. getElementByid()
 5. getElementsByClassName()
 6. getElementByTagName()
 7. childNode Vs HTMLcollection
 8. textContent
 9. innerHTML
 10. addEventListener
 11. Math Library
 12. Math.floor
 13. Math.random
 14. onlick()
 15.  querySelector
 16.  querySelectorAll
 17.  Function
 18.  Higher Order Function
 19.  Callback Function
 20.  Array
 21.  Array Methods
 22.  Objects
 23.  Loops (for loop)
 24.  Events (Event Listners)
 25.  annonymous function
 26.  IIF (Immediately Invoked Function)




 Assignment 1

 Create a rgba color App generator
 Set up different HTML and JS files
 Use the same HTML code 

 HINT:
 
// create 6 variables red , green , blue ,alpha, rgbNumber and rgba
//alpha is set to a random generated number between 0 & 1
// write a loop that generate any 3 numbers from the rgbNumber array and assign them to the R, G, B values respectively
//first ramdom selected number is between 0 -2
// second random selected number is determined on the first number
//check if the first randomly selected num from the rgbNumber is < 2
// add the values values to the rgba variable with a bracket before and after and a comma after every value
// finally use the generated rgba value in your code. 




 Assignment 2 

 Create a landing page that generates a random image or video everytime the page is clicked.

 HINT:
 background image/video covers full page and responsive 



/*********************** 2 Counter ***************************/

Create a color effect that generates darker green with higher opacity as the number increases and lighter color with lower opacity as the red decreases 

Find a project to apply this to...


/* Study References */

1.  forEach
2.  .contains
3.  .include
4.  addEventListener
5.  conditional if statements
6.  practice how to Loop over arays and objects.



/* Exercises */

1.  Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true

ANSWER:
var is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource')); //false
console.log(is_array([1, 2, 4, 0])); //true




2. Write a JavaScript function to clone an array. 
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]


ANSWER:
var array_Clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));



3.  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]

4.   Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]

5.  Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

6.  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

7. Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8

8. Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

9.  Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

10. Write a JavaScript program which prints the elements of the following array. 
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------

11. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

12. Write a JavaScript program to compute the sum and product of an array of integers. 

13. Write a JavaScript program to add items in an blank array and display the items

14. We have the following arrays : 
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.

15. Write a JavaScript program to shuffle an array.

16. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]

17. Write a JavaScript program to find duplicate values in a JavaScript array.

18. Write a JavaScript program to compute the union of two arrays. Go to the editor
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]

19. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. Go to the editor
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]

20. Write a JavaScript function to find the difference of two arrays. Go to the editor
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]