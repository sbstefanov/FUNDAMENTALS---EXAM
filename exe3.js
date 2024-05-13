function movies(array) {
    let movies = [];

    array.forEach(element => {
        
        if (element.includes('addMovie')) {
            let line = element.split('addMovie ');
            let name = line[1];
            movies.push({name});

        } else if (element.includes('directedBy')) {
            let line = element.split(' directedBy ');
            let [name, director] = [line[0], line[1]];
            let movie = movies.find(m => m.name === name);

            if (movie) {
                movie.director = director;
            }

        } else if (element.includes('onDate')) {
            let line = element.split(' onDate ');
            let [name, date] = [line[0], line[1]];
            let movie = movies.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }

        }
    });

    movies.forEach(element => {
        if(element.name && element.director && element.date){
            console.log(JSON.stringify(element));
        }
    });
}
    movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]);