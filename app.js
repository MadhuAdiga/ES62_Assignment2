//----------------------	Map	 ----------------------

var myMap = new Map();
var keyString = "Some string",
	keyObject= {},
	keyFunction= function() {};

myMap.set(keyString, "Some other new string value");
myMap.set(keyObject, {a:2,b:4});
myMap.set(keyFunction,function(){})

myMap.size;		// Returns 3

myMap.get(keyString);  // "Some other new string value"
myMap.get(keyObject);  //Object {a: 2, b: 4}
myMap.get(keyFunction);	//function (){}





// ---------------------	Set  -------------------------

var mySet = new Set(); 
//Add various values below to the set instance

mySet.has("Some string") //false
mySet.add("Some string");
mySet.add(28);
mySet.add(true);
var aVariable={g:"Google",y:"Yahoo"};
mySet.add(aVariable);

// Check if the added values are available in the mySet

mySet.has("Some string") //true
mySet.has(28) //true
mySet.has(true) //true
mySet.has(aVariable); //true

// //Iterate through mySet and print the value and the typeof value stored

for(x of mySet)
{
	console.log(x + ' : ' + typeof(x));
}
 

/* Output 
Some string : string
28 : number
true : boolean
[object Object] : object
*/


// Assign an array to mySet and check if each value exists.

myArray=["Oranges","Apples","Grapes"];
mySet= new Set(myArray);
mySet.has("Apples"); //true
mySet.has("Oranges") //true
mySet.has("Grapes")  //true

// Print the values at one time using spread operator

console.log(...mySet) // Outputs Oranges Apples Grapes


