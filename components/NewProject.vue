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
          v-html="$md.render(project.description)"
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
        <div
        class="sidebar"
        >

        <div
        v-for="item in project.images"
        v-bind:key="item.id"
        >
        <img v-bind:src="item" />
        </div>

        <div
      v-if="project.gallery"
      class="gallery"
    >


      <flickity
        ref="flickity"
        :options="flickityOptions"
        style="margin-bottom: 20px !important"
      >
        <div
          v-for="item in project.gallery.url"
          v-bind:key="item"
          class="carousel-cell"
          v-bind:style="{ backgroundImage: 'url(' + item + ')' }"
        >
        </div>

      </flickity>

    </div>

    <div
      v-if="project.video"
      class="gallery"
    >
      <video
        v-bind:src="project.video[0].url"
        controls
      />
      <p class="caption">{{ project.video[0].caption }}</p>
    </div>

        </div>
    </div>

    <div
      v-else
      class="project"
    >
      <h1>{{ project.name }}</h1>
      <div
        class="desc"
        v-html="$md.render(project.description)"
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
  data() {
    return {
      flickityOptions: {
        setGallerySize: false,
        percentPosition: true,
        pageDots: false,
        draggable: false,
        contain: false,
        autoPlay: 6500,
        selectedAttraction: 0.03,
        friction: 0.5,
        pauseAutoPlayOnHover: false
      }
    };
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
.main_left
  width: 62%
  float: left

.project
  display: flex
  flex-direction: column
  align-items: flex-start
  white-space: pre-line
  margin: 0px 0 40px 0

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

.sidebar
  width: 35%
  float: left
  margin: 0 0 0 3%
  display: block
  img
    width: 100%
    border-radius: 20px
    margin: 5px 0 15px 0

.carousel-slider 
  border: 1px solid #efefef
  border-radius: 20px
  display: block
  margin: 0 0 20px

.gallery 
  video
    width: 100%
    border-radius: 20px 20px 5px 5px
    margin: 0 !important
    padding: 0
  .caption 
    background: linear-gradient(to top, #fff, #f8fafa)
    width: 100% !important
    border: 1px solid #efefef
    display: inline-block
    color: #016895
    text-align: center
    padding: 14px 0px
    font-family: "Exo 2", sans-serif
    font-size: 1.2em
    font-weight: 600
    border-radius: 0 0 10px 10px
    margin: -5px 0 0 0 !important

div /deep/ 
  .flickity-viewport 
    height: 300px !important
  .carousel 
    height: 100%
  .carousel-cell 
    height: 100%
    width: 100%
    margin-left: 20px
    border-radius: 20px 20px 20px 20px
    background-size: cover
  .flickity-page-dots
    bottom: 10px

</style>