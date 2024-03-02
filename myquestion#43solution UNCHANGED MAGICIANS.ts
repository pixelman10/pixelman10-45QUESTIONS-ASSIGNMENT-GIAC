//TASK 43

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call make_great() with a copy of the array to modify the magician names
let great_magician_names: string[] = make_great([...magician_names]);

// Call show_magicians() with each array to show the original names and the names with "the Great" added
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magician_names);
