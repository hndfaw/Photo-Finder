// export const fetchImages = () => {
//  return fetch(`https://api.unsplash.com/search/photos?client_id=${"606f0c4b04ddddb42d2bfd6d320a5080b8ec60c216405ad12959b4649b7524e4"}&page=1&per_page=10&orientation=landscape&query=${'football'}}`)
//     .then(res => res.json())
//     .then(data => data.results)
// }

export const fetchFilms = ()=> {
  let filmsURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=faeff26a101acfb04b4ebb285bac57bf&language=en-US&page=1'
   return fetch(filmsURL)
     .then(response => {
       if(!response.ok) {
         throw Error ('Error fetching films')
       } else {
       return response.json()
       }
     })
};