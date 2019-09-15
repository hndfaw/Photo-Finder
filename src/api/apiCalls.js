export const fetchImages = (param) => {
 return fetch(`https://api.unsplash.com/search/photos?client_id=${"606f0c4b04ddddb42d2bfd6d320a5080b8ec60c216405ad12959b4649b7524e4"}&page=2&per_page=50&orientation=${param.orientation}&query=${param.searchTerm}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))
}

// export const fetchFilms = ()=> {
//   let filmsURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=faeff26a101acfb04b4ebb285bac57bf&language=en-US&page=1'
//    return fetch(filmsURL)
//      .then(response => {
//        if(!response.ok) {
//          throw Error ('Error fetching films')
//        } else {
//        return response.json()
//        }
//      })
// };