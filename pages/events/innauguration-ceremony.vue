<template>
  <div class="mains">
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
    <div id="test">
      <div class="introduction">
        <p>{{ innaugurationCeremony.introduction }}</p>
      </div>

      <div class="section">
        <Gallery :project="innaugurationCeremony.gallery"/>
      </div>
    </div>
  </div>
</template>



<script>
import Sidebar from "~/components/SidebarProjects.vue";
import Gallery from "~/components/Gallery.vue";
import JQuery from "jquery";
import events from "~/content/pages/events.json";
import innaugurationCeremony from "~/content/events/innauguration-ceremony.json";
let $ = JQuery;

export default {
  layout: "about",
  components: {
    Sidebar,
    Gallery
  },
  pageHeader: events.image,
  pageTitle: events.title,
  bgPosition: "0 -330px",
  data() {
    return {
      events,
      innaugurationCeremony,
      links: [
        "Current Events",
        "Nesa Days",
        "Past Events",
        "Innauguration Ceremony"
      ]
    };
  },
  async asyncData({ params }) {
    let post = await import("~/content/events/posts/innauguration-ceremony.json");
    return post;
  }
};
</script>

<style lang="sass" scoped>

.section
  clear: both
  display: inline-block
  margin: 20px 0

div /deep/ .gallery 
  margin: 20px 0 0 5px
  a
    width: 18% !important
    margin: 0 2% 2% 0 !important
    height: auto
    &:nth-child(5n)
      margin: 0 0 2% 0 !important
    img
      height: auto

@import '~/assets/sass/news.sass'

.events 
  column-count: 2
  column-gap: 30px
  
.mains
  width: 75% !important
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

.introduction
  display: flex
  white-space: pre-line
  margin: 0 
  p
    font-size: 1.65em
    line-height: 43px !important
    font-family: 'Open Sans', sans-serif
    font-weight: 800
    color: black
    width: 90%
    float: left
    clear: both !important
    padding: 10px 0 20px
    margin: 0px 0 20px 0
    border-bottom: 1px solid #DDD


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

@media all and (max-width: 575px)
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
    font-size: 1.25em !important
  div /deep/ .introduction p
    font-size: 1.25em !important
    line-height: 1.5em !important
  div /deep/ .project h1
    font-size: 1.35em !important
    line-height: 1.4em !important
  #sidebar
    width: 100%
    float: none
    margin: 0
    clear: both
  div /deep/ .sidebar
    width: 100%
    margin: 0
    padding: 0 0px
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