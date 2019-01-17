<template>
  <div
    v-if="includeSidebar"
    class="sidebar"
  >

    <div
      v-for="item in project.sidebar"
      v-bind:key="item"
      v-if="item.title"
      class="event-header"
    >
      <h2>
        {{ item.title }}
      </h2>

      <p>
        {{ item.caption }}
      </p>
    </div>

    <div
      v-for="item in project.sidebar"
      v-bind:key="item"
      v-if="item.type === 'image'"
    >
      <img v-bind:src="item.url" />
    </div>

    <div
      v-for="item in project.sidebar"
      v-bind:key="item"
      v-if="item.type === 'text'"
    >
      <div v-html="$md.render(item.body)"></div>
    </div>

    <div
      v-for="item in project.sidebar"
      v-bind:key="item"
      v-if="item.type === 'gallery'"
      class="gallery"
    >

      <flickity
        ref="flickity"
        :options="flickityOptions"
      >
        <div
          v-for="url in item.url"
          v-bind:key="url"
          class="carousel-cell"
          v-bind:style="{ backgroundImage: 'url(' + url + ')' }"
        >
        </div>

      </flickity>

      <p class="caption">{{ item.caption }}</p>

    </div>

    <div
      v-for="item in project.sidebar"
      v-bind:key="item"
      v-if="item.type === 'video'"
      class="gallery"
    >
      <video
        v-bind:src="item.url"
        controls
      />
      <p class="caption">{{ item.caption }}</p>
    </div>

    <div
      v-for="item in project.sidebar"
      v-bind:key="item"
      v-if="item.links"
      class="links"
    >

      <Link
        v-for="link in item.links"
        :key="link"
        :url="link.url"
        autowidth="true"
        :description="link.description"
      />

    </div>

  </div>
</template>

<script>
import vue from "vue";
import Link from "~/components/Link.vue";

export default {
  props: {
    project: { type: String, default: "" }
  },
  components: {
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
  computed: {
    includeSidebar() {
      return this.project.sidebar !== null;
    }
  }
};
</script>

<style>
.event-header {
  background: #006895;
  border-radius: 10px;
  box-shadow: 0 1px 1px #e4e5e5;
  padding: 10px 15px;
  margin: 10px 0 20px 0;
  font-family: "Open Sans";
}

.event-header h2 {
  font-size: 2.1em;
  line-height: 46px !important;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  color: white;
  clear: both;
  padding-bottom: 7px;
  border-bottom: 1px solid #ddd;
}

.event-header p {
  color: white;
  font-size: 1.25em;
  line-height: 40px;
  padding: 0;
  margin: 6px 0 0;
}

.project_sidebar .sidebar {
  width: 35%;
  float: left;
  margin: 0 0 0 3%;
  display: block;
}

.carousel-slider {
  border: 1px solid #efefef;
  border-radius: 20px;
  margin: 0 0 20px;
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
  border-radius: 20px 20px 20px 20px;
  background-size: cover;
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