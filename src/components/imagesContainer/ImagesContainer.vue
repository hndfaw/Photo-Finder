<template>
  <div id="images-container">
    <div v-for="image in images" :key="image.id">
        <img v-bind:src=" 'https://image.tmdb.org/t/p/w300' +image.poster_path" alt="">
      </div>
  </div>
</template>

<script src="./ImagesContainer.js"></script>
<style src="./ImagesContainer.css"></style>