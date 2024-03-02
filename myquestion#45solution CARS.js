//Task 45 
function create_car(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            car[key] = extra[key];
        }
    }
    return car;
}
// Call the function with required information and additional properties
var my_car = create_car('Toyota', 'Camry', { color: 'Blue', year: 2022 });
// Print the Object to ensure all information was stored correctly
console.log(my_car);
