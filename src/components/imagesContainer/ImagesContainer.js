export default {
  name: 'ImagesContainer',
  props: ['images'],
  data() {
    return  {
      isPhotoOpened: false,
      currentImgUrl: '',
      linkToDownload: ''
    }
  },

  methods: {
    toggleOpenSingPhoto(params) {
      this.isPhotoOpened = !this.isPhotoOpened;
      this.currentImgUrl = params.url,
      this.linkToDownload = params.link
    }
  }
}