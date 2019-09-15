<template>
<div>
    <div id="images-container">
        <div class="image" v-for="image in images" :key="image.id">
          <img v-bind:src="image.urls.small" style="width: 250px" 
          v-on:click="toggleOpenSingPhoto({'url': image.urls.regular, 'link': image.links.download})"
          >
        </div>
    </div>
    <div class="single-imgae-container" v-bind:class="{'is-closed': !isPhotoOpened}">
      <a class="a-tag" v-bind:href="''+linkToDownload+''" target="_blank"><img class="full-size-img" v-bind:src="currentImgUrl" 
      ></a>
      <button v-on:click="toggleOpenSingPhoto" class="close-single-photo-btn">&#215;</button>
    </div>
</div>
</template>

<script src="./ImagesContainer.js"></script>
<style src="./ImagesContainer.css"></style>