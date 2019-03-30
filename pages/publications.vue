<template>
  <div>
    <div class="main-container">
      <h1>Featured Publication</h1>

      <div class="featured-publication">
        <div class="publication-images">
          <img v-for="image in publications.featured_pub.images" :src="image" :key="image">
        </div>
        <div class="publication-entry">
          <h2>{{ publications.featured_pub.title }}</h2>
          <p style="font-weight: bold">{{ publications.featured_pub.editors }} (Eds.)</p>
          <p>{{ publications.featured_pub.description }}</p>
          <p
            style="font-style: italic; margin: -10px 0 0 0 !important"
          >{{ publications.featured_pub.journal }}</p>
          <a :href="publications.featured_pub.url" class="journal-link">Publisher Page</a>
        </div>
      </div>

      <h1>Recent publications</h1>

      <input
        type="text"
        v-model="search"
        class="search"
        placeholder="Search by author, topic, journal.."
      >
      <table>
        <thead>
          <tr class="index">
            <th class="authors">
              <p>Authors</p>
            </th>
            <th class="name">
              <p>Title</p>
            </th>
            <th class="journal">
              <p>Journal</p>
            </th>
            <th class="link">
              <p>Link</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in filteredCustomers" :key="entry.title">
            <td colspan="1" class="author">{{ entry.author }}</td>
            <td colspan="1">{{ entry.topic }}</td>
            <td colspan="1" class="pubTitle">{{ entry.journal }}</td>
            <td colspan="0.2" class="link">
              <a :href="entry.url" target="_blank">
                <span class="url"></span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import publications from "~/content/publications/combined.js";

export default {
  layout: "about",
  pageHeader: publications.image,
  pageTitle: publications.title,
  bgPosition: "0 -210px",
  data() {
    return {
      publications,
      search: ""
    };
  },
  computed: {
    filteredCustomers: function() {
      var self = this;

      return this.publications.entries.filter(
        item =>
          item.topic.toLowerCase().includes(this.search) ||
          item.author.toLowerCase().includes(this.search) ||
          item.journal.toLowerCase().includes(this.search)
      );
      //return this.customers;
    }
  }
};
</script>

<style lang="sass" scoped>
.link
  width: 90px !important
  span.url
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 512 640'%3E%3Cpath fill='rgba(6, 102, 144, 1.0000)' d='M309 273a25 25 0 0 0-36 0 76 76 0 0 1-108 0l-90-90a76 76 0 0 1-22-54c0-20 8-40 22-54 30-30 78-30 108 0l55 55a25 25 0 0 0 36-36l-55-55A127 127 0 0 0 39 219l90 90a127 127 0 0 0 180 0c10-10 10-26 0-36z'/%3E%3Cpath fill='rgba(6, 102, 144, 1.0000)' d='M473 293l-90-90c-49-49-130-49-180 0a25 25 0 0 0 36 36c30-29 78-29 108 0l90 90c14 15 22 34 22 54s-8 40-22 54a78 78 0 0 1-108 0l-55-55a25 25 0 0 0-36 36l55 55a126 126 0 0 0 180 0 126 126 0 0 0 0-180z'/%3E%3C/svg%3E") no-repeat
    background-size: contain
    width: 24px
    height: 24px
    margin-left: 4px
    display: block
.featured-publication
  margin: 0 auto 30px
  display: inline-flex
  justify-content: space-between
  font-family: 'Open Sans'
  .publication-entry
    width: 58%
    h2
      color: black
      border-bottom: 1px solid #efefef
      display: inline-block
      padding: 0 0 10px
    p
      color: black
      padding: 10px 0
      font-size: 1.3em
    .journal-link
      border: 1px solid #016895
      border-radius: 10px
      padding: 10px
      display: inline-block
      margin: 5px 0 0 0
      color: #016895
      text-decoration: none





.publication-images
  width: 40%
  margin: 10px 0 0 0
  img
    width: 46%
    float: left
    border-radius: 10px
    box-shadow: 0 1px 3px rgba(0,0,0,0.4)
    &:first-child
      margin: 0 4% 0 0


.search
  margin: 0
  padding: 10px 10px
  font-family: 'Open Sans'
  font-size: 1.3em
  border-radius: 10px
  padding: 12px 15px
  border: 1px solid #efefef
  width: 50%
  margin-bottom: 10px
  transition: border .5s ease
  &:focus
    outline: none
    border: 1px solid #016895


.publications
  column-count: 1
  column-gap: .5em
  overflow: hidden
  margin: 20px 0 0 0
  width: 100%
  padding: 0
  display: inline-block
  color: black

table 
  border-collapse: collapse
  table-layout: fixed
  width: 100%
  tr.index
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,.04) 10%, rgba(0, 212, 255, 0) 80%) no-repeat

thead
  border-radius: 20px !important
  overflow: hidden
th
  text-align: left
  padding: 20px 0px 10px 15px
  color: rgba(0,0,0,0.8) !important
  font-weight: 400
  border-right: 1px solid white
  p
    font-family: 'Exo 2', sans-serif !important
    font-size: 1.1em
    color: rgba(6, 102, 144, 1.0000) !important
    font-weight: bold
  &.name
    padding-left: 20px 
tr
  text-align: left
  color: rgba(0,0,0,0.8) !important
  width: 100%
  &:hover
    cursor: pointer
    background: #fafafa
    .td
      background: #fafafa
td 
  overflow: hidden
  padding: 10px 10px 10px 17px !important
  width: 100%
  &.author 
    font-weight: bold !important
    p
      margin: 0px 0 0 4px
      font-weight: bold
      color: #12658b

.entry
  list-style: none
  break-inside: avoid
  width: 100%
  border-radius: 10px
  border: 1px solid #efefef
  background: #fafcfc
  display: inline-block
  break-inside: avoid !important
  margin: 0 0 2% 0
  padding: 0
  transition: all .85s ease
  height: auto
  h4
    width: 100%
    border-radius: 10px 10px 0 0
    margin: 0
    padding: 12px 3% 12px 1.5%
    font-size: 1.05em
    background: linear-gradient( to top, #fff, #f8fafa)
    border-bottom: 1px solid #EFEFEF
    color: #016895
    line-height: 23px
    font-family: "Exo 2", sans-serif
    font-weight: 200
  p
    font-size: 1em !important
    margin: 10px 15px 4px 15px !important
    font-family: 'Open Sans'
    font-weight: bold
    background: none
    line-height: 23px !important
    padding: 0
    font-weight: 600
  a
    display: inline-block
    font-family: 'Open Sans'
    width: 100%
    font-size: 1em
    overflow-wrap: break-word
    color: blue !important
    line-height: 21px !important
    padding: 2.4% 4% 2% 3.5% !important
    border-top: 1px solid #efefef
    border-radius: 0 0 10px 10px
    margin: 5px 0 0 0 !important

.publications-enter, .publications-leave-to
  opacity: 0
  transform: scale(0.5)

.publications-leave-active
  transform: scale(0.5)
  z-index: 0


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


h1
  font-size: 2.1em
  line-height: 46px !important
  font-family: 'Open Sans', sans-serif
  font-weight: 800
  color: black
  width: 97%
  float: none
  clear: both !important
  padding-bottom: 15px
  margin-bottom: 25px
  border-bottom: 1px solid #DDD

@media all and (max-width: 575px)
  th
    display: none
  td 
    overflow: visible
    padding: 10px 10px 10px 10px !important
    width: 100%
    display: block
    &.author 
      font-weight: bold !important
      p
        margin: 0px 0 0 4px
        font-weight: bold
        color: #12658b
  .main-container
    margin: 20px auto !important
  .featured-publication
    margin: 0 auto 30px
    display: inline-flex
    justify-content: space-between
    font-family: 'Open Sans'
    .publication-entry
      width: 100%
      h2
        color: black
        border-bottom: 1px solid #efefef
        display: inline-block
        padding: 0 0 10px
      p
        color: black
        padding: 10px 0
        font-size: 1.3em
      .journal-link
        border: 1px solid #016895
        border-radius: 10px
        padding: 10px
        display: inline-block
        margin: 5px 0 0 0
        color: #016895
        text-decoration: none
  .publication-images
    width: 40%
    display: none
    margin: 10px 0 0 0
    img
      width: 46%
      float: left
      border-radius: 10px
      box-shadow: 0 1px 3px rgba(0,0,0,0.4)
      &:first-child
        margin: 0 4% 0 0
    .highlight-images
      width: 100%
      margin: 0
      img
        width: 45%
        margin-right: 5%
  .search
    width: 100%
  .publications
    column-count: 1
</style>