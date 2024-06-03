let length;
let width;
function calculateArea() {
/*
document.getElementById ('length'): 
This part of the code retrieves an HTML element by its ID, specifically searching for an element with the ID 'length'.
.value: After accessing the HTML element, .value is used to retrieve the value entered into the input field associated with that element. 
For instance, if a user enters '5' into the input field for length, .value retrieves the string '5'.

parseFloat(…): The parseFloat() function converts the string value retrieved from the input field to a floating-point number. 
This conversion ensures that the input, typically text entered by the user, is treated as a number and can be used in mathematical operations.

length and width: Finally, the obtained floating-point numbers (representing the length and width values entered by the user) 
are stored in the variables length and width, respectively. These variables will be utilized for further calculations, 
such as determining the area of a rectangle in this context.
	*/
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
 
 /*
 Declare a variable named area and initialize it with length * width in calculate_Area.js file as following:
 */
let area = length * width;
/*
After the calculation of the rectangle's area is completed and stored within the variable named area, 
the given code involves presenting or displaying this result to the user interface. Include given code 
within the function after calculation of area.
*/
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}