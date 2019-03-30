<template>
  <div>
    <Header/>

    <div class="ia-container">
      <figure class="slide1" @click="selected = 1" :class="{ highlight:selected == 1 }">
        <img :src="home.slide1.image">
        <figcaption>
          <h1>{{ home.slide1.name }}</h1>
          <p>{{ home.slide1.caption }}</p>
        </figcaption>
        <div class="legend">
          <h1 class="title">{{ home.slide1.name }}</h1>
        </div>
      </figure>

      <figure class="slide2" @click="selected = 2" :class="{highlight:selected == 2}">
        <img :src="home.slide2.image">
        <div class="legend">
          <h1 class="title">{{ home.slide2.name }}</h1>
        </div>

        <figcaption>
          <h1>{{ home.slide2.name }}</h1>
          <p>{{ home.slide2.caption }}</p>
        </figcaption>
      </figure>

      <figure class="slide3" @click="selected = 3" :class="{highlight:selected == 3}">
        <img :src="home.slide3.image">
        <figcaption>
          <h1>{{ home.slide3.name }}</h1>
          <p>{{ home.slide3.caption }}</p>
        </figcaption>
        <div class="legend">
          <h1 class="title">{{ home.slide3.name }}</h1>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import home from "~/content/pages/home.json";

export default {
  components: {
    Header
  },
  data() {
    return {
      home,
      selected: "1"
    };
  },
  methods() {}
};
</script>


<style lang="sass" scoped>
.legend 
  width: 100px
  background: rgba(255,255,255,0.8)
  height: 100vh
  position: absolute
  bottom: 0px
  padding: 20px
  left: 0px !important
  -webkit-transition: all 0.2s linear
  -moz-transition: all 0.2s linear
  -o-transition: all 0.2s linear
  -ms-transition: all 0.2s linear
  transition: all 0.2s linear
  opacity: 1
  .title
    position: absolute
    bottom: 70px
    left: 65px
    width: 400px
    padding: 0
    color: rgba(6, 102, 144, 1.0000)
    transform: rotate(-90deg)
    transform-origin: bottom left
.ia-container
  width: 100vw
  height: 100vh
  overflow: hidden
  position: relative
  display: flex
  flex-wrap: wrap
  figure
    height: 100vh
    width: 100px
    overflow: hidden
    flex-wrap: wrap
    position: relative
    box-shadow: 10px 0 40px rgba(0,0,0,0.8)
    -webkit-transition: all 0.8s ease
    -moz-transition: all 0.8s ease
    -o-transition: all 0.8s ease
    -ms-transition: all 0.8s ease
    transition: all 0.8s ease
    figcaption
      width: 100%
      height: auto
      padding: 30px
      position: absolute
      bottom: 0px
      background: rgba(6, 102, 144, 0.8)
      left: 0 !important
      opacity: 0
      transform: translateY(40px)
      h1
        color: white
        margin: 0 0 16px
        border-bottom: 1px solid rgba(255,255,255,0.4)
        padding-bottom: 12px
        font-size: 2em
      p
        width: 60%
        color: white
        line-height: 30px
        font-size: 1.4em
    img
      filter: grayscale(100%) blur(2px)
      transition: all 0.8s ease
    &.highlight
      flex-grow: 1
      img
        filter: grayscale(0%)
      &:hover
        transform: none
      .legend
        opacity: 0
      figcaption
        opacity: 1
        transform: translateY(0px)
        -webkit-transition: all 1s ease 1s
        -moz-transition: all 1s ease 1s
        -o-transition: all 1s ease 1s
        -ms-transition: all 1s ease 1s
        transition: all 1s ease 1s
    &:hover
      width: 120px
      cursor: pointer
  
.slide1 
  .legend
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='%23016895' d='M50 11.8a37.9 37.9 0 0 1 38 36.9v39.1H49.7a38 38 0 1 1 .3-76m0-7a45 45 0 0 0-.4 90H95V48.6A45 45 0 0 0 50 4.8z'/%3E%3Cpath fill='%23016895' d='M53.5 34.1a4 4 0 0 1-1.1 2.7 3.5 3.5 0 0 1-4 .8l-1.2-.8c-.3-.3-.6-.7-.8-1.2-.2-.5-.3-.9-.3-1.5 0-.5.1-.9.3-1.3l.8-1.2c.3-.3.7-.6 1.2-.8.4-.2.9-.3 1.4-.3.5 0 .9.1 1.4.3l1.2.8c.4.3.6.7.8 1.1.2.4.3.9.3 1.4zm-.4 30.5c0 1.1-.3 2-.9 2.6a3 3 0 0 1-2.4 1 3 3 0 0 1-2.4-1c-.6-.7-.9-1.5-.9-2.6v-18c0-1.1.3-2 .9-2.6a3 3 0 0 1 2.4-1c1 0 1.8.3 2.4 1 .6.7.9 1.5.9 2.6v18z'/%3E%3C/svg%3E"), rgba(255,255,255,0.7)
    background-repeat: no-repeat
    background-size: 38px
    background-position: 44% 99%
    left: 5px !important
.slide2 
  .legend
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 80'%3E%3Cpath fill='%23016895' stroke='%23016895' stroke-width='.7' d='M18.6 35c.2.1.6.2.8 1.4l.3 2.1.3 1.9c.5 3.2 1.7 5.4 3.8 7 2.4 1.9 5.7 2.8 9 2.8 3 0 6.1-.8 8.3-2.4 3-2.1 4.1-5.2 2.9-8.5-.2-.7-.9-1-1.6-.8-.7.2-1 .9-.8 1.6.8 2.3.2 4.2-1.9 5.7-3.8 2.7-10.7 2.5-14.4-.3-1.5-1.2-2.4-2.9-2.9-5.4l-.3-1.8-.3-2.2c-.4-2.2-1.6-3-2.5-3.3-3-.9-4.5-3-5.1-7.2-.5-3.2.2-5.4 2.2-6.9 2.2-1.8 4.6-2.5 7.2-2.1 3 .4 5.5 3.3 5.6 6.4 0 1.2.3 2.2 1 3 .8 1 .8 1.6-.3 2.6l-.4.4c-.6.5-1.2 1.1-1.7 1.7-.6.7-.7 1.7-.4 2.5.3.8.9 1.4 1.4 2 .8.9 1.4 1.5 2 2 1.7 1.4 4.2 1.3 6.9-.3.6-.3 1.1-.8 1.7-1.2.4-.3.7-.6.9-.9 1-1.1 1.4-1.2 2.6-.8.9.4 1.8.9 2.8 1.4l.6.3c1.6.9 3 .3 4-.1.4-.2.8-.3 1.2-.4.7-.1 1.1-.7 1-1.4-.1-.7-.7-1.1-1.4-1-.7.1-1.2.3-1.8.6-1 .4-1.4.5-1.9.3l-.6-.7c-1-.5-2-1.1-3.1-1.5-2.3-.9-3.8-.5-5.4 1.4-.2.2-.4.5-.7.7-.4.4-.8.7-1.2.9-.6.4-2.9 1.5-4.1.5-.5-.4-1.1-1-1.8-1.8-.3-.4-.7-.8-.9-1.2.4-.5.9-.9 1.5-1.4l.4-.4c2.1-1.8 2.3-3.8.7-6-.3-.4-.5-.9-.5-1.5-.1-4.3-3.5-8.2-7.7-8.8-3.2-.5-6.3.4-9.1 2.6-2.7 2.1-3.8 5.3-3.1 9.3.5 3.5 1.8 7.7 6.8 9.2z'/%3E%3Cpath fill='%23016895' stroke='%23016895' stroke-width='.7' d='M32 63.2c17.2 0 31.2-14 31.2-31.2S49.2.8 32 .8.8 14.8.8 32s14 31.2 31.2 31.2zm0-59.9c6.2 0 11.9 2 16.5 5.3-3.4.4-6.8 1.2-9.4 4.2-2.8 3.4-2.7 7.5-2.7 11.5 0 1.6.1 3.2-.1 4.7-.1.7.4 1.3 1.1 1.4h.1c.6 0 1.2-.5 1.2-1.1.2-1.7.1-3.4.1-5-.1-3.7-.2-7.1 2.1-9.8 2.4-2.8 5.9-3.2 9.6-3.5.2 0 .3-.1.5-.1 6 5.1 9.7 12.7 9.7 21.1 0 15.8-12.9 28.7-28.7 28.7S3.3 47.8 3.3 32 16.2 3.3 32 3.3z'/%3E%3C/svg%3E"), rgba(255,255,255,0.7)
    background-repeat: no-repeat
    background-size: 38px
    background-position: 45% 99%
.slide3 
  .legend
    background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='82' height='92'%3e%3cg fill='%23016895' fill-rule='nonzero' stroke='%23016895' stroke-width='2' %3e%3cpath d='M79.5 53.2c1.3-11 2.8-23.4-.2-29.9A34.8 34.8 0 0 0 46.8 1.4c-18.5 0-34.2 14.9-34.3 32.5L.9 61.3l11.8 1.1 3.8 18.3 21-1.2v-2l-19.4 1.1-3.7-18-10.6-1 10.7-25.3v-.2c0-16.6 14.8-30.7 32.3-30.7 13.6 0 26.5 8.7 30.6 20.6 2.8 6 1.3 18.7.1 28.9-.4 3.7-.9 7.1-1 10-.3 4-.2 8 .2 12v1l2-.2v-1c-.4-3.9-.5-7.8-.2-11.7l1-9.8z'/%3e%3cpath stroke='%23016895' stroke-width='2' d='M46.5 71.5v19.1h2V71.5h15.6v-16a7.3 7.3 0 1 0-2 0v14H48.5V29.1a7.3 7.3 0 1 0-2 0v27.8H31.2V47a7.3 7.3 0 1 0-2 0v11.9h17.3v12.6zm11.3-23.1a5.3 5.3 0 1 1 10.6 0 5.3 5.3 0 0 1-10.6 0zm-32.9-8.6a5.3 5.3 0 1 1 10.6 0 5.3 5.3 0 0 1-10.6 0zm17.4-17.9a5.3 5.3 0 1 1 10.6 0 5.3 5.3 0 0 1-10.6 0z'/%3e%3c/g%3e%3c/svg%3e"), rgba(255,255,255,0.7)
    background-repeat: no-repeat
    background-size: 34px
    background-position: 43% 98%

@media screen and (max-width: 1140px)
  figcaption
    p
      width: 100% !important

@media screen and (max-width: 520px)
  .ia-container
    width: 100vw
    height: 100vh
    overflow: hidden
    position: relative
    display: flex
    flex-direction: column
    flex-wrap: wrap
    figure
      height: 80px
      width: 100vw
      box-shadow: 0px -3px 10px rgba(0,0,0,0.05)
      overflow: hidden
      flex-wrap: wrap
      align-self: flex-end
      position: relative
      img
        height: auto
        width: 100%
        transition: all 1.3s ease .4s !important
      figcaption
        padding: 20px 20px 20px
        background: rgba(6, 102, 144, 1)
      &:hover
        width: 100vw
        height: 80px
        cursor: pointer
      &.highlight
        figcaption
          transition: .6s all ease !important

  .slide1 
    height: 160px !important
    .legend
      left: 0 !important
      height: 160px


  .legend 
    width: 100%
    background: rgba(255,255,255,0.8)
    height: 80px
    position: absolute
    bottom: 0px
    padding: 20px
    left: 0px !important
    -webkit-transition: all 0.2s linear
    -moz-transition: all 0.2s linear
    -o-transition: all 0.2s linear
    -ms-transition: all 0.2s linear
    transition: all 0.2s linear
    opacity: 1
    background: rgba(255,255,255,0.7) !important
    .title
      position: absolute
      bottom: 20px
      left: 20px
      width: 100%
      padding: 0
      color: rgba(6, 102, 144, 1.0000)
      transform: rotate(0deg)
      
.image
  width: 200vw
  height: 100vh
  position: relative
  background-position: center
  background-size: cover


.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.caption
  width: 100% !important
  height: 300px !important
  font-family: "Exo 2"
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2)
  border-radius: 0px
  color: black !important
  position: absolute !important
  bottom: 0px !important
  left: 0px
  background: rgba(255, 255, 255, 0.95)
  a
    font-size: 1.12em
    padding: 10px 15px
    border-radius: 10px
    position: relative
    top: -3px
    margin: 0 0 20px 27px
    color: #016895
    border: 1px solid #ddd
    font-weight: 400
    width: auto
    display: inline-block
    text-align: center
    text-decoration: none
  .title
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    float: left
    -webkit-box-align: left
    -ms-flex-align: left
    align-items: left
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    width: 100%
    height: 70px
    border-bottom: 1px solid #efefef
    margin: 0 0 12px 0 !important
    padding: 0 0 5px 0 !important
    top: 0
    position: relative
  p
  	font-size: 1.18em
  	line-height: 1.6em
  	text-align: left
  	margin: 20px 0 0 0 !important
  	padding: 30px 30px 15px !important
  	color: black !important
  	font-weight: 200 !important
  	display: block
  h3
    font-size: 1.85em
    font-weight: 400 !important
    color: #016895
    margin: 14px 0 0 20px
  
@media all and (max-width: 575px)
  .caption
    width: 100% !important
    left: 0 !important
    margin: 0 !important
    transform: none !important
    padding: 0 4% !important
    background: white
    bottom: 0 !important
    border-radius: 10px 10px 0 0
    .title
      margin: 0 0 0 0 !important
      height: 60px
    h3
      font-size: 1.35em !important
      background-size: 1.5em !important
      padding: 10px 0 15px 49px !important
      display: block
      margin: 10px 0 25px 10px !important
    &.about h3
      padding: 8px 0 15px 49px !important
      background-size: 1.4em !important
    &.knowledge h3
      padding: 10px 0 15px 49px !important
      background-size: 1.4em !important
    p
      font-size: 1.1em !important
      margin: 30px 20px 20px 15px !important
      position: relative
      top: 10px
      padding: 0 !important
    a
      margin: 2px 10px 10px 10px
      font-size: 1em !important
      width: 95%
  .slider
    div:nth-child(1)
        background-position: 0px 0px !important
        background-size: 145% !important
        background-repeat: no-repeat
    div:nth-child(2)
        background-position: -40px 0 !important
        background-size: 185% !important
        background-repeat: no-repeat
    div:nth-child(3)
        background-position: -90px 0 !important
        background-size: 185% !important
        background-repeat: no-repeat

</style>
