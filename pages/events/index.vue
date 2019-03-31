<template>
  <div class="mains">
    <div id="sidebar">
      <Sidebar
        :vertical="$mq | mq({
      sm: ' ',
      md: 'true'
    })"
        :mobile="$mq | mq({
      sm: 'true',
      md: 'false'
    })"
        :links="links"
      />
    </div>
    <div class="event" v-for="entry in filteredEntries" :key="entry.createTime">
      <div class="event_header">
        <h4>{{ entry.fields.name.stringValue }}</h4>
        <div class="info">
          <p class="place">{{ entry.fields.location.stringValue }}</p>
          <p class="date">{{entry.fields.date.stringValue | formatDateString }}</p>
        </div>
      </div>
      <div class="content">
        <p>{{ entry.fields.content.stringValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/SidebarProjects.vue";
import Event from "~/components/FeaturedEvent.vue";
import events from "~/content/pages/events.json";
import axios from "axios";

export default {
  layout: "about",
  components: {
    Sidebar,
    Event
  },
  pageHeader: events.image,
  bgPosition: "0 -330px",
  pageTitle: "Events",
  data() {
    return {
      events,
      links: [
        "Current Events",
        "Nesa Days",
        "Past Events",
        "Innauguration Ceremony"
      ]
    };
  },
  async asyncData({ $axios }) {
    const entries = await $axios.$get(
      "https://firestore.googleapis.com/v1/projects/nesa-a1443/databases/(default)/documents/events"
    );
    const eventEntries = entries.documents;
    if (eventEntries) {
      var filteredEntries = eventEntries.filter(function(entry) {
        return eventEntries[0].fields.userId.stringValue === "1";
      });
      return { filteredEntries };
    }
  }
};
</script>


<style lang="sass" scoped>

@import '~/assets/sass/news.sass'
.event
  font-size: 14px
  border-radius: 10px
  overflow: hidden
  position: relative
  margin: 0px auto 50px
  .content
    border: 1px solid rgba(0,0,0,0.05)
    border-top: none
    padding: 15px 20px 20px
    font-size: 1.3em
    line-height: 26px
    width: 95%
    margin: 0 auto 15px
    border-radius: 0 0 10px 10px
  .event_header 
      height: 70px
      width: 95%
      display: block
      border-radius: 10px 10px 0 0
      overflow: hidden
      margin: 5px auto 0
      border: 1px solid rgba(0,0,0,0.05)
      background: rgba(0,0,0,0.01)
      h4
        float: left
        padding: 22px 0 0 20px
        font-family: "Exo 2"
        font-weight: 300
        color: #066690
        font-weight: bold
        font-size: 1.6em
      .info
          float: right
          height: auto
          margin: 0 0px 0 0
          width: auto
          font-size: 1.1em
          height: 100%
          padding: 15px 20px 10px 53px !important
          background: url("data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='map-marker-alt' class='svg-inline--fa fa-map-marker-alt fa-w-12' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='%23066690' d='M172.3 501.7C27 291 0 269.4 0 192a192 192 0 1 1 384 0c0 77.4-27 99-172.3 309.7a24 24 0 0 1-39.4 0zM192 272a80 80 0 1 0 0-160 80 80 0 0 0 0 160z'/%3E%3C/svg%3E%0A") no-repeat 17px 18px #eaf1f4
          background-size: 23px
          p
            width: auto
            color: #066690 !important
            clear: both
            float: none
            margin: 0
            display: block
            &:first-child
              font-weight: bold
              font-size: 1.1em

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

@media all and (max-width: 775px)
  .event
    width: 100%
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

@media all and (max-width: 775px)
  .event_header 
      height: auto !important
      width: 95%
      display: block
      border-radius: 10px 10px 0 0
      overflow: hidden
      margin: 5px auto 0
      border: 1px solid rgba(0,0,0,0.05)
      background: rgba(0,0,0,0.01)
      h4
        float: none !important
        padding: 22px 0 20px 20px !important
        font-family: "Exo 2"
        font-weight: 300
        color: #066690
        width: 100%
        display: block
        font-weight: bold
        font-size: 1.6em
      .info
          float: none !important
          height: auto
          margin: 0 0px 0 0
          width: 100%
          font-size: 1.1em
          padding: 15px 20px 10px 53px !important
          background: url("data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='map-marker-alt' class='svg-inline--fa fa-map-marker-alt fa-w-12' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='%23066690' d='M172.3 501.7C27 291 0 269.4 0 192a192 192 0 1 1 384 0c0 77.4-27 99-172.3 309.7a24 24 0 0 1-39.4 0zM192 272a80 80 0 1 0 0-160 80 80 0 0 0 0 160z'/%3E%3C/svg%3E%0A") no-repeat 17px 18px #eaf1f4
          background-size: 23px
          p
            width: auto
            color: #066690 !important
            clear: both
            float: none
            margin: 0
            display: block
            &:first-child
              font-weight: bold
              font-size: 1.1em
</style>