<template>
  <div v-if="loading" class="text-center p-8">
    <p>Loading article...</p>
  </div>

  <div v-else-if="error" class="text-center p-8">
    <h1 class="text-2xl font-bold text-red-500">Error Loading Article</h1>
    <p class="text-gray-600 mt-2">The article could not be found.</p>
  </div>

  <div v-else class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
      {{ article.title }}
    </h1>
    <div class="text-gray-500 text-sm text-center mb-6">
      By <span class="font-semibold">{{ article.publisher }}</span> • {{ article.time }}
    </div>
    <img
      :src="article.image"
      :alt="article.title"
      class="w-full h-auto rounded-lg mb-8"
    />
    <div class="text-gray-700 leading-relaxed text-lg">
      <p v-for="(paragraph, index) in article.content.split('\n')" :key="index" class="mb-4">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const route = useRoute();
    const article = ref(null);
    const loading = ref(true);
    const error = ref(false);

    onMounted(async () => {
      try {
        const response = await axios.get(`/api/posts/${route.params.id}`);
        article.value = response.data;
      } catch (err) {
        console.error(err);
        error.value = true;
      } finally {
        loading.value = false;
      }
    });

    return { article, loading, error };
  },
};
</script>
