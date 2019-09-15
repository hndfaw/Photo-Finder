<template>
  <div id="images-container">
      <div class="image" v-for="image in images" :key="image.id">
        <img v-bind:src="image.urls.small" style="width: 250px" >
      </div>
  </div>
</template>

<script src="./ImagesContainer.js"></script>
<style src="./ImagesContainer.css"></style>