<template>
  <div id="find-images">
    <h1 class="logo">PHOTO<span class="logo-finder">FINDER</span></h1>
    <form @submit.prevent="submitSearch" class="find-images-form">
      <div class="search-bar-container">
        <input v-model="searchTerm" type="text" name="searchTerm" class="search-input">
        <img src="../../assets/magnifying-glass.png" class="search-icon">
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