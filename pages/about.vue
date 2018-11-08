<template>
  <section class="container">
    <h1>
      <nuxt-link :to="title">{{title}}</nuxt-link>
    </h1>

  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  pageHeader: "default.jpg",
  layout: "about",
  components: {
    AppLogo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context("~/content/test/posts/", false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/test/${key.replace(".json", "").replace("./", "")}`
    }));

    return { posts };
  }
};
</script>

<style>
.header {
  height: 900px;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
