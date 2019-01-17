
<v-btn class="filter-button" :class="{toggled: isToggled}" @click="isToggled = !isToggled">
  <slot></slot>
</v-btn>

export default {
  data: function () {
    return {
      isToggled: false
    }
  }
}