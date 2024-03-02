let guest_list: string[] = ["Ayan", "Ali", "Asad", "Anas"];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on the dinner. \nThank YOU \n')
}
let not_present : string ="Ali";
let new_guest : string ="Muhammad Amir";
guest_list [1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on the dinner. \nThank YOU \n')
}

console.log(`Mr. ${not_present} will not coming tomorrrw dinner. `)