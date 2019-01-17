<template>

  <div>

    <div
      class="project_sidebar"
      v-if="sidebar === 'true'"
    >
      <h1 v-if="project.name.length > 0">{{ project.name }}</h1>
      <div class="main_left">
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

export default {
  components: {
    Sidebar,
    Link
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
  width: 62%
  float: left


#sidebar
  width: 360px
  float: right
  margin: 0 0 0 30px


.project_sidebar 
  display: inline-block
  width: 100%
  clear: both
  margin: 0px 0 20px 0
  h1
    width: 100%
    display: block

.project
  display: flex
  flex-direction: column
  align-items: flex-start
  white-space: pre-line
  margin: 0px 0 40px 0

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
    margin: 20px 0 !important

.desc /deep/ p 
  font-size: 1.25em !important
  line-height: 40px
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
  margin: 20px 0 0 0 !important
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

</style>