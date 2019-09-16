export const fetchImages = (params, currentPage) => {
 return fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.VUE_APP_ACCESS_KEY}&page=${currentPage}&per_page=100&orientation=${params.orientation}&query=${params.searchTerm}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))
}

export const fetchRandomImages = () => {
    return fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.VUE_APP_ACCESS_KEY}&count=30&orientation=landscape`)
       .then(res => res.json())
       .then(data => data)
       .catch(error => console.log(error))
       
   }

