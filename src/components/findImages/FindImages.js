export default {
  data() {
    return {
      searchTerm: '',
      orientation: 'landscape'
    }
  },
  methods: {
    submitSearch() {
      this.$emit('run-search', {'searchTerm': this.searchTerm, 'orientation': this.orientation});
      this.searchTerm = '';
    }
  }
}