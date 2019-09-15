<template>
  <div id="app">
      <FindImages v-on:run-search="runSearching" />
      <ImagesContainer v-bind:images="images"/>
      <Footer />
  </div>
</template>


<script src="./App.js"></script>
<style src="./App.css"></style>
