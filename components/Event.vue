<template>

  <div>

    <div
      class="project_sidebar"
      v-if="sidebar === 'true'"
    >
      <h1 v-if="project.name.length > 0">{{ project.name }}</h1>
      <h2 v-if="project.date">{{ project.date }}</h2>
      <img
        v-if="project.image"
        :src="project.image"
      />
      <div class="main_left">
        <div
          class="desc"
          v-html="$md.render(project.body)"
        ></div>

        <Gallery :project="project.gallery" />

        <div
          v-for="item in project.links"
          v-bind:key="item"
        >
          <Link
            :title="item.title"
            :url="item.url"
            :description="item.description"
          />
        </div>
      </div>
      <Sidebar :project="project" />
    </div>

    <div
      v-else
      class="project"
    >
      <h1 v-if="project.name.length > 0">{{ project.name }}</h1>
      <div
        class="desc"
        v-html="$md.render(project.body)"
      ></div>
      <div
        v-for="item in project.links"
        v-bind:key="item"
      >
        <Link
          :title="item.title"
          :url="item.url"
          :description="item.description"
        />
      </div>
    </div>

  </div>

</template>

<script>
import vue from "vue";
import Sidebar from "~/components/Sidebar.vue";
import Link from "~/components/Link.vue";
import marked from "marked";

import Gallery from "~/components/Gallery.vue";
import JQuery from "jquery";
let $ = JQuery;

export default {
  components: {
    Sidebar,
    Link,
    Gallery
  },
  props: {
    project: { type: String, default: "" },
    sidebar: { type: String, default: "'true'" }
  },
  computed: {
    includeSidebar() {
      return this.sidebar == "true";
    }
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
  width: 60%
  float: left

.sidebar
  width: 37% !important
  float: right

.events 
  column-count: 2
  column-gap: 30px
  break-inside: avoid
  a
    display: inline-block
    width: 100%
    text-decoration: none

#sidebar
  width: 360px
  float: right
  margin: 0 0 0 30px


.project_sidebar 
  display: inline-block
  width: 100%
  clear: both
  margin: 20px 0 20px 0
  h1
    width: 100%
    margin: 0px 0 20px
    display: block

div /deep/ a .publication
  width: auto !important
  max-width: auto
  padding-right: 10px
  min-width: auto
  margin: 0px 0 10px
.event
  height: 260px !important
  width: 100% !important
  display: flex !important
  justify-content: center
  flex-direction: column
  border-radius: 20px
  align-items: bottom
  overflow: hidden
  margin: 0px 0 0px 0
  position: relative
  margin-bottom: 20px
  border: 1px solid #efefef
  h1
    width: 100% !important
    font-size: 1.2rem !important
    padding: 9px 17px 7px !important
    margin: 0px 0 0px
    line-height: 24px !important
    min-height: 60px
    display: flex
    align-items: center
    background: linear-gradient( to top, #fff, #f8fafa)
    border-bottom: 1px solid #EFEFEF
    color: #016895 !important
    font-family: "Exo 2", sans-serif
    font-weight: 600
  p
    margin-top: 0 !important
    padding: 7px 15px !important
    background: #006895
    color: #fff !important
    font-weight: normal
    font-size: 1rem !important
    line-height: 30px
  .thumbnail
    position: relative
    width: 100%
    height: 180px
    overflow: hidden
    img
      position: absolute
      left: 50%
      top: 50%
      height: auto
      width: 100%
      transform: translate(-50%, -50%)
    

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
  margin-bottom: 15px
  border-bottom: 1px solid #DDD
  &:after
    content: ""
    display: table
    clear: both

.desc, p
  display: inline
  clear: both !important
  float: none
  font-size: 1em
  font-family: "Open Sans", sans-serif

.desc p 
    margin: 0 !important
    display: block

.desc /deep/ p 
  font-size: 1.25em !important
  line-height: 40px
  padding: 0 20px 0 0
  margin: 20px 0 0 0 !important
  color: #000
  display: inline-block
  &:before
    content: ""
    display: inline-block
    clear: both
  &:first-child
    margin: 0 !important

.desc /deep/ h2
  font-size: 1.65em
  line-height: 46px !important
  font-family: 'Open Sans', sans-serif
  font-weight: 800
  color: black
  width: 95%
  float: none
  clear: both !important
  border-bottom: 1px solid #DDD
  padding-bottom: 20px
  margin-bottom: 0px

.desc /deep/ h2 + p
  font-size: 1.35em !important
  line-height: 40px
  margin: 0 !important
  color: #000
  width: 95%
  display: inline-block

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

.project
  display: flex
  flex-direction: column
  align-items: flex-start
  white-space: pre-line
  margin: 0px 0 40px 0
</style>