<template>
  <div class="mains">
    
    <div id="test">

      <div class="block">
      <div class="col_left">
      <h1>{{ about.title }}</h1>
      <p v-html="$md.render(about.description)"></p>
      </div>
      <div class="col_right">
        <blockquote>{{ about.quote }}</blockquote>
      </div>
      </div>

      <div class="section">
        <h1>Background</h1>

        <p>The following disciplines are represented in the NESA.</p>

        <Disciplines
          :links="links"
          :vertical="'false'"
        />

      </div>

      <div class="section">
        <h1>Structure</h1>

        <div
          v-if="project.boards"
          v-for="project in aboutold.projects"
          v-bind:key="project"
          class="section boards"
        >

          <Board
            v-for="board in project.boards"
            :project="board"
            v-bind:key="board"
          />

        </div>

        <p>All other members are voluntary members, should identify with the aims and goals of the NESA and are appointed for limited periods.</p>

      </div>

      <div class="section">
        <h1>The diplomats</h1>

        <p>The professional diplomats function as correspondents for certain disciplines such as breast surgery and gynaecological or surgical endoscopy. The regional diplomats function as correspondents in various institutions, hospitals or regions and supervise studies in their region.</p>

        <div
          v-if="project.diplomats"
          v-for="project in aboutold.projects"
          v-bind:key="project"
        >

          <button
            id="show-modal"
            @click="openModal(); modalContent = project.diplomats[0]; modalTitle = 'Diplomats'"
          >View all Diplomats</button>

        </div>

      </div>

      <div
        v-if="project.partners"
        v-for="project in aboutold.projects"
        v-bind:key="project"
        class="section partners"
      >

        <h1>{{ project.partners[0].title }}</h1>

        <p>{{ project.partners[0].introduction }}</p>

        <div class="featured_partners">
          <a
            v-for="partner in project.partners[0].featured_partners"
            class="partner"
            v-bind:key="partner"
            :href="partner.url"
            :style="{ 'background-image': 'url(' + partner.logo + ')' }"
          > </a>
        </div>

        <button
          id="show-modal"
          @click="openModal(); modalContent = project.partners[0]; modalTitle = 'Partners'"
        >View all Partners</button>

      </div>

      <div
        v-if="project.country_representatives"
        v-for="project in aboutold.projects"
        v-bind:key="project"
        class="section representatives"
      >

        <h1>{{ project.country_representatives[0].title }}</h1>

        <p>{{ project.country_representatives[0].introduction }}</p>

        <button
          id="show-modal"
          @click="openModal(); modalContent = project.country_representatives[0]; modalTitle = 'Country Representatives'"
        >View all Representatives</button>

      </div>

      <div
        v-if="project.honorary_members"
        v-for="project in aboutold.projects"
        v-bind:key="project"
        class="section members"
      >

        <h1>{{ project.honorary_members[0].title }}</h1>

        <p>{{ project.honorary_members[0].introduction }}</p>

      </div>

      <div
        v-if="project.cooperations"
        v-for="project in projects"
        v-bind:key="project"
        class="section cooperations"
      >

        <h1>{{ project.cooperations[0].title }}</h1>

        <p>{{ project.cooperations[0].introduction }}</p>

        <div class="organisations">
          <ul
            v-for="entry in project.cooperations[0].entries"
            :key="entry"
          >

            <li> {{ entry.title }} </li>

          </ul>
        </div>

      </div>

    </div>

    <CustomComponentModal
      v-if="showModal"
      @close="showModal = false"
      :title='modalTitle'
      :content='modalContent'
    >

    </CustomComponentModal>

  </div>
</template>

<script>
import Disciplines from "~/components/SidebarProjects.vue";
import Project from "~/components/Project.vue";
import Board from "~/components/Board.vue";
import CustomComponentModal from "~/components/CustomComponentModal.vue";
import aboutold from '~/content/about/index.json';
import about from '~/content/pages/about.json';

export default {
  layout: "about",
  components: {
    CustomComponentModal,
    Disciplines,
    Project,
    Board
  },
  pageHeader: about.image,
  pageTitle: "about",
  data() {
    return {
      title: "",
      showModal: false,
      aboutold,
      about,
      modalTitle: "",
      modalContent: "",
      body: "",
      thumbnail: "",
      date: "",
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
    display: block
    ul 
      width: 90%
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