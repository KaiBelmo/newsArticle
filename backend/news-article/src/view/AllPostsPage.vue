<!-- a page that shows all the posts in the database and has the same components as the homepage , it uses api/posts to fetch all the articles and put them in the cards using NewsCard -->

<template>
    <div class="container mx-auto py-10">
        <h1 class="text-4xl font-bold text-center mb-10">All Posts</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard v-for="post in posts" :key="post._id" :image="post.image" :publisher="post.publisher" :time="post.time" :title="post.title" :preview="post.preview" :category="post.category" :readTime="post.readTime" />
        </div>
    </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'
import axios from 'axios'

export default {
    components: { NewsCard },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        axios.get('localhost:8080/api/posts')
        .then(response => {
            this.posts = response.data
        })
        .catch(error => console.log(error))
    }
}
</script>
