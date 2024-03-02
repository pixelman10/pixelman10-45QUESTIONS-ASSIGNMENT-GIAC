//TASK 32 
var current_users = ['john', 'alice', 'eric', 'bob', 'mike'];
var new_users = ['alice', 'sarah', 'mike', 'jason', 'kate'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    var usernameExists = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_username = current_users_1[_a];
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Sorry, the username ".concat(new_username, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username ".concat(new_username, " is available."));
    }
}
