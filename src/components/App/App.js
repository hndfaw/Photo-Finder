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
      photosFound: 0,
      currentPage: 1,
      params: {}
    }
  },

  methods: {
    runSearching(params) {
      this.params = params
      this.currentPage = 1
      fetchImages(params, 1)
        .then(images => {
          this.images = images.results;
          this.pagesFound = images.total_pages;
          this.photosFound = images.total;
          
        });
    },
    updatePage(change) {
      if(change === "increment") {
        if(this.currentPage < this.pagesFound) {
          this.currentPage++;
          fetchImages(this.params, this.currentPage)
            .then(images => {
              this.images = images.results;
            });
        }
      } else if(change === "decrement") {
        if(this.currentPage > 1) {
          this.currentPage--
          fetchImages(this.params, this.currentPage)
            .then(images => {
              this.images = images.results;
            });
        }
      } else if(change === "first") {
        if(this.currentPage !== 1) {
          this.currentPage = 1
          fetchImages(this.params, this.currentPage)
            .then(images => {
              this.images = images.results;
            });
        }
      } else if(change === "last") {
        if(this.currentPage !== this.pagesFound) {
          this.currentPage = this.pagesFound
          fetchImages(this.params, this.currentPage)
            .then(images => {
              this.images = images.results;
            });
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