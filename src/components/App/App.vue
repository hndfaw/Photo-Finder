<template>
  <div id="app">
    <h1>This is my photo finder app!</h1>
      <ImagesContainer v-bind:images="images"/>
      <!-- <div v-for="image in images" :key="image.id">
        <img v-bind:src=" 'https://image.tmdb.org/t/p/w500' +image.poster_path" alt="">
      </div> -->
  </div>
</template>


<script src="./App.js"></script>
<style src="./App.css"></style>
