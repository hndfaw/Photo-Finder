import { fetchFilms } from '../../api/apiCalls';
import ImagesContainer from '../imagesContainer/ImagesContainer.vue';


export default {
  name: 'app',
  components: {
    ImagesContainer
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