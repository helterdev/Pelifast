const API_KEY = '435bb9c8bcd17bf79d6141d67edc22f1';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzViYjljOGJjZDE3YmY3OWQ2MTQxZDY3ZWRjMjJmMSIsInN1YiI6IjY0Yzk2YThjMGNiMzM1MDBlMjc4YmM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._dcEA6RtKZhqzS8pcDzgFjvfLla1fDU9WIEggdEoBts'
    }
  };
/* request */
const requestMovies = (endPoin, category, page, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/${endPoin}/${category}?api_key=${API_KEY}&language=es-MX&page=${page}`,{signal: abortSignal})
}

const infoMovie = (endPoint,id, abortSignal) => {
    return fetch(`https://api.themoviedb.org/3/${endPoint}/${id}?language=es-MX`, options ,{signal: abortSignal})
}
// `https://api.themoviedb.org/3/${endPoint}/${id}?api_key=${API_KEY}&language=es-MX`, {signal: abortSignal}
/* export endpoints */
 export const endPoints = {
    requestMovies,
    infoMovie,
}
