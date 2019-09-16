<template>
  <footer id="footer" v-bind:class="{'hide-footer': !props.pagesFound}">
    <div class="pages-footer">
      <button @click="submitChangePage('first')" class="first-last-btn first-btn">First</button>
      <button @click="submitChangePage('decrement')" class="prev-next-btn">Previous</button>
      <p class="number-of-pages">{{props.currentPage + '/'+ props.pagesFound}}</p>
      <button @click="submitChangePage('increment')" class="prev-next-btn">Next</button>
      <button @click="submitChangePage('last')" class="first-last-btn last-btn">Last</button>
    </div>
  </footer>
</template>

<script src="./Footer.js"></script>
<style src="./Footer.css"></style>