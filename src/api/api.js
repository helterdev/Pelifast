const key = '435bb9c8bcd17bf79d6141d67edc22f1';
/* request */
const requestMovies = (endPoin, category, page, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/${endPoin}/${category}?api_key=${key}&language=es-MX&page=${page}`,{signal: abortSignal})
}

const infoMovie = (id, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es-MX`,{signal: abortSignal})
}

/* export endpoints */
 export const endPoints = {
    requestMovies,
    infoMovie
}
