import { fetchFilms, fetchImages } from '../../api/apiCalls';
import ImagesContainer from '../imagesContainer/ImagesContainer.vue';
import FindImages from '../findImages/FindImages.vue'


export default {
  name: 'app',
  components: {
    ImagesContainer,
    FindImages
  },

  data() {
    return {
      images: []
    }
  },

  methods: {
    runSearching(param) {
      // fetchFilms().then(images => this.images = images.results)
      fetchImages(param)
        .then(images => this.images = images.results)      
    }
  }

}