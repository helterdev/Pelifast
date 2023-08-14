const key = '435bb9c8bcd17bf79d6141d67edc22f1';
/* home movies */
const requestMovies = (page, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=es-MX&page=${page}`,{signal: abortSignal})
}

/* popular movies */
const requestPopularMovies = (page, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-MX&page=${page}`, {signal: abortSignal});
}

/* popular tv series */
const requestTVSeries = (page,abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=es-MX&page=${page}`, {signal: abortSignal})
}

/* export endpoints */
 export const endPoints = {
    requestMovies,
    requestPopularMovies,
    requestTVSeries
}