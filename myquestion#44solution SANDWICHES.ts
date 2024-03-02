//TASK 44

function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log(); // empty line for clarity
}

// Call the function with different number of arguments each time
make_sandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Turkey', 'Bacon');
make_sandwich('Peanut Butter', 'Jelly');
