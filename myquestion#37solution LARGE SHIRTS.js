// TASK 37
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love Usman'; }
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt('Medium');
// Make a shirt of any size with a different message
make_shirt('Small', 'Usman is awesome boy!');
