class Artist {
    constructor(id, name, genre, stage) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.stage = stage;
    }
}

class Stage{
    constructor(id,name,genres){
        this.id = id;
        this.name = name;
        this.genres = genres;
    }
}

function assignStages(artists, stages) {
    for (let artist of artists) {
        for (let stage of stages) {
            if (stage.genres.includes(artist.genre)) {
                artist.stage = stage.id;
                break;
            }
        }
    }
}
  
function assignStagesOpti(artists, stages) {
    let stageMap = new Map();

    stages.forEach(stage => {
        stageMap.set(stage.id, stage.genres);
    });
    for (let artist of artists) {
        for (let [stageId, genres] of stageMap.entries()) {
            if (genres.includes(artist.genre)) {
                artist.stage = stageId;
                break;
            }
        }
    }
}

console.log("Deuxième algo")

console.log("création de la data en cour...")
//Data générer avec l'ia
const stages = [
    new Stage('s1', 'Main Stage', ['rock', 'pop']),
    new Stage('s2', 'Electro Dome', ['electronic', 'techno']),
    new Stage('s3', 'Jazz Garden', ['jazz', 'blues'])
];
const artists = [
    new Artist('a1', 'Rock Band', 'rock', null),
    new Artist('a2', 'Pop Star', 'pop', null),
    new Artist('a3', 'Techno Master', 'techno', null),
    new Artist('a4', 'Jazz Quartet', 'jazz', null),
    new Artist('a5', 'Blues Singer', 'blues', null),
    new Artist('a6', 'Electronic Duo', 'electronic', null),
    new Artist('a7', 'Indie Pop Band', 'pop', null),
    new Artist('a8', 'Hard Rock Group', 'rock', null),
    new Artist('a9', 'Smooth Jazz Trio', 'jazz', null),
    new Artist('a10', 'Deep Techno DJ', 'techno', null)
];
console.log("création de la data terminé")

const start = performance.now();
assignStagesOpti(artists, stages);
const end = performance.now();
console.log(`Elapsed time ${end - start} ms`);

//console.log("Résultats de l'assignation :");
//artists.forEach(artist => {
//    console.log(`${artist.name} (${artist.genre}) -> Stage: ${artist.stage}`);
//});