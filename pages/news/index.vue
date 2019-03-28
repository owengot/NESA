<template>
  <div>
    <div class="main-container">
      <div class="posts">
        <div class="post" v-for="(post, index) in posts.documents" :key="index">
          <div v-if="post.fields.header.stringValue">
            <div
              class="featured-image"
              :style="{ backgroundImage: 'url(' + post.fields.header.stringValue + '/-/resize/900x/-/format/jpeg/-/quality/normal/-/progressive/yes/-/max_icc_size/0/)' }"
            >
              <div class="title">
                <div class="title">
                  <div class="post-date">
                    <h3>{{ post.createTime | formatDateString }}</h3>
                  </div>
                  <div class="post-title">
                    <h3>{{ post.fields.title.stringValue }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="title">
              <div class="post-date">
                <h3>{{ post.createTime | formatDateString }}</h3>
              </div>
              <div class="post-title">
                <h3>{{ post.fields.title.stringValue }}</h3>
              </div>
            </div>
          </div>

          <div class="post-content" :inner-html.prop="post.fields.content.stringValue | trim"></div>
        </div>
      </div>
      <SidebarNews :result="title"/>
    </div>
  </div>
</template>

<script>
import SidebarNews from "~/components/SidebarNews.vue";
import news from "~/content/pages/news.json";
import axios from "axios";

export default {
  layout: "about",
  components: {
    SidebarNews
  },
  pageTitle: news.title,
  pageHeader: news.image,
  bgPosition: "0 -100px",
  data() {
    return {
      news,
      pageTitle: "Latest News",
      thumbnail: "",
      date: ""
    };
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      "https://firestore.googleapis.com/v1/projects/nesa-a1443/databases/(default)/documents/posts"
    );
    return { posts };
  },
  filters: {
    trim: function(string) {
      let newString = string.replace(/<p><br><\/p>/g, "");

      return newString;
    }
  },
  mounted: function() {
    var imgs = document.querySelectorAll("img");
    imgs.forEach(function(img) {
      var oldVal = img.getAttribute("src");
      var crop =
        "/-/scale_crop/170x170/center/-/format/jpeg/-/quality/normal/-/progressive/yes/-/max_icc_size/0/";
      var preview =
        "/-/scale_crop/500x500/center/-/format/jpeg/-/quality/normal/-/progressive/yes/-/max_icc_size/0/";

      function setAttributes(el, attrs) {
        for (var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }

      setAttributes(img, {
        src: oldVal + crop,
        "data-zoom-src": oldVal + preview
      });
    });
  }
};
</script>

<style lang="sass" scoped>
.post-content 
  padding: 0px 0
  /deep/ p
    margin: 20px 50px 20px
    color: black
    font-size: 1.15em
    line-height: 30px

.post-content /deep/ p img
  float: left
  border-radius: 10px
  width: 18% !important
  height: auto !important
  margin: 10px 2% 10px 0


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
  width: 60%
  float: left
  .post
    width: 100%
    margin: 0 0 4% 0
    padding: 0 0 3% 0

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
  background-position: center 40% !important
  overflow: hidden
  position: relative
  .title
    width: 100%
    position: absolute
    height: 140px
    background: none


div /deep/ .sidebar
  width: 35%
  float: right

.testpost
  border: 1px solid black
  display: block
  width: 100%
  overflow-wrap: break-word !important
  &:nth-child(2)
    border: 1px solid red
  h1
    color: black !important
  p
    display: block
    color: black
    overflow-wrap: break-word !important


.container 
  width: 93%
  margin: 20px auto


@media all and (max-width: 575px)
  .container
    margin: 0 auto !important
  /deep/ .container
    width: 100% !important
  .posts
    width: 100%
    margin: 0 auto !important
    display: inline-block
    float: none
    /deep/ .post
      width: 100%
      margin: 2% 0 6% 0 !important
      padding: 0 0 0% 0 !important
      border: none !important
      .post-content
        /deep/ p
          margin: 20px 30px 20px !important
          img
            width: 45% !important
            height: auto !important
            margin-right: 5%
            &:nth-child(2n)
              margin-right: 0% !important
      .featured-image
        border-radius: 0
        .title
          width: 100%
          position: absolute
          height: auto
          background: linear-gradient(0deg, white -5%, rgba(255, 255, 255, 0) 70%)
          bottom: 0px
          border: none !important
          margin: 0
          padding: 120px 0 0 0
          h3
            margin: 0
            -webkit-box-decoration-break: clone !important
            box-decoration-break: clone !important
            padding: 10px 15px 6px
            font-size: 1.3em !important
            margin: 0 20px 0 20px !important
          .post-title
            border: none !important
  .main-container
    width: 100%
    margin: 0px auto 20px !important
    display: block 

  div /deep/ .sidebar
    background: #016895
    width: 100%
    padding: 0 20px
    .section
      margin: 30px 0 20px 0
    h1
      background: none
      border: none
      border-bottom: 1px solid white
      color: white
    p
      color: white
    input
      background: none
      color: white
    ::placeholder
      color: white
    .form-button
      color: #016895
      background: rgba(255,255,255,0.7)
    .gdpr
      margin: 0px 15px 20px !important
    .contact
      margin: 0px 15px 20px !important
      textarea
        background: none
        color: white


</style>