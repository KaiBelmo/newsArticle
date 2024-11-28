<template>
  <Home>
    <Banner />
    <TopArticleCard
      imageSrc="https://via.placeholder.com/500x300"
      title="Where To Watch John Wick: Chapter 4"
      description="There's been no official announcement regarding John Wick: Chapter 4's streaming release. However, given it's a Lionsgate film, John Wick: Chapter 4 will eventually be released on Starz."
      source="Netflix"
      timeAgo="12 minutes ago"
      category="Movies"
      readTime="4 min read"
    />
    <LatestNews :articles="articlesData" />
  </Home>
  <Footer />
</template>

<script setup>
import Home from "../components/Home.vue";
import Banner from "../components/Banner.vue";
import TopArticleCard from "../components/TopArticleCard.vue";
import LatestNews from '../components/LatestNews.vue';
import Footer from "../components/Footer.vue";

const articlesData = [
  {
    image: "https://via.placeholder.com/500x300",
    publisher: "Netflix",
    time: "12 minutes ago",
    title: "Where To Watch John Wick: Chapter 4",
    preview:
      "There's been no official announcement regarding John Wick: Chapter 4's streaming release. However, given it's a Lionsgate film, John Wick: Chapter 4 will eventually be released on Starz.",
    category: "Movies",
    readTime: "4",
  },
  {
    image: "https://via.placeholder.com/500x300",
    publisher: "Hulu",
    time: "30 minutes ago",
    title: "Top 10 Shows to Watch This Winter",
    preview:
      "Hulu has released its winter lineup of must-watch shows. From thrillers to romantic comedies, here are the top picks for cozy evenings.",
    category: "TV Shows",
    readTime: "5",
  },
  {
    image: "https://via.placeholder.com/500x300",
    publisher: "Disney+",
    time: "1 hour ago",
    title: "Marvel's Next Big Movie Announced",
    preview:
      "Marvel Studios has revealed its plans for the next big blockbuster. Here's everything we know so far about the release and its storyline.",
    category: "Entertainment",
    readTime: "6",
  },
  {
    image: "https://via.placeholder.com/500x300",
    publisher: "Amazon Prime",
    time: "2 hours ago",
    title: "The Best Documentaries on Amazon Prime",
    preview:
      "From gripping true crime to inspiring nature documentaries, here's our list of the best documentaries you can stream right now on Amazon Prime.",
    category: "Documentaries",
    readTime: "7",
  },
];
</script>
