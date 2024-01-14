const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function() {
  for (const playlistId in library.playlists) {
    const playlist = library.playlists[playlistId];  //identifying the subarray in playlists

    const numOfTracks = playlist.tracks.length; //moving through subarray in playlists

    console.log(`${playlist.id}: ${playlist.name} - ${numOfTracks} Tracks`); // instructing to list data based on this formatting
  }
}
     
printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = function() {
  for (const trackId in library.tracks) { 
    const tracks = library.tracks[trackId]; // identifying the subarray in tracks
    
    console.log(`${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album})`); // instructing to list data based on this formatting
  }
}

printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function(playlistId) {
    const playlist = library.playlists[playlistId];
    //const numOfTracks = playlist.tracks.length;

    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} Tracks`);

    for (const trackId of playlist.tracks) {
      const tracks = library.tracks[trackId];
      
      if (!tracks) { //we don't want to collect tracks that aren't in our playlist
        continue;
      }

      console.log(`${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album})`); // instructing to list data based on this formatting
  }
  
}

printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  const tracks = library.tracks[trackId]; 
  
    if (playlist.tracks.includes(trackId)) { //we don't want to add a track to a playlist where it already exists

    console.log(`${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album}) already exists in ${playlistId}`); 
    return; 
    }
  
  playlist.tracks.push(trackId); //pushing new track into playlist array
  console.log (`We've added ${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album}) to ${playlistId}`) // instructing to list data based on this formatting
  } 


addTrackToPlaylist("t03", "p01")
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
 
  const trackId = 't' + generateUid; //creating trackId

  library.tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  }; //assigning new object info


console.log (`We've added ${name} by ${artist} (${album}) to the library`)//console logging success
}

addTrack('One More Time', 'Daft Punk', 'Discovery');
// adds a playlist to the library
const addPlaylist = function(name) {
const playlistId = 'p' + generateUid; //creating playlistId

library.playlists[playlistId] = {
  id: playlistId,
  name: name,
  tracks: [] 
};
console.log(`We've added the playlist ${name} to the library`);
}

addPlaylist('Onlyrocks');
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
