<template>
  <div>
    <Header />

    <div class='header' :style="{ backgroundImage: 'url(' + header + ')', backgroundPosition: bgpos }">
      <div class="tab">
        <nuxt-link :to="'/' + title">
          {{$nuxt.$route.path}}
        </nuxt-link>
      </div>
    </div>

    <section class="container">

      <nuxt />
    </section>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  },
  computed: {
    title() {
      return this.$route.matched.map(r => {
        return r.components.default.options
          ? r.components.default.options.pageTitle
          : r.components.default.pageTitle;
      })[0];
    },
    slugtitle() {
      return this.$route.matched.map(r => {
        return r.components.default.options
          ? r.components.default.options.slugTitle
          : r.components.default.slugTitle;
      })[0];
    },
    header() {
      return this.$route.matched.map(r => {
        return r.components.default.options
          ? r.components.default.options.pageHeader
          : r.components.default.pageHeader;
      })[0];
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;

  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: white !important;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 93%;
  margin: 20px auto;
}

.main {
  float: left;
  width: 60%;
}

.header {
  width: 100%;
  height: 400px;
  position: relative;
  top: 0;
  background-size: cover;
  background-position: 0 0px;
  box-shadow: inset 0px -10px 10px rgba(0, 0, 0, 0.2);
}

.header .tab {
  font-size: 2em;
  font-weight: 200;
  font-family: "Exo 2", sans-serif;
  background: #fff;
  display: inline-block;
  clear: both;
  box-shadow: 0 -2px 0px 0 rgba(0, 0, 0, 0.1);
  padding: 25px 30px;
  z-index: 9999;
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 3%;
  border-radius: 10px 10px 0 0;
  line-height: 20px;
  margin: 15px 0 0;
  color: #016895;
}

.header .tab a {
  text-decoration: none;
  color: #016895;
}
</style>
