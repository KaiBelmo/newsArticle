<template>
    <div class="authors-list">
      <h1>Authors</h1>
  
      <!-- Loading state -->
      <div v-if="isLoading">Loading authors...</div>
  
      <!-- Error state -->
      <div v-if="errorMessage" class="error">
        {{ errorMessage }}
      </div>
  
      <!-- Authors List -->
      <ul v-if="authors.length > 0">
        <li v-for="(author, index) in authors" :key="index">{{ author }}</li>
      </ul>
  
      <!-- Empty State -->
      <p v-if="authors.length === 0">No authors found.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const authors = ref([]);
  const isLoading = ref(true);
  const errorMessage = ref('');
  
  // Fetch authors from API when the component is mounted
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/authors');
      console.log(response.data);
      authors.value = response.data.authors;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        errorMessage.value = 'No authors found.';
      } else {
        errorMessage.value = 'Error retrieving authors.';
      }
    } finally {
      isLoading.value = false;
    }
  });
  </script>
  
  <style scoped>
  .authors-list {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    padding: 8px;
    background-color: #fff;
    margin: 5px 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .error {
    color: red;
    text-align: center;
  }
  
  .loading {
    text-align: center;
    font-size: 18px;
  }
  </style>
  