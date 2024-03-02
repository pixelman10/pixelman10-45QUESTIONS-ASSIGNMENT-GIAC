var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 18
//Store the locations in an array
var placesToVisit = ["Turkey", "Pakistan", "America", "Denmark", "Japan"];
//Print the array in its original order
console.log("Original order:", placesToVisit);
//Print the array in alphabetical order without modifying the actual list
console.log("Alphabetic order:", __spreadArray([], placesToVisit, true).sort());
//Show that array is still in its original order
console.log("Original order after sorting:", placesToVisit);
//Print the array in reverse alphabetic oreder without changing the order of the original list 
console.log("Reverse alphabetic order:", __spreadArray([], placesToVisit, true).sort().reverse());
//Show that the array is still in its orginal order
console.log("Original order after reverse sorting:", placesToVisit);
