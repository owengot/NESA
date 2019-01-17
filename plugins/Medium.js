import Vue from 'vue'
import mediumZoom from 'medium-zoom'

const initAfterMount = () => {

}

Vue.mixin({
  mounted: function () {
    // this will be called when any component is mounted!
    initAfterMount();

    mediumZoom('.container img:not(.medium-zoom-image)')

  },
})
