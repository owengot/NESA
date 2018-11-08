import Vue from 'vue'
import mediumZoom from 'medium-zoom'

const initAfterMount = () => {
  mediumZoom('.container img:not(.medium-zoom-image)')
}

Vue.mixin({
  mounted: function () {
    // this will be called when any component is mounted!
    initAfterMount()
  },
})
