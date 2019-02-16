<template>
  <article>
  <Header />
    <h1>{{ title }}</h1>
    <p>{{ body }}
      <br>
      <strong>Posted on <time :datetime="date">{{ date | formatDateString }}</time></strong>
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

