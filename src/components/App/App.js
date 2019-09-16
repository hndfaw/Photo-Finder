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
      pagesFound: 10,
      photosFound: 0,
      currentPage: 1,
      params: {}
    }
  },

  methods: {
    runSearching(params) {
      this.params = params
      fetchImages(params, this.currentPage)
        .then(images => {
          this.images = images.results;
          this.pagesFound = images.total_pages;
          this.photosFound = images.total;
          console.log(images)
        });
    },
    updatePage(change) {
      if(change === "increment") {
        if(this.currentPage < this.pagesFound) {
          this.currentPage++;
          fetchImages(this.params, this.currentPage)
        }
      } else {
        if(this.currentPage > 1) {
          this.currentPage--
          fetchImages(this.params, this.currentPage)
        }
      }
    }

  },

  created() {
    fetchRandomImages()
    .then(images => {
      this.images = images;
      console.log(images)
    })

  }

}