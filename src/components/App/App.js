import { fetchFilms } from '../../api/apiCalls';
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

  created() {
    fetchFilms().then(images => this.images = images.results)
  }
}