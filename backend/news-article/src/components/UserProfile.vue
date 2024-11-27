<template>
  <div class="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-10">
    <!-- Profile Header -->
    <div class="flex items-center space-x-8 mb-10">
      <img
        :src="userData.avatar"
        alt="User Avatar"
        class="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
      />
      <div>
        <h2 class="text-4xl font-semibold text-gray-800">{{ userData.name }}</h2>
        <p class="text-lg text-gray-600 mt-3">{{ userData.bio }}</p>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <div class="tabs flex justify-center mb-6 border-b border-gray-300">
      <div
        @click="setTab('articles')"
        :class="tabClass('articles')"
      >
        Authored Articles
      </div>
      <div
        @click="setTab('bio')"
        :class="tabClass('bio')"
      >
        Bio
      </div>
      <div
        @click="setTab('edit')"
        :class="tabClass('edit')"
      >
        Edit Profile
      </div>
    </div>

    <!-- Tab Content -->
    <div v-show="currentTab === 'articles'" class="tab-content mb-8">
      <h3 class="text-3xl font-semibold text-gray-800 mb-6">Articles by {{ userData.name }}</h3>
      <ul class="space-y-6">
        <li
          v-for="article in userData.articles"
          :key="article.title"
          class="border-b border-gray-200 pb-6"
        >
          <h4 class="text-2xl font-semibold text-gray-800">{{ article.title }}</h4>
          <p class="text-gray-600 mt-2">{{ article.excerpt }}</p>
          <small class="text-gray-500">Published: {{ formatDate(article.createdAt) }}</small>
        </li>
      </ul>
    </div>

    <div v-show="currentTab === 'bio'" class="tab-content mb-8">
      <h3 class="text-3xl font-semibold text-gray-800 mb-6">{{ userData.name }}'s Bio</h3>
      <p class="text-gray-600">{{ userData.bio }}</p>
    </div>

    <div v-show="currentTab === 'edit'" class="tab-content mb-8">
      <h3 class="text-3xl font-semibold text-gray-800 mb-6">Edit Profile Information</h3>
      <form @submit.prevent="saveChanges" class="space-y-6">
        <div>
          <label for="name" class="block text-lg text-gray-700">Full Name</label>
          <input
            type="text"
            v-model="userInput.name"
            id="name"
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="bio" class="block text-lg text-gray-700">Bio</label>
          <textarea
            v-model="userInput.bio"
            id="bio"
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div>
          <label for="avatar" class="block text-lg text-gray-700">Avatar URL</label>
          <input
            type="text"
            v-model="userInput.avatar"
            id="avatar"
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="flex justify-end">
          <button type="submit" class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const currentTab = ref('articles');

    const userInput = ref({
      name: 'John Doe',
      bio: 'A passionate writer and tech enthusiast.',
      avatar: 'https://via.placeholder.com/100',
    });

    const userData = ref({
      avatar: 'https://via.placeholder.com/100',
      name: 'John Doe',
      bio: 'A passionate writer and tech enthusiast.',
      articles: [
        {
          title: 'How to Build a Simple Web App',
          excerpt: 'A step-by-step guide to building your first web app.',
          createdAt: '2024-11-01',
        },
        {
          title: 'Understanding JavaScript Closures',
          excerpt: 'A deep dive into closures in JavaScript.',
          createdAt: '2024-10-15',
        },
        {
          title: 'CSS Grid Layout: A Beginner\'s Guide',
          excerpt: 'An introduction to using CSS Grid for layouts.',
          createdAt: '2024-09-30',
        },
      ],
    });

    const setTab = (tab) => {
      currentTab.value = tab;
    };

    const tabClass = (tab) =>
      computed(() =>
        [
          'tab py-3 px-6 cursor-pointer text-xl font-medium transition-colors duration-300',
          currentTab.value === tab
            ? 'text-blue-600 border-b-4 border-blue-600'
            : 'text-gray-700 border-b-4 border-transparent hover:text-blue-600 hover:border-blue-600',
        ].join(' ')
      ).value;

    const saveChanges = () => {
      userData.value.name = userInput.value.name;
      userData.value.bio = userInput.value.bio;
      userData.value.avatar = userInput.value.avatar;
      alert('Profile updated successfully!');
    };

    const formatDate = (date) => new Date(date).toLocaleDateString();

    return {
      currentTab,
      userInput,
      userData,
      setTab,
      tabClass,
      saveChanges,
      formatDate,
    };
  },
};
</script>

<style scoped>
.tab:hover {
  color: #3b82f6;
}
</style>
