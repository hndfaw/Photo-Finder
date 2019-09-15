export const fetchImages = (params) => {
 return fetch(`https://api.unsplash.com/search/photos?client_id=${"606f0c4b04ddddb42d2bfd6d320a5080b8ec60c216405ad12959b4649b7524e4"}&page=2&per_page=100&orientation=${params.orientation}&query=${params.searchTerm}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))
}

export const fetchRandomImages = () => {
    return fetch(`https://api.unsplash.com/photos/random?client_id=${"606f0c4b04ddddb42d2bfd6d320a5080b8ec60c216405ad12959b4649b7524e4"}&count=30&orientation=landscape`)
       .then(res => res.json())
       .then(data => data)
       .catch(error => console.log(error))
   }