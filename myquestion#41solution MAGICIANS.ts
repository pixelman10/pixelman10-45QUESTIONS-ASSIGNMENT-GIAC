//TASK 41

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call the function to show the magician's names
show_magicians(magician_names);
