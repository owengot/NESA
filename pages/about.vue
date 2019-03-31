<template>
  <div class="mains">
    <div id="test">
      <div class="block">
        <div class="col_left">
          <h1>{{ about.title }}</h1>
          <p v-html="$md.render(about.description)"></p>
          <a
            href="/Presentation-NESA.pptx"
            target="_blank"
            class="presentation"
          >View the NESA Presentation</a>
        </div>
        <div class="col_right">
          <blockquote>{{ about.quote }}</blockquote>
        </div>
      </div>

      <div class="section">
        <h1>Background</h1>

        <p>The following disciplines are represented in the NESA.</p>

        <Disciplines :links="links" :vertical="'false'"/>
      </div>

      <div class="section">
        <h1>Structure</h1>

        <div class="section boards">
          <Board
            :title="about.ex_title"
            :description="about.ex_description"
            :entries="about.ex_entries"
            :introduction="about.ex_introduction"
          />

          <Board
            :title="about.ab_title"
            :description="about.ab_description"
            :introduction="about.ab_introduction"
          />

          <Board
            :title="about.ib_title"
            :description="about.ib_description"
            :introduction="about.ib_introduction"
          />
        </div>

        <p>All other members are voluntary members, should identify with the aims and goals of the NESA and are appointed for limited periods.</p>
      </div>

      <div class="section">
        <h1>The diplomats</h1>

        <p>{{ about.di_introduction }}</p>
      </div>

      <div class="section partners">
        <h1>{{ about.pa_title }}</h1>

        <p>{{ about.pa_introduction }}</p>
      </div>

      <div class="section representatives">
        <h1>{{ about.cr_title }}</h1>

        <p>{{ about.cr_introduction }}</p>
      </div>

      <div class="section members">
        <h1>{{ about.hm_title }}</h1>

        <p>{{ about.hm_introduction }}</p>
      </div>

      <div class="section cooperations">
        <h1>{{ about.co_title }}</h1>

        <p>{{ about.co_introduction }}</p>

        <div class="organisations">
          <ul v-for="entry in about.co_entries" :key="entry.id">
            <li>{{ entry.title }}</li>
          </ul>
        </div>

        <div style="clear:both"></div>
      </div>
    </div>

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
import Disciplines from "~/components/SidebarProjects.vue";
import Board from "~/components/Board.vue";
import CustomComponentModal from "~/components/CustomComponentModal.vue";
import about from "~/content/members/combined.js";

export default {
  layout: "about",
  components: {
    CustomComponentModal,
    Disciplines,
    Board
  },
  pageHeader: about.image,
  pageTitle: about.title,
  data() {
    return {
      showModal: false,
      about,
      modalTitle: "",
      modalContent: "",
      links: [
        "General Surgery",
        "Otolaryngology",
        "Urology",
        "Obstetrics & Gynaecology",
        "Anaesthesiology"
      ]
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      document.documentElement.style.overflow = "hidden";
    }
  }
};
</script>

<style lang="sass" scoped>
.presentation
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 40'%3E%3Cpath fill='rgba(1, 104, 149, 1.0000)' d='M12 10.2a.7.7 0 0 0 .5-.7c0-.1 0-.3-.2-.4a.7.7 0 0 0-.4-.2 5 5 0 0 0-.7 0h-.5v1.4h.6l.8-.1zM16.7 10.2a.7.7 0 0 0 .5-.7c0-.1 0-.3-.2-.4a.7.7 0 0 0-.4-.2 5 5 0 0 0-.7 0h-.5v1.4h.5l.8-.1z'/%3E%3Cpath fill='rgba(1, 104, 149, 1.0000)' d='M26.5 0h-21a2 2 0 0 0-2 2v28c0 1.1.9 2 2 2h21a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-7.8 8h4v.8h-1.5V13h-1V8.8h-1.5V8zm-4.3 0h2.8c.3.1.5.3.7.6.2.2.3.5.3 1 0 .2 0 .5-.2.7 0 .2-.2.4-.4.5l-.5.2-1 .1h-.7V13h-1V8zM9.7 8h2.8c.3.1.6.3.7.6.2.2.3.5.3 1l-.1.7-.5.5-.5.2-1 .1h-.7V13h-1V8zm13.8 17.5h-15v-1h15v1zm0-3.5h-15v-1h15v1z'/%3E%3C/svg%3E") no-repeat 10px 10px
  background-size: 40px
  padding: 20px 20px 20px 57px
  margin: 20px 0 10px 0
  display: inline-block
  text-decoration: none
  color: rgba(1, 104, 149, 1.0000)
  font-weight: bold
  border: 1px solid rgba(1, 104, 149, 1.0000)
  border-radius: 10px

.block 
  display: flex
  width: 100%
  justify-content: space-between
  p
    font-size: 1.35em
    font-family: 'Open Sans'
    line-height: 1.86em
    padding: 0 20px 0 0
    color: #000
    display: inline-block
  /deep/ ul 
    li
      line-height: 2.2em
      color: #016895
      padding: 0 !important
      margin: 0 !important
      font-size: 0.8em
      list-style-type: circle
      p
        font-size: 1.2em !important

  .col_left
    width: 60%
    h1
      padding: 0 0 20px 0
  .col_right
    width: 35%
    blockquote
      width: 100%
      display: block
      position: relative
      margin: 20px 0 0 0px
      clear: none !important
      top: 50px
      font-size: 1.8em !important
      line-height: 1.42em
      color: #016895 !important
      background: #efefef
      border-radius: 10px
      font-family: 'Exo 2'
      padding: 15px 30px
      background: linear-gradient(to bottom, #fff, #f8fafa)
      -webkit-box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.1)
      box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.1)
      font-weight: 400 !important
      &:before
        font-family: 'Georgia', serif
        content: "\201C"
        color: #97b3df
        font-style: normal
        font-size: 3.6em
        position: absolute
        left: -20px
        top: 20px
.featured_partners
  clear: both
  display: inline-block
  width: 100%
  margin: 0% 0 2% 0 !important

.partner
  width: 21%
  margin: 0% 2% 0 0 !important
  height: 160px
  padding: 20px
  border: 1px solid #efefef !important
  border-bottom: 2px solid #efefef !important
  border-radius: 20px !important
  background-size: 70% !important
  background-repeat: no-repeat !important
  background-position: center !important
  display: inline-block
  &:hover
	  border: 1px solid #016895 !important
	  border-bottom: 2px solid #016895 !important
	  transition: all 1s ease !important
	  cursor: pointer !important


.modal-enter 
  opacity: 0

.modal-leave-active 
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container 
  -webkit-transform: scale(1.1)
  transform: scale(1.1)


.section
  clear: both !important
  width: 100%
  display: inline-block
  #show-modal
    background: #fff
    border: 1px solid #006895
    color: #006895
    text-decoration: none
    padding: 12px
    margin: 0 0 10px
    font-size: 1.2em
    display: inline-block
    border-radius: 10px
    &:focus 
      outline: 0
    &:hover 
      cursor: pointer
  h1
    width: 100%
    clear: both
    margin: 20px 0
  p
    font-size: 1.35em !important
    font-family: 'Open Sans'
    line-height: 40px
    display: inline-block
    margin: 0 0 20px !important

.section.boards
  display: flex
  flex-flow: row wrap

div /deep/ h2
  font-size: 2.1em !important
  line-height: 46px !important

div /deep/ ul 
  margin-top: 10px
  li 
    line-height: 36px
    color: #016895
    padding: 0 !important
    margin: 0 !important
    list-style-type: circle
  p
    color: #016895 !important
    margin: 0 !important


.section.cooperations
  .organisations
    column-count: 2
    float: left
    ul 
      width: 90%
      display: block
      margin: 0
      padding: 0 0 0 20px
      -webkit-column-break-inside: avoid
      page-break-inside: avoid
      break-inside: avoid
      li
        font-size: 1.25em
        -webkit-column-break-inside: avoid
        page-break-inside: avoid
        break-inside: avoid



@import '~/assets/sass/news.sass'

.mains
  width: 75% !important
  overflow: hidden
  margin: 40px auto !important
  position: relative
  display: block !important

.main_left
  width: 64%
  float: left


#sidebar
  width: 360px
  float: right
  margin: 0 0 0 30px


.project_sidebar 
  display: block
  width: 100%
  h1
    width: 100%
    display: block

.project
  display: flex
  flex-direction: column
  align-items: flex-start
  white-space: pre-line
  margin: 0 0 40px 0

h1, .desc, .photo, p
  color: black !important
  display: inline-block

intro 
  font-size: 1.5em
  line-height: 1.9em
  margin-bottom: 30px
  font-family: 'Open Sans', sans-serif
  font-weight: 800
  color: black

h1
  font-size: 2.1em
  line-height: 46px !important
  font-family: 'Open Sans', sans-serif
  font-weight: 800
  color: black
  width: 97%
  float: none
  clear: both !important
  padding-bottom: 15px
  margin-bottom: 20px
  border-bottom: 1px solid #DDD
  &:after
    content: ""
    display: table
    clear: both

.desc, p
  display: inline
  clear: both !important
  float: none

.desc /deep/ p 
  font-size: 1.25em !important
  line-height: 40px
  color: #000
  display: inline
  &:before
    content: ""
    display: inline-block
    clear: both

.photo 
  display: flex
  flex-direction: row
  margin: 1.4em 0 0 0 
  font-size: 1.25em
  line-height: 40px
  color: #000

.photo /deep/ p 
  &:first-child
    flex: 0 0 64%
    padding-right: 30px

.photo /deep/ img 
  width: 100% !important
  border-radius: 20px
  margin: 0 0 20px 20px


@media all and (max-width: 575px)
  div /deep/ .col_left
    width: 100% !important
  div /deep/ .col_right
    display: none
  div 
    .mains
      width: 90% !important
      margin: 0 auto !important
    /deep/ .main_left 
      width: 100% !important
      h2
        width: 100%
        font-size: 1.7em !important
        line-height: 1.5em
      ul
        -webkit-margin-before: 0px !important
        -webkit-margin-after: 0 !important
        -webkit-padding-start: 0px !important
        margin: 15px 0 0 5px !important
        list-style-position: inside !important
        p
          display: inline
    /deep/ .sidebar
      width: 90%
      margin: 4% 0 0 6% !important
      blockquote
        margin: 0 !important
        top: 10px
    /deep/ .horizontal .section 
      a
        display: flex
        align-items: center
        height: 80px
        margin: 0px 0px 10px 0
        justify-content: center
      .discipline
        width: 25% !important
        padding: 4em 0 0em 0 !important
        margin: 30px 15px 30px 0
        border-radius: 10px
        float: left !important
        &#general-surgery
          background-position: center 15px !important
          background-size: 40px !important
        &#otolaryngology
          background-position: center 15px !important
          background-size: 40px !important
        &#urology
          background-position: center 15px !important
          background-size: 45px !important
        &#obstetrics-gynaecology
          background-position: center 15px !important
          background-size: 45px !important
        &#anaesthesiology
          background-position: center 15px !important
          background-size: 45px !important
      a
        width: 100% !important
      h4
        font-size: 1.5em
        display: inline-block
        text-align: left
        width: 70%
        margin: 0
        padding: 0
    /deep/ .board
      width: 100%
    /deep/ .partner
      width: 48%
      float: left
      margin: 0 0 2% 0 !important
      &:nth-child(2n)
        margin: 0 0 2% 2% !important
    .organisations
      column-count: 1 !important
    /deep/ .modal-wrapper
      width: 90%
      .modal-container
        width: 100%
      

</style>