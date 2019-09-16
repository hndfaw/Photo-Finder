<template>
  <footer id="footer">
    <div class="pages-footer">
      <button @click="submitChangePage('decrement')" class="prev-next-btn">Previous</button>
      <p>{{props.pagesFound + '/'+ props.currentPage}}</p>
      <button @click="submitChangePage('increment')" class="prev-next-btn">Next</button>
    </div>
  </footer>
</template>

<script src="./Footer.js"></script>
<style src="./Footer.css"></style>