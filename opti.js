class Artist {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
  
function findArtistIndex(artists, name) {
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].name === name) {
        return artists[i].id;
      }
    }
    return -1;
}

function findArtistIndexOpti(artists, name) {
    let artistMap = new Map();
    artists.forEach(artist => {
        artistMap.set(artist.name, artist.id);
    });
    return artistMap.get(name) || -1;
}

console.log("Premier algo")
console.log("création de la data en cour...")
//Data générer avec l'ia
const artists = [
    new Artist(1, "Mozart"),
    new Artist(2, "Beethoven"),
    new Artist(3, "Bach"),
    new Artist(4, "Chopin"),
    new Artist(5, "Vivaldi"),
    new Artist(6, "Handel"),
    new Artist(7, "Haydn"),
    new Artist(8, "Schubert"),
    new Artist(9, "Tchaikovsky"),
    new Artist(10, "Debussy")
];
console.log("création de la data terminé")

const start = performance.now();
findArtistIndexOpti(artists,'Haydn');
const end = performance.now();
console.log(`Elapsed time ${end - start} ms`);