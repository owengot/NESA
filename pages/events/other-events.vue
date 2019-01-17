<template>
  <div class="section">
    <div id="sidebar">
      <Sidebar
        :links="links"
        :vertical="'true'"
      />
    </div>

    <div class="main">
      <h1>Timeline</h1>
      <div class="timeline">

        <div
          class="entry"
          v-for="entry in projects"
          :key="entry"
        >
          <h2> {{ entry.date }} </h2>
          <p v-html="$md.render(entry.entry)"> </p>

          <div
            v-for="item in entry.links"
            v-bind:key="item"
          >
            <Link
              :title="item.title"
              :url="item.url"
              :description="item.description"
            />
          </div>

          <Gallery :project="entry.gallery" />

        </div>

      </div>

    </div>

  </div>
</template>



<script>
import Sidebar from "~/components/SidebarProjects.vue";
import Link from "~/components/Link.vue";
import Gallery from "~/components/Gallery.vue";
import JQuery from "jquery";
let $ = JQuery;

export default {
  layout: "about",
  components: {
    Sidebar,
    Link,
    Gallery
  },
  pageHeader: "../events.jpg",
  pageTitle: "events",
  data() {
    return {
      links: [
        "Current Events",
        "Innauguration Ceremony",
        "Nesa Days",
        "Other Events",
        "Recommended Events"
      ]
    };
  },
  async asyncData({ params }) {
    let post = await import("~/content/events/posts/other-events.json");
    return post;
  }
};
</script>

<style lang="sass" scoped>

@import '~/assets/sass/news.sass'

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
  margin-bottom: 20px
  border-bottom: 1px solid #DDD
  &:after
    content: ""
    display: table
    clear: both

.events 
  column-count: 2
  column-gap: 30px
  
.section
  width: 75% !important
  margin: 40px auto !important
  position: relative
  display: block !important

.main
  width: 60%
  float: left

.timeline
  width: 100%
  border-left: 1px solid #efefef

#sidebar
  width: 360px
  float: right
  margin: 0 0 0 30px


.project_sidebar 
  display: block
  width: 100%
  h1
    width: 100%
    display: block


div /deep/ .gallery 
  margin: 10px 0 0 5px
  a
    width: 31% !important
    margin: 0 2% 2% 0 !important
    height: 150px
    &:nth-child(3n)
      margin: 0 0 2% 0 !important
    img
      height: 150px

.entry
  color: black
  font-family: 'Open Sans', sans-serif
  margin-bottom: 20px
  display: inline-block
  margin-left: 25px
  h2  
    position: relative
    border: 1px solid #efefef
    color: #006895
    padding: 13px 15px 11px
    font-size: 22px
    display: inline-block
    border-radius: 10px
    margin-bottom: 10px
    &:before
      background: #efefef
      height: 11px
      width: 11px
      border-radius: 40px
      content: ''
      position: absolute
      left: -32px
      top: 18px
  p
    margin-left: 5px
    margin-bottom: 10px
    font-size: 1.25em !important
    line-height: 35px !important


</style>