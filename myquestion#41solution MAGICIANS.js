//TASK 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call the function to show the magician's names
show_magicians(magician_names);
