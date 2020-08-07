02_JavaScript_Fundamentals
# brad-js

```
06: Intro 
master

Document.query selector ('h1'). style color (red) (numbers will be blue and string is black.
2.array. objects
3.console.error
4.object,tables
 02_JavaScript_Fundamentals
 02_JavaScript_Fundamentals
b: Variable
 a: We can reassign using variable var or let
=======
master
07: Variable
 a: 2e can reassign using variable var or let
 master
 b:Variable name (letter, -, number and &.

 08-Datatypes
 a - primitive data types
 b: Reference data types
 c: Arrays, object function data
 
 09-Types conversion
 -->length property only works in string string to numbers.
 -->parseint
 -->parsefloat
 
 10-Mathobject
 -->math.random (this will generate random numbers)
 math.floor (math.floor (1*2)
 
	 The Document Object Model, or DOM, is
	the browser’s internal representation of your
	web page.
 
 
  ##The variable without equsl sign : We say optionally, because if you want, you can create a variable without
	an initial value, and then assign it a value later. To create a variable
	without an initial value, just leave off the assignment part, like this:

	##A variable can hold are numbers string and the bollean values.

	##What’s a keyword?
	A: A keyword is a reserved word in
	JavaScript. JavaScript uses these reserved
	words for its own purposes, and it would
	be confusing to you and the browser if you
	started using them for your variables.

	##Q: What exactly is a block of code?
	A: Syntactically, a block of code (which
	we usually just call a block) is a set of
	statements, which could be one statement,
	or as many as you like, grouped together
	between curly braces. Once you’ve got a
	block of code, all the statements in that
	block are treated as a group to be executed
	together. For instance, all the statements
	within the block in a while statement are
	executed if the condition of the while is true.
	The same holds for a block in an if or else if.  
	eg {
	}


		## What is psecdocode and how it works.
		DECLARE three variables to hold the location of each cell of the ship. Let’s call them
		location1, location2 and location3.

	 11-string operations

	 substring --This will take the first line in the string.
	 splice --This will take out the value to a string.
	split -- This can be split the element with coma.
	include --If something is available in the string.
	 chart -- Will get the element using the chart.

	 12--Template literals
	 --Ternary operator
	 -- Blockquote

	 13--Array method
	 --ISarray (This will show the word inline array)
	 --for loops works in object

	 14--Object literals
	 --for loops will work in object

	 15--Date and times
	 --Date would be 0 based
	 --Today.getday
	 --doubt(get-date)

	 16 -- Comparison operator
	 --Don't matter is it is string or an number
	 =assignment operator
	 ===comparison operator
	 logical operator

	 17--switches
	 --switch can be used instead of else statement
	 Day and date

	 18--function
	 function declaration
	 ananymouus function
	 invokable function

	 19--General loops
	  a. for loop
	 b. for each
	 c. ID map

	  20 --Window object
	 a- Document object model
	 --Select element
	 --style
	 --changes mode
	 --This is all for working with the UI.
	 The window object is the part of client side.

	 ---Javascript runtime runs as a standalone process in our machine or in our computer.
	 ---Computer systems is the environment --In nodejs

	 --Client side --> Browser is the Global environment --> Node js in chrome use both the javascript environment called V8.

	 --val location -->details address , href, origin , protocol.
	 --navigator object

	 21- Scope
	 let and const has the block level scope and var has the function scope.
	 charAT is get the charcter

	innerText and textContent

	Although the names seem similar, there are important differences:
	textContent gets the content of all elements, including <script> and <style> elements.
	In contrast, innerText only shows “human-readable” elements.
	textContent returns every element in the node. In contrast, innerText is aware of styling and won’t return the text of “hidden” elements.
	map()

	The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
	const array1 = [1, 4, 9, 16];
	//pass a function to map 
	const map1 = array1.map(x => x * 2);
	console.log(map1);
	// expected output: Array [2, 8, 18, 32]
	forEach()

	The forEach() method executes a provided function once for each array element.
	   const array1 = ['a', 'b', 'c'];
	   array1.forEach(element => console.log(element));
	   // expected output: "a"
	  // expected output: "b"
	 // expected output: "c"
	Difference between map() and forEach

	The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
	The forEach() method executes a provided function once for each array element.
	forEach() does not mutate the array on which it is called
	sort()

	The sort() method sorts the elements of an array in place and returns the sorted array.
	The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
	const months = ['March', 'Jan', 'Feb', 'Dec'];
	months.sort();
	console.log(months);
	// expected output: Array ["Dec", "Feb", "Jan", "March"]

	const array1 = [1, 30, 4, 21, 100000];
	array1.sort();
	console.log(array1);
	// expected output: Array [1, 100000, 21, 30, 4]
	filter()

	The filter() method creates a new array with all elements that pass the test implemented by the provided function.
	const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

	const result = words.filter(word => word.length > 6);

	console.log(result);
	// expected output: Array ["exuberant", "destruction", "present"]
	reduce()

	The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
	const array1 = [1, 2, 3, 4];
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	// 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer));
	// expected output: 10

	// 5 + 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer, 5));
	// expected output: 15



	 -----------------------------------------------------------------------------------------

	 20 Web Projects With Vanilla JavaScript

	 ##Modal & Menu Slider
	- Create and style landing page
	- Style side nav and modal
	- Add functionality to make menu open/close on button click
	- Add functionality to make modal open/close on button click

	 ## Exchange Rate
	- Display UI with 2 select lists for countries and 2 inputs for amounts
	- Fetch exchange rates from API (https://api.exchangerate-api.com)
	- Display the values for both countries
	- Update values on amount change
	- Swap country rates

	-------------------------------------------
	## Hangman Game
	- Display hangman pole and figure using SVG
	- Generate a random word
	- Display word in UI with correct letters
	- Display wrong letters
	- Show notification when select a letter twice
	- Show popup on win or lose
	- Play again button to reset game

	## Meal Finder App
	- Display UI with form to search and button to generate
	- Connect to API and get meals
	- Display meals in DOM with image and hover effect
	- Click on meal and see the details
	- Click on generate button and fetch & display a random meal

	## Expense Tracker

	- Create UI for project
	- Display transaction items in DOM
	- Show balance, expense and income totals
	- Add new transation and reflect in total

	## Rotating Keyboard

	Requirements - >

	- Build the UI
	- Style the UI
	- While running throug keys letters once we press in the letters it should appear in the screen.
	- The keys should be go upside and downwards once we enter at specxific letters.
	- Working on to get letters each
	The “withIN” is why it’s called “inner” HTML. Let’s try a little
	experiment. We’ll try displaying the content of the planet element object in the
	console by logging the innerHTML property.


 ```
