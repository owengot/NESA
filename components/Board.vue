<template>
  <div class="board">
    <h1>{{ title }}</h1>
    <div class="description" v-html="$md.render(description)"></div>

    <button
      v-if="entries"
      id="show-modal"
      @click="openModal(); modalEntries = entries; modalTitle = title; modalIntroduction = introduction"
    >View Members</button>

    <CustomComponentModal
      v-if="showModal"
      @close="showModal = false"
      :title="modalTitle"
      :entries="modalEntries"
      :introduction="modalIntroduction"
    ></CustomComponentModal>
  </div>
</template>

<script>
import vue from "vue";
import Sidebar from "~/components/Sidebar.vue";
import Link from "~/components/Link.vue";
import marked from "marked";
import CustomComponentModal from "~/components/CustomComponentModal.vue";

export default {
  components: { CustomComponentModal },
  data() {
    return {
      showModal: false,
      modalTitle: "",
      modalContent: ""
    };
  },
  props: ["title", "description", "entries", "introduction"],
  methods: {
    openModal() {
      this.showModal = true;
      document.documentElement.style.overflow = "hidden";
    }
  }
};
</script>

<style lang="sass" scoped>

.board
  flex: auto
  width: 31%
  margin: 1% 2% 2% 0
  padding: 0 0 35px 0
  border: 1px solid #efefef
  border-radius: 10px
  display: block
  overflow: hidden
  position: relative
  h1
    width: 100%
    margin: 0
    padding: 15px 5%
    font-size: 1.5em
    background: linear-gradient( to top, #fff, #f8fafa)
    border-bottom: 1px solid #EFEFEF
    color: #016895
    font-family: "Exo 2", sans-serif
    font-weight: 600
    text-align: center
  .description
    margin: 5px 20px 30px 0
    font-size: 1.1em !important
    ul
      margin: 0 !important
      display: block
      -webkit-margin-before: 0 !important
      -webkit-margin-after: 0 !important
      li
        margin: 0 !important
        p
          margin: 0 !important
          display: inline
  button
    width: 100% !important
    display: inline-block
    position: absolute
    bottom: 0px
    border: none
    border-top: 1px solid #efefef
    background: #fafafa
    color: #006895
    font-size: 1.1em
    padding: 3.5% 0 !important
    text-decoration: none
    &:focus 
      outline: 0
    &:hover 
      cursor: pointer
      background: #efefef
      transition: all 1s ease


</style>