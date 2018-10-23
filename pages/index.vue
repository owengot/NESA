<template>
<div>
<section class="header">

</section>
  <section class="container">
    <h2></h2>
   

	<slick ref="slick" class="slick">
		<div style="background: red">
		<img :src=" slide1.image " />
		<p class="caption">{{ slide1.caption }}</p>
		</div>
		<div style="background: green">
		<img :src=" slide1.image " />
		</div>
		<div style="background: purple">
		3
		</div>
	</slick>


  </section>
 </div>
</template>

<script>
let Slick = null;
if (process.browser) {
    /* eslint-disable global-require */
    Slick = require('vue-slick').default;
    /* eslint-enable global-require */
}

export default {
	components: {
		Slick
	},
layout: 'about',
  data () {
    return {
    slickOptions: {
                   slidesToShow: 1,
                   // Any other options that can be got from plugin documentation
               },
    }
  },
  async asyncData({ params }) {
    let post = await import('~/content/about2/about.json');
    return post;
  },
  mounted: () => {
 
  }
}


</script>


<style>

.slick {
width: 100%;
height: 90%;

}

.slick div {
overflow: hidden;
width: 100%;
height: 100%;
position: relative;
display: inline-block;
}
.caption {
width: 500px;
height: 300px;
position: absolute;
left: 20px;
bottom: 20px;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
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
