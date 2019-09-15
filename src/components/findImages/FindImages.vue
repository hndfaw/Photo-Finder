<template>
  <div id="find-images">
    <h1>Photo Finder</h1>
    <form @submit.prevent="submitSearch" class="find-images-form">
      <!-- <div class="orientation-container">
        
      </div> -->
      <div class="search-bar-container">
        <input v-model="searchTerm" type="text" name="searchTerm" class="search-input">
        <select v-model="orientation" name="" id="orientation">
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
        <button type="submit" class="search-btn">Search</button>
      </div>
    </form>
  </div>
</template>

<script src="./FindImages.js"></script>
<style src="./FindImages.css"></style>