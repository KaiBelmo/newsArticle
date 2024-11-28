<template>
  <div class="user-profile-card">
    <!-- User Info Section -->
    <div class="user-info">
      <img :src="avatar" alt="User Avatar" class="avatar" />
      <h1>{{ name || "No Name Available" }}</h1>
    </div>

    <!-- Tabs Section -->
    <div class="tabs">
      <button 
        @click="activeTab = 'articles'" 
        :class="{ active: activeTab === 'articles' }" 
        :aria-selected="activeTab === 'articles'">
        Articles
      </button>
      <button 
        @click="activeTab = 'bio'" 
        :class="{ active: activeTab === 'bio' }" 
        :aria-selected="activeTab === 'bio'">
        Bio
      </button>
      <button 
        @click="activeTab = 'edit'" 
        :class="{ active: activeTab === 'edit' }" 
        :aria-selected="activeTab === 'edit'">
        Edit Info
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Articles Tab -->
      <div v-if="activeTab === 'articles'">
        <h2>Articles</h2>
        <p v-if="!articles || !articles.length">No articles available.</p>
        <ul v-else>
          <li v-for="(article, index) in articles" :key="index">{{ article.title }}</li>
        </ul>
      </div>

      <!-- Bio Tab -->
      <div v-if="activeTab === 'bio'">
        <h2>Bio</h2>
        <p>{{ bio || "No bio available." }}</p>
      </div>

      <!-- Edit Info Tab -->
      <div v-if="activeTab === 'edit'">
        <h2>Edit Info</h2>
        <form @submit.prevent="saveChanges">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="editForm.email" placeholder="Enter your email" required />
          </div>

          <div class="form-group">
            <label for="bio">Bio</label>
            <textarea id="bio" v-model="editForm.bio" placeholder="Enter your bio"></textarea>
          </div>

          <div class="form-group">
            <label for="avatar">Avatar URL</label>
            <input type="url" id="avatar" v-model="editForm.avatar" placeholder="Enter avatar URL (link)" required />
          </div>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props received from the parent, with default values and types
const props = defineProps({
  name: {
    type: String,
    default: ""
  },
  bio: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  articles: {
    type: Array,
    default: () => []
  },
});

// Reactive state for the active tab
const activeTab = ref("articles");

// Edit form state (for user input)
const editForm = ref({
  email: '',
  bio: '',
  avatar: '',
});

// Method to save changes (you can implement API calls here)
const saveChanges = () => {
  // Log the updated data to the console for now (you can replace this with actual saving logic)
  console.log("Updated Info:", editForm.value);
  // You can emit the data to the parent or store it in a database/API
};
</script>

<style scoped>
.user-profile-card {
  border: 3px solid #db2c2c;
  border-radius: 20px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.user-profile-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 0 4px #333;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
}

.tabs button {
  padding: 12px 24px;
  border: 1px solid #333;
  background: #fff;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.tabs button:hover {
  background: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.tabs button.active {
  background: #DC2626;
  color: #fff;
  border-color: #DC2626;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.tab-content {
  margin-top: 16px;
}

.tab-content h2 {
  font-size: 24px;
  margin-bottom: 16px;
}

.tab-content p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
}

.tab-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tab-content li {
  margin-bottom: 8px;
}

.tab-content li:before {
  content: "•";
  margin-right: 8px;
  color: #007bff;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  font-weight: bold;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}

button[type="submit"] {
  padding: 12px 24px;
  border: none;
  background-color: #DC2626;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #b91c1c;
}

@media (max-width: 768px) {
  .user-profile-card {
    padding: 16px;
  }
  .tabs {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
