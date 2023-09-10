const API_KEY = import.meta.env.VITE_API_KEY;
/* request */
const requestMovies = (endPoin, category, page, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/${endPoin}/${category}?api_key=${API_KEY}&language=es-MX&page=${page}`,{signal: abortSignal})
}

const infoMovie = (endPoint,id, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/${endPoint}/${id}?api_key=${API_KEY}&language=es-MX`,{signal: abortSignal})
}

/* export endpoints */
 export const endPoints = {
    requestMovies,
    infoMovie,
}
