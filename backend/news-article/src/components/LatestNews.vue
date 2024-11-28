<template>
  <div class="mt-8">
    <!-- Section Header -->
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-2xl font-bold text-gray-800">Latest News</h3>
      <a href="#" class="text-red-600 font-medium hover:underline">See all</a>
    </div>

    <!-- News Articles Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <NewsCard
        v-for="article in articles"
        :key="article.title"
        :image="article.image"
        :publisher="article.publisher"
        :time="article.time"
        :title="article.title"
        :preview="article.preview"
        :category="article.category"
        :readTime="article.readTime"
      />
    </div>
  </div>
</template>

<script setup>
import NewsCard from './NewsCard.vue';

defineProps({
  articles: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
