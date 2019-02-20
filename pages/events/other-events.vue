<template>
  <div class="section">
    <div id="sidebar">
      <Sidebar
        :links="links"
        :vertical="$mq | mq({
      sm: ' ',
      md: 'true'
    })"
        :mobile="$mq | mq({
      sm: 'true',
      md: 'false'
    })"
      />
    </div>

    <div class="main">
      <h1>Timeline</h1>
      <div class="timeline">

        <div
          class="entry"
          v-for="entry in otherEvents.entries"
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

import events from '~/content/pages/events.json';
import otherEvents from '~/content/events/other-events.json';

let $ = JQuery;

export default {
  layout: "about",
  components: {
    Sidebar,
    Link,
    Gallery
  },
  pageHeader: events.image,
  pageTitle: events.title,
  bgPosition: "0 -330px",
  data() {
    return {
      events,
      otherEvents,
      links: [
        "Current Events",
        "Innauguration Ceremony",
        "Nesa Days",
        "Other Events",
        "Recommended Events"
      ]
    };
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
    width: 23% !important
    margin: 0 2% 2% 0 !important
    height: auto
    &:nth-child(4n)
      margin: 0 0 2% 0 !important
    img
      height: auto

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
    clear: both
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
    &:after
      clear: both
      content: ''
      position: absolute

  p
    margin-left: 5px
    margin-bottom: 10px
    font-size: 1.25em !important
    clear: both
    display: inline-block
    line-height: 35px !important

@media all and (max-width: 575px)
  .main
    width: 100% !important
    float: none
  .section
    width: 90% !important
    float: none
  .timeline
    margin-top: 20px
  div /deep/ .gallery 
    margin: 0px 0px
    display: inline-block
    height: auto
    a
      width: 48% !important
      margin: 0 2% 2% 0 !important
      height: 140px
      &:nth-child(2n)
        margin: 0 0 2% 0 !important
      img
        height: 130px
  .events 
    column-count: 1
    column-gap: 0px
  div /deep/ .publication
    border-radius: 12px
    border: 1px solid #efefef
    display: inline-block
    margin: 20px 0 0
    -webkit-column-break-inside: avoid !important
    break-inside: avoid !important
    max-width: auto !important
    min-width: auto !important
    width: 100% !important
    min-height: 60px
    padding-bottom: 10px
  #test
    clear: both
    display: block
  .mains
    width: 90% !important
    overflow: hidden
    margin: 30px auto !important
    position: relative
    display: block !important
  div /deep/ .main_left 
    width: 100% !important
  div /deep/ .desc h2
    font-size: 1.35em !important
  div /deep/ .project h1
    font-size: 1.35em !important
    line-height: 1.4em !important
  #sidebar
    width: 100%
    float: none
    margin: 0
    clear: both
  div /deep/ .sidebar
    width: 100% !important
    margin: 0
    padding: 0 0px
    .gallery
      width: 100% !important
    .section
      margin: 30px 0 20px 0
      overflow-x: auto
      height: 90px !important
      white-space: nowrap 
      a
        display: inline !important
        float: left !important
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