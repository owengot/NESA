
<template>
<div v-if="noTitle">
    <a :href="url" target="_blank"> 
  <div class="publication no-title">
  <p> {{ description }}</p>
  </div>
  </a>
</div>
<div v-else>
    <a :href="url" target="_blank" v-bind:title='title'> 
  <div class="publication">
  <h4>{{ title }}</h4>
  <p> {{ description }}</p>
  </div>
  </a>
</div>
</template>


<script>
import vue from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
      required: false
    },
    url: {
      type: String,
      default: "",
      required: false
    },
    description: {
      type: String,
      default: "",
      required: false
    }
  },
  computed: {
    noTitle() {
      return this.title === "";
    }
  }
};
</script>

<style lang="sass" scoped>
.publication
  border-radius: 12px
  border: 1px solid #efefef
  display: inline-block
  margin: 20px 0 0
  break-inside: avoid !important
  max-width: 535px
  min-width: 452px
  min-height: 60px
  padding-bottom: 10px
  h4
    width: 100%
    border-radius: 10px 10px 0 0
    margin: 0
    padding: 10px 3% 8px
    font-size: 1.2em
    background: linear-gradient( to top, #fff, #f8fafa)
    border-bottom: 1px solid #EFEFEF
    color: #016895
    line-height: 28px
    font-family: "Exo 2", sans-serif
    font-weight: 600
  p
    font-size: 1em !important
    line-height: 23px !important
    padding: 1.5% 10px 0 50px
    margin: 2px 0 0 0 !important
    color: #016895 !important
    background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 60'%3e%3cg data-name='Livello 2'%3e%3cpath fill='none' d='M0 0h48v48H0z'/%3e%3cpath fill='%23006895' d='M33.33 38.75H18a.75.75 0 0 1 0-1.5h15.33a2 2 0 0 0 1.92-2V12.74a2 2 0 0 0-1.92-2H14.67a2 2 0 0 0-1.92 2V32a.75.75 0 0 1-1.5 0V12.74a3.46 3.46 0 0 1 3.42-3.49h18.66a3.46 3.46 0 0 1 3.42 3.49v22.52a3.46 3.46 0 0 1-3.42 3.49z'/%3e%3cpath fill='%23006895' d='M29 17.25H19a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5zM29 22.25H19a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5zM29 27.25H19a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5zM29 32.25h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5zM18 38.75a.77.77 0 0 1-.53-.22l-6-6a.75.75 0 0 1-.16-.82.74.74 0 0 1 .69-.46h6a.76.76 0 0 1 .75.75v6a.74.74 0 0 1-.46.69.75.75 0 0 1-.29.06zm-4.19-6l3.44 3.44v-3.44z'/%3e%3c/g%3e%3c/svg%3e") no-repeat
    background-size: 50px
    background-position: 0 3px
  &:hover
    background: #006895
    color: white
    border-color: #efefef
    h4 
      background: #006895
      color: white
      border-color: #efefef
    p
      background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 35'%3e%3cg fill='%23fff' fill-rule='nonzero'%3e%3cpath d='M26 20h-.1c-1.1 0-2 .9-2 2v2H4v-2c0-1.1-.9-2-2-2a2 2 0 0 0-2 2v3.1C0 26.7 1.3 28 3 28H25c1.6 0 2.9-1.3 2.9-2.9v-3a2 2 0 0 0-2-2z'/%3e%3cpath d='M5.8 9.8a2 2 0 0 1 2.8 0l3.5 3.4V2c0-1 .9-2 2-2C15 0 16 1 16 2v11.2l3.4-3.4a2 2 0 0 1 2.9 0c.7.7.7 2 0 2.8l-6.9 6.8a2 2 0 0 1-2.8 0l-6.8-6.8a2 2 0 0 1 0-2.8z'/%3e%3c/g%3e%3c/svg%3e") #006895 no-repeat
      color: white !important
      background-size: 25px
      background-position: 13px -10px
      animation: background .4s ease forwards
      border-radius: 12px

.no-title p
  background-position: 0 3px
  min-height: 45px
  display: flex
  align-items: center
  padding-top: 10px


@keyframes background 
  100% 
    background-position: 13px 14px
</style>