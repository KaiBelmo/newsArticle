<template>
<header class="flex items-center justify-between p-4 border-b">
  <div class="logo">
    <span class="text-red-600 font-bold text-lg">NewsArticle</span>
  </div>

  <nav class="flex space-x-6 text-gray-700">
    <button class="hover:text-black">Posts</button>
    <button class="hover:text-black" @click="router.push('/all-authors');">Author</button>
    <button class="hover:text-black">Category</button>
  </nav>

  <div class="flex items-center space-x-4">
    <button class="text-gray-700 hover:text-black" @click="router.push('/login');">Login / Register</button>
    <!-- add profile pic -->
    <img
      src=""
      alt="Profile"
      class="w-8 h-8 rounded-full"
    />
  </div>
</header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
