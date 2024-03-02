//TASK 40 

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Making three dictionaries representing different albums
let album1: Album = make_album('Artist 1', 'Album 1');
let album2: Album = make_album('Artist 2', 'Album 2', 12); // Including the number of tracks
let album3: Album = make_album('Artist 3', 'Album 3');

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
