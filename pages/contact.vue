<template>
  <div>
    <div class="main-container">
      <div class="posts">
        <div class="contact">
          <h1>Send Us a Message</h1>
          <div class="form">
            <form name="contact" method="POST" data-netlify="true">
              <p class="hidden">
                <label>
                  Don’t fill this out:
                  <input name="bot-field">
                </label>
              </p>
              <input type="text" placeholder="Your name" name="name">

              <input type="email" placeholder="Your email" name="email">

              <textarea name="message" placeholder="Your message"></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="section">
          <h1>Office Address</h1>
          <p>
            Unter den Linden 21
            <br>10117 Berlin, Germany
          </p>
        </div>

        <div class="section">
          <h1>Tel. &amp; Fax</h1>
          <p>
            <b>Tel.</b> +49 (0)30 2391-0916
            <br>
            <b>Fax</b> +49 (0)30 2092-4200
          </p>
        </div>
      </div>
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
  pageTitle: "Contact",
  pageHeader: news.image,
  bgPosition: "0 -100px",
  data() {
    return {
      news,
      pageTitle: "Contact",
      thumbnail: "",
      date: "",
      success: false
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
  methods: {
    submit() {
      this.success = true;
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
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

.check-wrap
  width: 70px
  height: 70px
  float: left
  border-radius: 50%
  border: 1px solid #066690
  position: relative
  overflow: hidden
  animation: wrap 0.3s ease-in-out forwards
  animation-delay: .3s
  transform: scale(0)
  &::before, &::after
    content: ''
    position: absolute
    background-color: white
    width: 0
    height: 5px
    transform-origin: left
    animation-duration: 0.3s
    animation-timing-function: ease-in-out
    animation-fill-mode: forwards
  &::before
    top: 32px
    left: 21px
    transform: rotate(45deg)
    animation-name: left
    animation-delay: 0.8s
  &::after
    top: 42px
    left: 29px
    transform: rotate(-45deg)
    animation-name: right
    animation-delay: 1.1s

@keyframes wrap
  0%
    background-color: transparent
    transform: scale(0)

  100%
    background-color: #066690
    transform: scale(0.5)


@keyframes left
  0%
    width: 0

  100%
    width: 15px


@keyframes right
  0%
    width: 0

  100%
    width: 30px
    
.message
  margin: 0 auto
  width: 70%
  display: flex
  position: relative
  background: #fafafa
  border-radius: 10px !important
  border-top: #efefef 1px solid
  color: black
  padding: 20px
  justify-content: center
  align-items: center
  text-align: center
  p
    float: left
    color: #066690
    font-size: 1.4em
    font-family: 'Exo 2'
.hidden
  display: none

.gdpr 
  border: 1px solid #d5d5d580
  background: #fafafa
  color: #016895 !important
  font-size: 0.98em !important
  padding: 10px 20px
  display: inline-block
  width: auto
  margin: 0px 20px 20px !important
  border-radius: 10px


.social 
  display: inline-block
  margin: 0px 18px 10px

.social a 
  width: 50px
  height: 50px
  display: inline-block
  float: left
  background-color: #016895
  border-radius: 100%

a.twitter 
  background: url("data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fab' data-icon='twitter' class='svg-inline--fa fa-twitter fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='#fff' d='M459 152l1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z'/%3E%3C/svg%3E") center no-repeat #016895
  background-size: 27px
  margin-right: 10px

a.rss 
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 32 40'%3E%3Cpath fill='#fff' d='M6 22a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM5 2a3 3 0 1 0 0 6c10 0 19 9 19 19a3 3 0 1 0 6 0C30 13 19 2 5 2zm0 10a3 3 0 1 0 0 6c5 0 9 4 9 9a3 3 0 1 0 6 0c0-8-7-15-15-15z'/%3E%3C/svg%3E") center 11px no-repeat #016895
  background-size: 27px
  margin-right: 10px

form 
  width: 90%
  margin: 10px auto 20px

input,
textarea 
  width: 100%
  display: inline-block
  border-radius: 5px
  border: 1px solid #efefef
  font-family: "Open Sans"
  font-size: 1.1em
  padding: 15px 10px 15px 15px
  margin: 5px auto !important
  transition: border 1s ease

input:focus,
textarea:focus 
  outline: none !important
  border: 1px solid #016895

.form-button 
  color: #016895
  background: #fafafa
  border: 1px solid #d5d5d580
  font-size: 1.15em
  padding: 12px 0
  margin: 10px auto 0 !important

.sidebar 
  width: 35% !important
  float: left
  height: 100%
  h1 
    color: #016895
    background: #fafafa
    display: inline-block
    font-family: "Open Sans"
    width: 100%
    font-size: 1.3em
    margin: 0 0 15px 0
    padding: 15px 20px
    border-bottom: 1px solid #efefef
    border-radius: 10px 10px 0 0
  p
    color: black
    font-family: "Open Sans"
    width: 90%
    font-size: 1.2em
    font-weight: 300
    letter-spacing: 0px
    margin: 0 auto
    line-height: 30px
  .section 
    margin: 0px auto 20px
    padding: 0px 0 20px
    border: 1px solid #efefef
    border-radius: 10px
.contact
  margin: 0px auto 20px
  padding: 0px 0 20px
  border: 1px solid #efefef
  border-radius: 10px
  h1 
    color: #016895
    background: #fafafa
    display: inline-block
    font-family: "Open Sans"
    width: 100%
    font-size: 1.3em
    margin: 0 0 15px 0
    padding: 15px 20px
    border-bottom: 1px solid #efefef
    border-radius: 10px 10px 0 0
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
  /deep/ .sidebar
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