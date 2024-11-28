<!-- src/views/Home.vue -->
<template>
  <div class="container mx-auto">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue"
</script>

