<template>

  <div>

    <div
      class="gallery-container"
      v-for="item in project"
      v-bind:key="item"
    >

      <div class="thumbnail">
        <nuxt-img
          :src="item.url"
          image-style="small"
          :alt="item.caption"
          data-zoom
        />
      </div>

    </div>

  </div>

</template>


<script>
export default {
  props: {
    project: { type: String, default: "" }
  }
};
</script>

<style scoped>
#zoom-container {
  position: fixed;
  height: 100vh;
  width: 100%;
  background: red;
}

img {
  border-radius: 0px !important;
}

.gallery-container {
  margin: 10px 0;
}
.gallery-container .thumbnail {
  border-radius: 5px;
  width: 22%;
  height: 140px;
  float: left;
  margin: 0 2% 2% 0;
  overflow: hidden;
}

.gallery-container .thumbnail img {
  height: auto;
  width: 150% !important;
}

#zoom-container aside {
  width: 100%;
  height: 60px;
  background: blue;
  position: absolute;
  bottom: 0;
}
</style>