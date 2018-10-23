<template>
  <article>
    <h1>TETEZTEZ</h1>
    <p>{{ body }}
      <br>
     
    </p>
    <img :src=" slide1.image " />
  </article>
</template>

<script>
export default {
layout: 'about',
  data () {
    return {
    }
  },
  async asyncData({ params }) {
    let post = await import('~/content/about2/about.json');
    return post;
  }
};
</script>

