<template>
<div>
  
  <v-flex flexWrap="wrap" maxWidth="94%" mx="auto">
  <v-box :width="[1, 2.5/4]" :fontSize="[3, 2]">
      <div class="post" v-for="post in posts" :key="post.date">
        
          <div v-if="post.image">
            <nuxt-link :to="post._path"><h3><span class="post-date"> {{ post.date }} </span> | <span class="post-title"> {{ post.title }} </span></h3></nuxt-link>
            <div class='featured-image' :style="{ backgroundImage: 'url(' + post.image + ')' }"></div>
          </div>
          <div v-else>
          <nuxt-link :to="post._path"><h3><span class="post-date"> {{ post.date }} </span> | <span class="post-title"> {{ post.title }} </span></h3> </nuxt-link>
         </div>

        <p>{{ post.body }}</p>

      </div>
  </v-box>
  <v-box :width="[1, 1.5/4]" :pl="[0, 4]" :fontSize="[3, 2]">
         <SidebarNews :result="title"/>
  </v-box>
</v-flex>
  
   

 </div>
</template>

<script>
import SidebarNews from "~/components/SidebarNews.vue";

export default {
  layout: "about",
  components: {
    SidebarNews
  },
  pageHeader: "news-3.jpg",
  pageTitle: "News",
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context("~/content/news/posts/", false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/news/${key.replace(".json", "").replace("./", "")}`
    }));
    return {
      posts,
      title: "About",
      body: "Test",
      thumbnail: "",
      date: ""
    };
  }
};
</script>

<style lang="sass" scoped>

@import '~/assets/sass/news.sass'

</style>