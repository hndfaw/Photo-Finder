import { fetchImages, fetchRandomImages } from '../../api/apiCalls';
import ImagesContainer from '../imagesContainer/ImagesContainer.vue';
import FindImages from '../findImages/FindImages.vue';
import Footer from '../footer/Footer.vue'


export default {
  name: 'app',
  components: {
    ImagesContainer,
    FindImages,
    Footer
  },

  data() {
    return {
      images: [],
      pagesFound: 0,
      photosFound: 0
    }
  },

  methods: {
    runSearching(param) {
      fetchImages(param)
        .then(images => {
          this.images = images.results;
          this.pagesFound = images.total_pages;
          this.photosFound = images.total;
          console.log(images)
        });
    },

  },

  created() {
    fetchRandomImages()
    .then(images => {
      this.images = images;
      console.log(images)
    })

  }

}