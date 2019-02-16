import Vue from 'vue'

import moment from 'moment'

Vue.filter('formatDateString', function (value) {
  if (value) {
    return moment(String(value)).format('MMMM DD YYYY')
  }
})