<template>
  <div id="images-container">
    <div class="image" v-for="image in images" :key="image.id">
        <!-- <img v-bind:src=" 'https://image.tmdb.org/t/p/w300' +image.poster_path" > -->
        <img v-bind:src="image.urls.small" >
      </div>
  </div>
</template>

<script src="./ImagesContainer.js"></script>
<style src="./ImagesContainer.css"></style>