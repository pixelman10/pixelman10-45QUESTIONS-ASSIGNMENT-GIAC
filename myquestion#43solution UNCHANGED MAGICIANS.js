//TASK 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("The Great ".concat(magician));
    }
    return great_magicians;
}
// Array of magician's names
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call make_great() with a copy of the array to modify the magician names
var great_magician_names = make_great(__spreadArray([], magician_names, true));
// Call show_magicians() with each array to show the original names and the names with "the Great" added
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magician_names);
