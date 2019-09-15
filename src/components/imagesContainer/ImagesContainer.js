export default {
  name: 'ImagesContainer',
  props: ['images'],
  data() {
    return  {
      isPhotoOpened: false,
    }
  },

  methods: {
    toggleOpenSingPhoto() {
      this.isPhotoOpened = !this.isPhotoOpened;
    }
  }
}