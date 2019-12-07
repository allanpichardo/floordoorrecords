import slugify from "slugify";

export default class Utils {

    static fetchAllAlbums(callback) {
        fetch('/data/albums.json')
            .then((response) => {
                return response.json()
            }).then((data) => {
                callback(null, data);
            }).catch(e  => {
                callback(e);
        });
    }

    static fetchAllArtists(callback) {
        fetch('/data/artists.json')
            .then((response) => {
                return response.json()
            }).then((data) => {
            callback(null, data);
        }).catch(e  => {
            callback(e);
        });
    }


    static findAlbumBySlug(albums, slug) {
        for(let i = 0; i < albums.length; i++) {
            if(slugify(albums[i].title) === slug) {
                return albums[i];
            }
        }
        return null;
    }

    static findArtistBySlug(artists, slug) {
        for(let i = 0; i < artists.length; i++) {
            if(slugify(artists[i].name) === slug) {
                return artists[i];
            }
        }
        return null;
    }

    /**
     * Search all the albums and get one by name
     * which is closest to the one searched for
     * @param albums
     * @param name
     */
    static findAlbumByName(albums, name) {
        if(albums.length > 0) {
            let lowestDistance = Utils.levenshteinDistance(name, albums[0].title);
            let lowestIndex = 0;
            for(let i = 1; i < albums.length; i++) {
                let distance = Utils.levenshteinDistance(name, albums[i].title);
                if(distance < lowestDistance) {
                    lowestIndex = i;
                    lowestDistance = distance;
                }
            }
            return albums[lowestIndex].title.charAt(0) === name.charAt(0) ? albums[lowestIndex] : null;
        }
        return null;
    }

    /**
     * @param {string} a
     * @param {string} b
     * @return {number}
     */
    static  levenshteinDistance(a, b) {
        // Create empty edit distance matrix for all possible modifications of
        // substrings of a to substrings of b.
        const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

        // Fill the first row of the matrix.
        // If this is first row then we're transforming empty string to a.
        // In this case the number of transformations equals to size of a substring.
        for (let i = 0; i <= a.length; i += 1) {
            distanceMatrix[0][i] = i;
        }

        // Fill the first column of the matrix.
        // If this is first column then we're transforming empty string to b.
        // In this case the number of transformations equals to size of b substring.
        for (let j = 0; j <= b.length; j += 1) {
            distanceMatrix[j][0] = j;
        }

        for (let j = 1; j <= b.length; j += 1) {
            for (let i = 1; i <= a.length; i += 1) {
                const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
                distanceMatrix[j][i] = Math.min(
                    distanceMatrix[j][i - 1] + 1, // deletion
                    distanceMatrix[j - 1][i] + 1, // insertion
                    distanceMatrix[j - 1][i - 1] + indicator, // substitution
                );
            }
        }

        return distanceMatrix[b.length][a.length];
    }

}