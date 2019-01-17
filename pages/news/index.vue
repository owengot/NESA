<template>
  <div>

    <div class="main-container">

      <Waterfall
        :percent="[1, 1]"
        :gutterWidth="20"
        :gutterHeight="20"
        class="posts"
      >

        <WaterfallItem
          v-for="post in posts"
          :key="post.date"
        >

          <div class="post">

            <div v-if="post.image">

              <div
                class='featured-image'
                :style="{ backgroundImage: 'url(' + post.image + ')' }"
              >
                <div class="title">
                  <nuxt-link :to="post._path">
                    <div class="title">
                      <div class="post-date">
                        <h3> {{ post.date }} </h3>
                      </div>
                      <div class="post-title">
                        <h3> {{ post.title }} </h3>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div v-else>
              <nuxt-link :to="post._path">

                <div class="title">
                  <div class="post-date">
                    <h3> {{ post.date }} </h3>
                  </div>
                  <div class="post-title">
                    <h3> {{ post.title }} </h3>
                  </div>
                </div>

              </nuxt-link>
            </div>

            <p>{{ post.body.substr(0, 300) + '..' }}</p>

          </div>

        </WaterfallItem>

      </Waterfall>

      <SidebarNews :result="title" />
    </div>

  </div>
</template>

<script>
import SidebarNews from "~/components/SidebarNews.vue";
import { Waterfall, WaterfallItem } from "vue2-waterfall";

export default {
  layout: "about",
  components: {
    SidebarNews,
    Waterfall,
    WaterfallItem
  },
  pageHeader: "news-3.jpg",
  computed: {},
  pageTitle: "News",
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context("~/content/news/posts/", false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/news/${key.replace(".json", "").replace("./", "")}`
    }));
    posts.reverse();
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

@keyframes opacity
  100%
    opacity: 1
  
@keyframes acrossIn
  0%
    opacity: 1
  100%
    opacity: 0

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

.posts
  width: 70%
  float: left
  .post
    width: 94%
    margin: 0 4% 6% 0

.page-leave-active 
  animation: opacity .7s ease-out
  .post
    animation: acrossIn .47s ease-out forwards !important
    animation-delay: 0.3s !important
    &:nth-child(2n)
      animation-delay: 0s !important

.page-enter .post
  opacity: 0 !important

.page-enter-active 
  animation: opacity 1.7s ease-out
  .post
    opacity: 0
    animation: fadeIn 1.47s forwards !important
    animation-delay: 0.3s !important
    &:nth-child(2)
      animation-delay: 0s !important



.post-move 
  transition: all 600ms ease-in-out 50ms

.post-enter-active 
  transition: all 400ms ease-out

.post-leave-active 
  transition: all 200ms ease-in
  position: absolute
  z-index: 0

.post-enter
  opacity: 0

.post-leave-to 
  opacity: 0

.main-container
  width: 90%
  margin: 50px auto !important
  display: block 


.featured-image 
  height: 230px
  background-size: cover
  border-radius: 10px 10px 0 0
  background-position: 0 30% 
  overflow: hidden
  position: relative
  .title
    width: 100%
    position: absolute
    z-index: 9


.sidebar
  width: 29%
  float: right


</style>