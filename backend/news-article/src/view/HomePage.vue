<template>
  <Home>
    <Banner />
    <TopArticleCard
      :imageSrc="article[0].imageSrc"
      :title="article[0].title"
      :description="article[0].body"
      :source="article[0].source"
      :category="article[0].category"
      :readTime="String(calculateReadTime(article[0].body))"
      v-if="article != null"
    />

    <!-- <LatestNews :article="article" /> -->
    <LatestNews />
  </Home>
  <Footer />
</template>

<script setup>
import Home from "../components/Home.vue";
import Banner from "../components/Banner.vue";
import TopArticleCard from "../components/TopArticleCard.vue";
import LatestNews from "../components/LatestNews.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// localhost:8080/api/latestarticles

const article = ref(null);

onMounted(async () => {
  try {
    console.log(23123);
    const response = await axios.get(
      "http://localhost:8080/api/latestarticles"
    );
    console.log(response);
    if (response.data.articles) {
      article.value = response.data.articles;
      console.log(article.value)
    }
  } catch (err) {
    console.error(err);
    article.value = null;
  }
});

function calculateReadTime(text) {
  console.log(text);
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length; // Split text into words by whitespace
  const readTimeMinutes = Math.ceil(words / wordsPerMinute); // Round up to nearest minute
  return readTimeMinutes;
}

// const articlesData = [
//   {
//     image: "https://via.placeholder.com/500x300",
//     publisher: "Netflix",
//     time: "12 minutes ago",
//     title: "Where To Watch John Wick: Chapter 4",
//     preview:
//       "There's been no official announcement regarding John Wick: Chapter 4's streaming release. However, given it's a Lionsgate film, John Wick: Chapter 4 will eventually be released on Starz.",
//     category: "Movies",
//     readTime: "4",
//   },
//   {
//     image: "https://via.placeholder.com/500x300",
//     publisher: "Hulu",
//     time: "30 minutes ago",
//     title: "Top 10 Shows to Watch This Winter",
//     preview:
//       "Hulu has released its winter lineup of must-watch shows. From thrillers to romantic comedies, here are the top picks for cozy evenings.",
//     category: "TV Shows",
//     readTime: "5",
//   },
//   {
//     image: "https://via.placeholder.com/500x300",
//     publisher: "Disney+",
//     time: "1 hour ago",
//     title: "Marvel's Next Big Movie Announced",
//     preview:
//       "Marvel Studios has revealed its plans for the next big blockbuster. Here's everything we know so far about the release and its storyline.",
//     category: "Entertainment",
//     readTime: "6",
//   },
//   {
//     image: "https://via.placeholder.com/500x300",
//     publisher: "Amazon Prime",
//     time: "2 hours ago",
//     title: "The Best Documentaries on Amazon Prime",
//     preview:
//       "From gripping true crime to inspiring nature documentaries, here's our list of the best documentaries you can stream right now on Amazon Prime.",
//     category: "Documentaries",
//     readTime: "7",
//   },
// ];
</script>
