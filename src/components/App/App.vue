<template>
  <div id="app">
      <FindImages v-on:run-search="runSearching" />
      <ImagesContainer v-bind:images="images"/>
  </div>
</template>


<script src="./App.js"></script>
<style src="./App.css"></style>
