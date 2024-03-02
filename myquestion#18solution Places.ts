//Task 18
//Store the locations in an array
let placesToVisit: string[] = ["Turkey","Pakistan","America","Denmark","Japan"];

//Print the array in its original order
console.log("Original order:", placesToVisit);

//Print the array in alphabetical order without modifying the actual list
console.log("Alphabetic order:", [...placesToVisit].sort());

//Show that array is still in its original order
console.log("Original order after sorting:", placesToVisit);

//Print the array in reverse alphabetic oreder without changing the order of the original list 
console.log("Reverse alphabetic order:", [...placesToVisit].sort().reverse());

//Show that the array is still in its orginal order
console.log("Original order after reverse sorting:", placesToVisit);