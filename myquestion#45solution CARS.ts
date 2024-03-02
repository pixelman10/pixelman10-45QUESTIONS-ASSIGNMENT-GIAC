//Task 45 

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function create_car(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (let extra of extras) {
        for (let key in extra) {
            car[key] = extra[key];
        }
    }

    return car;
}

// Call the function with required information and additional properties
let my_car: Car = create_car('Toyota', 'Camry', {color: 'Blue', year: 2022});

// Print the Object to ensure all information was stored correctly
console.log(my_car);
