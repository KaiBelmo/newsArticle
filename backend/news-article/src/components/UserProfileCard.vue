<template>
  <div class="bg-white shadow-lg rounded-xl w-[40%] mx-auto min-h-[70%] p-8 flex flex-col">
    <!-- Profile Header -->
    <div class="flex flex-col items-center space-y-4 mb-10">
      <img
        :src="avatar"
        alt="User Avatar"
        class="w-24 h-24 rounded-full border-4 border-blue-500 shadow-xl object-cover"
      />
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-gray-800">{{ name }}</h2>
        <p class="text-sm text-gray-600 mt-2">{{ bio }}</p>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <div class="tabs flex justify-center mb-6 border-b-2 border-gray-300">
      <div @click="setTab('articles')" :class="tabClass('articles')">
        Authored Articles
      </div>
      <div @click="setTab('bio')" :class="tabClass('bio')">Bio</div>
      <div @click="setTab('edit')" :class="tabClass('edit')">Edit Profile</div>
    </div>

    <!-- Tab Content with fixed height -->
    <div class="tab-content flex-1 overflow-y-auto">
      <div v-show="currentTab === 'articles'" class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">
          Articles by {{ name }}
        </h3>
        <ul class="space-y-4">
          <li
            v-for="article in articles"
            :key="article.title"
            class="border-b border-gray-200 pb-4"
          >
            <h4 class="text-xl font-semibold text-gray-800">
              {{ article.title }}
            </h4>
            <p class="text-gray-600 mt-2">{{ article.excerpt }}</p>
            <small class="text-gray-500"
              >Published: {{ formatDate(article.createdAt) }}</small
            >
          </li>
        </ul>
      </div>

      <div v-show="currentTab === 'bio'" class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">
          {{ name }}'s Bio
        </h3>
        <p class="text-gray-600">{{ bio }}</p>
      </div>

      <div v-show="currentTab === 'edit'" class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">
          Edit Profile Information
        </h3>
        <form @submit.prevent="saveChanges" class="space-y-6">
          <div>
            <label for="editName" class="block text-sm font-semibold text-gray-700"
              >Full Name</label
            >
            <input
              type="text"
              v-model="editableData.name"
              id="editName"
              class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div>
            <label for="editBio" class="block text-sm font-semibold text-gray-700">Bio</label>
            <textarea
              v-model="editableData.bio"
              id="editBio"
              class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            ></textarea>
          </div>
          <div>
            <label for="editAvatar" class="block text-sm font-semibold text-gray-700"
              >Avatar URL</label
            >
            <input
              type="text"
              v-model="editableData.avatar"
              id="editAvatar"
              class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Destructure props inside setup function
const props = defineProps({
  name: String,
  bio: String,
  avatar: String,
  articles: Array,
});

const currentTab = ref("articles");

const editableData = ref({
  name: props.name,
  bio: props.bio,
  avatar: props.avatar,
});

const setTab = (tab) => {
  currentTab.value = tab;
};

const tabClass = (tab) =>
  computed(() =>
    [
      "tab py-3 px-6 cursor-pointer text-lg font-medium transition-all duration-300",
      currentTab.value === tab
        ? "text-blue-600 border-b-4 border-blue-600"
        : "text-gray-700 border-b-4 border-transparent hover:text-blue-600 hover:border-blue-600",
    ].join(" ")
  ).value;

const saveChanges = () => {
  alert(`Updated Profile:\nName: ${editableData.value.name}\nBio: ${editableData.value.bio}`);
};

const formatDate = (date) => new Date(date).toLocaleDateString();
</script>

<style scoped>
.tab:hover {
  color: #3b82f6;
}

input,
textarea {
  transition: all 0.2s ease-in-out;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
