<template lang="md">
  <article>
    <Header />
    <h1>{{ title }}</h1>
    <p><vue-markdown>{{ body }}</vue-markdown>
      <br>
      <strong>Posted on <time :datetime="date">{{ date }}</time></strong>
    </p>
    <img :src="thumbnail">
  </article>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
components: {
	Header
},
  data () {
    return {
      title: '',
      body: '',
      thumbnail: '',
      date: ''
    }
  },
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    return post;
  }
};
</script>

<style lang="sass" scoped>
p
  margin: 200px
</style>
