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
        :image="article.imageSrc"
        :publisher="article.author"
        :title="article.title"
        :preview="article.body"
        :category="article.category"
        :readTime="calculateReadTime(article.body)"
      />
    </div>
  </div>
</template>

<script setup>
import NewsCard from './NewsCard.vue';
import { ref, onMounted } from "vue";
import axios from "axios";


// defineProps({
//   articles: {
//     type: Array,
//     required: true,
//   },
// });

const articles = ref(null);

onMounted(async () => {
  try {
    console.log(23123);
    const response = await axios.get(
      "http://localhost:8080/api/latestarticles"
    );
    console.log(response);
    if (response.data.articles) {
      articles.value = response.data.articles;
      console.log(articles.value)
    }
  } catch (err) {
    console.error(err);
    article.value = null;
  }
});


console.log("--------------------------------------")
// console.log(articles);
console.log("--------------------------------------")

function calculateReadTime(text) {
  console.log(text);
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length; // Split text into words by whitespace
  const readTimeMinutes = Math.ceil(words / wordsPerMinute); // Round up to nearest minute
  return readTimeMinutes.toString();
}

</script>

<style scoped>
/* Add any specific styles if needed */
</style>
