<template>
  <div id="app">
      <FindImages v-on:run-search="runSearching" />
      <ImagesContainer v-bind:images="images"/>
      <Footer v-on:update-page="updatePage" v-bind:props="{'pagesFound': pagesFound, 'currentPage': currentPage, 'photosFound': photosFound}"/>
  </div>
</template>


<script src="./App.js"></script>
<style src="./App.css"></style>


