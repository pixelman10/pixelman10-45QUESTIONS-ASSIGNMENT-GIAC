//Task 30

let usernames: string[] = ['admin', 'Musa', 'Ahmed', 'Abdulrehman', 'Wasay'];

for (let username of usernames) {
    if (username.toLowerCase() == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}    