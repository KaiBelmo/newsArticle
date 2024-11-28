<template>
    <div class="article-page">
      <div class="article-container">
        <!-- Article Title -->
        <h1 class="article-title">{{ article.title }}</h1>
  
        <!-- Article Content -->
        <div class="article-content">
          <p>{{ article.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArticlePage",
    data() {
      return {
        article: {
          title: "How to Build a Simple Web App",
          content: "This is the full content of the article. You can write your detailed content here. Include everything you'd like the readers to know about the article's subject.",
        },
      };
    },
    mounted() {
      // If you are using Vue Router, fetch the article by its ID or slug when the component mounts.
      // You can access route params like this: this.$route.params.id
      // In this example, we will hardcode the article for demonstration purposes.
    },
  };
  </script>
  
  <style scoped>
  .article-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7fafc;
  }
  
  .article-container {
    width: 80%;
    max-width: 800px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .article-title {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #2d3748;
  }
  
  .article-content {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #4a5568;
    text-align: center;
  }
  </style>
  