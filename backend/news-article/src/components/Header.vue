<template>
<header class="flex items-center justify-between p-4 border-b">
  <div class="logo">
    <button class="text-red-600 font-bold text-lg" @click="router.push('/');">NewsArticle</button>
  </div>

  <nav class="flex space-x-6 text-gray-700">
    <a href="#" class="hover:text-black">Posts</a>
    <a href="#" class="hover:text-black">Author</a>
    <a href="#" class="hover:text-black">Category</a>
  </nav>

  <div class="flex items-center space-x-4">
    <button class="text-gray-700 hover:text-black" @click="router.push('/login');">Login / Register</button>
    <!-- add profile pic -->
     <span>|</span>
     <button class="text-gray-700 hover:text-black">Profile</button>
  </div>
</header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>