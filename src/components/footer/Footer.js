export default {
  name: 'Footer',
  methods: {
    submitChangePage(change) {
      this.$emit('update-page', change)
    }
  },
  props: ["props"],
}