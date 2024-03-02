// TASK 42

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}

// Array of magician's names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call make_great() to modify the magician names
make_great(magician_names);

// Call show_magicians() to see the modified list
show_magicians(magician_names);
