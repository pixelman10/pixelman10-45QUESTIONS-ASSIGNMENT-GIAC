var guest_list = ["Ayan", "Ali", "Asad", "Anas"];
//for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on the dinner. \nThank YOU \n')
//}
var not_present = "Ali";
var new_guest = "Muhammad Amir";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on the dinner. \nThank YOU \n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrrw dinner. "));
guest_list.unshift('Shaheen', 'Saifi Bhai', 'Sir Rizu');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on the dinner.We found big table so we decided to invite 3 more guests. \nThank YOU \n');
}
