<template>
  <div class="flex flex-col bg-white rounded-3xl shadow-md overflow-hidden">
    <!-- top: image Section -->
    <img :src="image" :alt="title" class="h-48 w-full object-cover" />

    <!-- bottom: content section -->
    <div class="p-4 flex flex-col justify-between mx-5 my-2">
      <!-- author and time -->
      <div class="flex items-center space-x-2 text-gray-500 text-sm">
        <span class="font-semibold text-black">{{ publisher }}</span>
        <span>•</span>
        <span>{{ time }}</span>
      </div>

      <!-- title -->
      <h4 class="mt-2 text-lg font-semibold text-gray-800 hover:text-red-600 cursor-pointer text-start">
        {{ title }}
      </h4>

      <!-- article preview -->
      <p class="mt-2 text-sm text-gray-600 text-start">{{ preview }}</p>

      <!-- category and read time -->
      <div class="mt-4 text-gray-500 text-xs text-start">
        <span class="text-red-600 font-semibold">{{ category }}</span> • {{ readTime }} min read
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  publisher: String,
  time: String,
  title: String,
  preview: String,
  category: String,
  readTime: String,
});
</script>
