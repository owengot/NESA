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
      <div class="project introduction">
        <h1>{{ projects.introduction }}</h1>
      </div>

      <div v-for="project in projects.entries" v-bind:key="project.id">
        <Project
          v-if="project.images || project.video || project.video"
          :project="project"
          :sidebar="'true'"
        />

        <Project v-else :project="project" :sidebar="'false'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/SidebarProjects.vue";
import Project from "~/components/NewProject.vue";
import projects from "~/content/projects/combined.js";

export default {
  layout: "about",
  components: {
    Sidebar,
    Project
  },
  pageHeader: projects.image,
  bgPosition: "0 -100px",
  pageTitle: projects.title,
  data() {
    return {
      projects,
      links: [
        "Interdisciplinary",
        "General Surgery",
        "Otolaryngology",
        "Urology",
        "Obstetrics & Gynaecology",
        "Anaesthesiology"
      ]
    };
  }
};
</script>



<style lang="sass" scoped>

@import '~/assets/sass/news.sass'

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


div /deep/ .project_sidebar 
  display: inline-block
  width: 100%
  margin: 0 0 20px 0
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
  font-size: 1.6em
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

  /deep/ p
    font-size: 1.25em !important
    line-height: 36px !important
  .project
    margin: 0 0 0 0 !important
    h1
      border-bottom: 0 
      margin: 0

  div /deep/ .project h1, div /deep/ .project_sidebar h1
    font-size: 1.7em
    line-height: 38px !important
    padding: 10px 0
  
  div /deep/ .project
    margin: 0 auto 10px !important

  .introduction /deep/ h1
    font-size: 1.4em !important
    line-height: 40px !important
    font-weight: 400 !important
    padding-bottom: 0 !important
    margin-bottom: 10px !important
    border: none
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
    font-size: 1.4em !important
    line-height: 1.4em !important
  #sidebar
    width: 100%
    float: none
    margin: 0
    clear: both
  /deep/ .sidebar img
    margin: 20px 0 10px !important
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