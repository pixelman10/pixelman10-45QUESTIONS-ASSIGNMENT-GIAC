// TASK 17

// Original guest list
let guests: string[] = ["Ayan", "Muhammad Amir", "Asad", "Anas"];

// Printing message about the limit of guests
console.log("Due to a limited space, only two people can be invited for dinner.");

// Removing guests until only two remain
while (guests.length > 2) {
    const removedGuest = guests.pop(); // Remove the last guest
    if (removedGuest) {
        console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
    }
}

// Printing invitation messages to the two remaining guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Removing the last two names
guests.pop();
guests.pop();

// Printing to ensure the list is empty
console.log("Remaining guests list:", guests);
