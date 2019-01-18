<template>
  <div class="mains">
    <div id="sidebar">
      <Sidebar
        :vertical="'true'"
        :links="links"
      />
    </div>
    <div
      id="test"
      class="events"
    >

      <div
        v-for="entry in events"
        v-bind:key="entry"
      >
        <Event
          v-if="entry.sidebar"
          :project="entry"
          :sidebar="'true'"
        />

        <Event
          v-else
          :project="entry"
          :sidebar="'false'"
        />
      </div>

    </div>

  </div>
</template>

<script>
import Sidebar from "~/components/SidebarProjects.vue";
import Event from "~/components/FeaturedEvent.vue";

export default {
  layout: "about",
  components: {
    Sidebar,
    Event
  },
  pageHeader: "../events.jpg",
  pageTitle: "events",
  bgPosition: "0 -330px",
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
    let post = await import("~/content/events/index.json");
    return post;
  }
};
</script>

<style lang="sass" scoped>

@import '~/assets/sass/news.sass'

.events 
  column-count: 2
  column-gap: 30px
  
.mains
  width: 75% !important
  overflow: hidden
  margin: 40px auto !important
  position: relative
  display: block !important

.main_left
  width: 64%
  float: left


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

.project
  display: flex
  flex-direction: column
  align-items: flex-start
  white-space: pre-line
  margin: 0 0 40px 0

h1, .desc, .photo, p
  color: black !important
  display: inline-block

intro 
  font-size: 1.5em
  line-height: 1.9em
  margin-bottom: 30px
  font-family: 'Open Sans', sans-serif
  font-weight: 800
  color: black

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

.desc, p
  display: inline
  clear: both !important
  float: none

.desc /deep/ p 
  font-size: 1.25em !important
  line-height: 40px
  color: #000
  display: inline
  &:before
    content: ""
    display: inline-block
    clear: both

.photo 
  display: flex
  flex-direction: row
  margin: 1.4em 0 0 0 
  font-size: 1.25em
  line-height: 40px
  color: #000

.photo /deep/ p 
  &:first-child
    flex: 0 0 64%
    padding-right: 30px

.photo /deep/ img 
  width: 100% !important
  border-radius: 20px
  margin: 0 0 20px 20px

</style>