//TASK 32 

let current_users: string[] = ['john', 'alice', 'eric', 'bob', 'mike'];
let new_users: string[] = ['alice', 'sarah', 'mike', 'jason', 'kate'];

for (let new_username of new_users) {
    let usernameExists = false;
    for (let current_username of current_users) {
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Sorry, the username ${new_username} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username ${new_username} is available.`);
    }
}
