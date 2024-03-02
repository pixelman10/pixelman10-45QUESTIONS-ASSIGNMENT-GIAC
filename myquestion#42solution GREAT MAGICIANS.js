// TASK 42
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
}
// Array of magician's names
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call make_great() to modify the magician names
make_great(magician_names);
// Call show_magicians() to see the modified list
show_magicians(magician_names);
