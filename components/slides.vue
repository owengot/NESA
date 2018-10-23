Vue.component('slides', {
  data: function () {
    return {
      count: 2
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})