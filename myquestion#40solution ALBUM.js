//TASK 40 
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three dictionaries representing different albums
var album1 = make_album('Artist 1', 'Album 1');
var album2 = make_album('Artist 2', 'Album 2', 12); // Including the number of tracks
var album3 = make_album('Artist 3', 'Album 3');
// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
