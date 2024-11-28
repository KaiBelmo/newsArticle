<template>
  <section class="bg-zinc-900 h-full">
    <UserProfileCard
      :name="user.name"
      :bio="user.bio"
      :avatar="user.avatar"
      :articles="user.articles"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import UserProfileCard from "../components/UserProfileCard.vue"; // Import the card component

// Example user data
const user = ref({
  name: "John Doe",
  bio: "A passionate writer and tech enthusiast.",
  avatar: "https://via.placeholder.com/100",
  articles: [
    {
      title: "How to Build a Simple Web App",
      excerpt: "A step-by-step guide to building your first web app.",
      createdAt: "2024-11-01",
    },
    {
      title: "Understanding JavaScript Closures",
      excerpt: "A deep dive into closures in JavaScript.",
      createdAt: "2024-10-15",
    },
    {
      title: "CSS Grid Layout: A Beginner's Guide",
      excerpt: "An introduction to using CSS Grid for layouts.",
      createdAt: "2024-09-30",
    },
  ],
});
</script>
