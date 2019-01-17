<template>
  <div>

    <div class="main-container">

      <div class="posts">

        <article>
          <div
            class='featured-image'
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >

            <div class="title">
              <div class="post-date">
                <h3> {{ date }} </h3>
              </div>
              <div class="post-title">
                <h3> {{ title }} </h3>
              </div>
            </div>
          </div>

          <p>
            <vue-markdown>{{ body }}</vue-markdown>
          </p>

          <div v-if="gallery != ''">
            <Gallery :project="gallery" />
          </div>

          <div class="footer">Posted on <time :datetime="date">{{ date }}</time></div>

        </article>

      </div>

      <SidebarNews :result="title" />
    </div>

  </div>
</template>

<script>
import SidebarNews from "~/components/SidebarNews.vue";
import Gallery from "~/components/Gallery.vue";
import JQuery from "jquery";
let $ = JQuery;

export default {
  layout: "about",
  pageHeader: "news-3.jpg",
  pageTitle: "News",
  components: {
    SidebarNews,
    Gallery
  },
  data() {
    return {
      title: "",
      body: "",
      thumbnail: "",
      date: ""
    };
  },
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import("~/content/news/posts/" + params.slug + ".json");
    return post;
  }
};
</script>

<style lang="sass" scoped>
div /deep/ .gallery 
  margin: 10px 30px
  display: inline-block
  height: auto
  a
    width: 23% !important
    margin: 0 2% 2% 0 !important
    height: 140px
    &:nth-child(4n)
      margin: 0 0 2% 0 !important
    img
      height: 140px

@import '~/assets/sass/news.sass'

@keyframes acrossIn
  0%
    transform: translate3d(0, 3%, 0)
    opacity: 0

  100%
    transform: translate3d(0, 0, 0)
    opacity: 1

@keyframes across
  0%
    transform: translate3d(-40%, 0, 0)
    opacity: 0

  100%
    transform: translate3d(0, 0, 0)
    opacity: 1

.main-container
  width: 90%
  margin: 50px auto !important
  display: block 

.posts
  width: 70%
  float: left
  .post
    float: left
    width: 47%
    display: block
    &:first-child
      margin-right: 3%


.sidebar
  width: 29%
  float: right



article
  margin: 0px auto
  border: 1px solid #efefef
  border-radius: 20px
  width: 93%
  display: block
  color: black !important
  opacity: 0
  animation: acrossIn 1s forwards
  h1
    font-size: 2em
    color: #016895
    display: block
    padding: 0 0 10px
    margin: 0 0 20px 0
    border-bottom: 1px solid #016895
  /deep/ p
    margin: 0 0 20px 0 !important



h3
  color: black
  font-family: "Open Sans"
  border-bottom: 1px solid #efefef
  letter-spacing: 0px !important
  font-size: 1.7em
  padding: 12px 15px
  font-weight: 100
  text-align: left
.post-date
  opacity: 0
  margin: 0 0 2px 0 !important
  animation: across 1.1s forwards
  animation-delay: .2s
  h3
    background: rgba(255,255,255,0.95) !important
    color: #016895
.post-title
  opacity: 0
  animation: across 1s forwards 
  animation-delay: .4s
  h3
    background: #016895 !important
    padding: 11px 15px 10px
    color: white
    font-weight: 400
    font-size: 1.4em
p
  color: black
  font-family: 'Open Sans'
  padding: 25px 30px 0px
  font-size: 1.35em
  color: black
  line-height: 37px

.footer
  width: 100%
  display: inline-block
  border-top: 1px solid #efefef
  padding: 20px

.featured-image 
  height: 230px
  background-size: cover
  border-radius: 10px 10px 0 0
  background-position: 0 30% 
  overflow: hidden
  position: relative
  .post-title
    h3
      border: none !important
  .post-date
    h3
      background: none !important
      box-shadow: none !important
      border: none !important
      padding: 0 0 0 5px
  &:after 
    content: ''
    width: 100%
    height: 100%
    position: absolute
    top: 0
    background: rgba(255,255,255,0.8)
  .title
    width: 100%
    position: absolute
    bottom: 30px
    left: 25px
    z-index: 9
    h3 
      line-height: 58px
      display: inline



h1
  color: #016895
  
</style>
