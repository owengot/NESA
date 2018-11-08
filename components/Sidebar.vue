<template>
  <div v-if="includeSidebar" class="sidebar">

    <div v-for="item in project.sidebar" v-bind:key="item" v-if="item.type === 'image'">
      <img v-bind:src="item.url" />
    </div>

    <div v-for="item in project.sidebar" v-bind:key="item" v-if="item.type === 'gallery'" class="gallery">

      <flickity ref="flickity" :options="flickityOptions">
        <div v-for="url in item.url" v-bind:key="url" class="carousel-cell" v-bind:style="{ backgroundImage: 'url(' + url + ')' }"></div>

      </flickity>

      <p class="caption">{{ item.caption }}</p>

    </div>

    <div v-for="item in project.sidebar" v-bind:key="item" v-if="item.type === 'video'" class="gallery">
      <video v-bind:src="item.url" controls />
      <p class="caption">{{ item.caption }}</p>
    </div>

    <div v-for="item in project.sidebar" v-bind:key="item" v-if="item.type === 'link'">
      <p>{{ item.url }}</p>
    </div>

  </div>
</template>

<script>
import vue from "vue";

export default {
  props: {
    project: { type: String, default: "" }
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
  computed: {
    includeSidebar() {
      return this.project.sidebar !== null;
    }
  }
};
</script>

<style>
.project_sidebar .sidebar {
  width: 35%;
  float: left;
  margin: 0 0 0 3%;
  display: block;
}

.gallery {
  border: 1px solid #efefef;
  border-radius: 20px;
  margin: 0 0 20px;
  overflow: hidden;
}
.gallery video {
  width: 100%;
  border-radius: 20px 20px 5px 5px;
  margin: 0 !important;
  padding: 0;
}
.caption {
  background: linear-gradient(to top, #fff, #f8fafa);
  width: 100%;
  color: #016895;
  text-align: center;
  padding: 14px 0px;
  font-family: "Exo 2", sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0 !important;
}

.flickity-viewport {
  height: 300px !important;
}

.carousel {
  height: 100%;
}

.carousel-cell {
  height: 100%;
  width: 100%;
  margin-left: 20px;
  border-radius: 20px 20px 5px 5px;
}

/* move page dots into carousel */
.flickity-page-dots {
  bottom: 10px;
}

img {
  width: 100%;
  border-radius: 20px;
  margin: 5px 0 15px 0;
}
</style>