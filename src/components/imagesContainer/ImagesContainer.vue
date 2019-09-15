<template>
<div>

  <div id="images-container">
      <div class="image" v-for="image in images" :key="image.id">
        <img v-bind:src="image.urls.small" style="width: 250px" v-on:click="toggleOpenSingPhoto" >
      </div>
  </div>
      <div id="single-imgae-container" v-bind:class="{'is-closed': !isPhotoOpened}">
        <button v-on:click="toggleOpenSingPhoto" class="close-single-photo-btn">X</button>
      </div>
</div>
</template>

<script src="./ImagesContainer.js"></script>
<style src="./ImagesContainer.css"></style>