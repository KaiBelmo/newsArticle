<template>
  <section class="p-8">
    <div v-if="loading" class="text-center">
      <p>Loading user profile...</p>
    </div>

    <div v-else-if="error" class="text-center">
      <h1 class="text-2xl font-bold text-red-500">Error Loading Profile</h1>
      <p>{{ error }}</p>
    </div>

    <div v-else>
      <UserProfileCard
        :name="user?.email || 'No Email Available'"
        :bio="user?.bio || 'No bio available.'"
        :avatar="user?.avatar || 'https://via.placeholder.com/100'"
      />
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import UserProfileCard from "../components/UserProfileCard.vue"; // Import UserProfileCard component

// Reactive state
const user = ref(null);
const loading = ref(true);
const error = ref(null);

// Get the email parameter from the route
const route = useRoute();
const email = route.params.email;

// Fetch user data
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/user/email/${email}`);
    console.log("API response:", response.data); // Log API response
    console.log("User data before assignment:", user.value);
    user.value = response.data.user; // Assign data to user
    console.log("User data after assignment:", user.value); // Log assigned user data
  } catch (err) {
    console.error("Error fetching user data:", err);
    error.value = "Failed to load user profile. Please try again.";
  } finally {
    loading.value = false;
  }
});

</script>
