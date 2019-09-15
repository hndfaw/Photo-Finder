<template>
  <div>
    <form @submit.prevent="submitSearch">
      <select v-model="orientation" name="" id="">
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="squarish">Squarish</option>
      </select>
      <input v-model="searchTerm" type="text" name="searchTerm" id="">
      <input type="submit" value="Search">
    </form>
  </div>
</template>

<script src="./FindImages.js"></script>
<style src="./FindImages.css"></style>