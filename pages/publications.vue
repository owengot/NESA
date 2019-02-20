<template>
  <div>

    <div class="main-container">
    
<h1>Featured Publication</h1>

<div class="featured-publication">
<div class="publication-images">
<img v-for="image in publications.featured_pub.images" :src="image" :key='image' />
</div>
<div class="publication-entry">
<h2>{{ publications.featured_pub.title }}</h2>
<p style="font-weight: bold">{{ publications.featured_pub.editors }} (Eds.)</p>
<p>{{ publications.featured_pub.description }}</p>
<p style="font-style: italic; margin: -10px 0 0 0 !important">{{ publications.featured_pub.journal }}</p>
<a :href="publications.featured_pub.url" class="journal-link"> Publisher Page </a>
</div>
</div>

<h1>Recent publications</h1>


<input type="text" v-model="search" class="search" placeholder="Search by author, topic, journal.." />
     <transition-group name="publications" tag="div" class="publications">
<div class="entry" v-for="entry in filteredCustomers" :key='entry'>
 <h4>{{entry.author}}</h4>
  <p>{{entry.topic}}</p>
  <a :href="entry.url">{{entry.journal}}</a>
</div>
</transition-group>
  </div>
  </div>

</template>

<script>
import publications from '~/content/publications/combined.js'

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
    filteredCustomers:function()
    {
    	 var self=this;

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
  column-count: 4
  column-gap: 1.5em
  overflow: hidden
  margin: 20px 0 0 0
  width: 100%
  padding: 0
  display: inline-block
  color: black

.entry
  list-style: none
  break-inside: avoid
  width: 100%
  border-radius: 10px
  border: 1px solid #efefef
  background: #fafcfc
  display: inline-block
  break-inside: avoid !important
  margin: 0 0 6% 0
  padding: 0
  transition: all .85s ease
  height: auto
  h4
    width: 100%
    border-radius: 10px 10px 0 0
    margin: 0
    padding: 12px 3% 12px 5%
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