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
             },


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

 printPlaylists: function () {
  for (const playlistId in this.playlists) {
    const playlist = this.playlists[playlistId];  //identifying the subarray in playlists

    const numOfTracks = playlist.tracks.length; //moving through subarray in playlists

    console.log(`${playlist.id}: ${playlist.name} - ${numOfTracks} Tracks`); // instructing to list data based on this formatting
  }
},
     


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function() {
  for (const trackId in this.tracks) { 
    const tracks = this.tracks[trackId]; // identifying the subarray in tracks
    
    console.log(`${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album})`); // instructing to list data based on this formatting
  }
},



// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    //const numOfTracks = playlist.tracks.length;

    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} Tracks`);

    for (const trackId in this.tracks) {
      const tracks = this.tracks[trackId];
      
      if (!tracks) { //we don't want to collect tracks that aren't in our playlist
        continue;
      }

      console.log(`${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album})`); // instructing to list data based on this formatting
  }
  
},



// adds an existing track to an existing playlist
addTrackToPlaylist: function(trackId, playlistId) {
  const playlist = this.playlists[playlistId];
  const tracks = this.tracks[trackId]; 
  
    if (playlist.tracks.includes(trackId)) { //we don't want to add a track to a playlist where it already exists

    console.log(`${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album}) already exists in ${playlistId}`); 
    return; 
    }
  
  playlist.tracks.push(trackId); //pushing new track into playlist array
  console.log (`We've added ${trackId}: ${tracks.name} by ${tracks.artist} (${tracks.album}) to ${playlistId}`) // instructing to list data based on this formatting
  } ,



// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the library
addTrack: function(name, artist, album) {
 
  const trackId = 't' + this.generateUid; //creating trackId

  this.tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  }; //assigning new object info


console.log (`We've added ${name} by ${artist} (${album}) to the library`)//console logging success
},


// adds a playlist to the library
addPlaylist: function(name) {
const playlistId = 'p' + this.generateUid; //creating playlistId

this.playlists[playlistId] = {
  id: playlistId,
  name: name,
  tracks: [] 
};
console.log(`We've added the playlist ${name} to the library`);
},


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
printSearchResults: function(query) {

}
};

//functioning the functions

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t03", "p01")
library.addTrack('One More Time', 'Daft Punk', 'Discovery');
library.addPlaylist('Onlyrocks');
