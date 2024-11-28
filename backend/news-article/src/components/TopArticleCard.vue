<template>
  <div
    class="flex flex-row bg-white rounded-3xl shadow-md overflow-hidden max-h-72"
  >
    <!-- Left: Image Section -->
    <div class="sm:w-1/2">
      <img
        :src="imageSrc"
        :alt="title"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Right: Content Section -->
    <div class="p-4 sm:w-1/2">
      <div class="flex items-center space-x-2 text-gray-500 text-sm">
        <span class="font-semibold text-black">{{ source }}</span>
        <span>•</span>
        <span>{{ timeAgo }}</span>
      </div>

      <h2
        class="mt-2 text-lg font-bold text-gray-800 hover:text-black cursor-pointer text-start"
      >
        {{ title }}
      </h2>

      <p class="mt-2 text-gray-600 text-sm text-start">
        {{ description }}
      </p>

      <div class="mt-4 flex items-center space-x-4 text-gray-500 text-xs">
        <span class="text-red-600 font-semibold">{{ category }}</span>
        <span>•</span>
        <span>{{ readTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  timeAgo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true,
  },
});
</script>
