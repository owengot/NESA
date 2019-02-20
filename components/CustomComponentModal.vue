<template id="modal-template">
  <transition name="modal">

    <body>
      <div
        class="modal-mask"
        @click="$emit('close'); closeModal();"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="$emit('close'); closeModal();"
            >
            </button>

            <div class="modal-content">
              <div class="modal-header">
                <slot name="header">
                  <h1> {{ title }} </h1>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="introduction">
                  <p>{{ introduction }}</p>
                </slot>
                <slot name="body">

                  <div
                    v-for="(key, value) in orderedUsers"
                    :key='value'
                  >

                    <h1> {{ value }} </h1>

                    <div
                      v-for="user in key"
                      :key='user'
                      class="user"
                    >

                      <p v-if="user.url"><a
                          :href="user.url"
                          target="_blank"
                        >{{ user.first_name }} {{ user.last_name }}</a> ({{ user.location }})<span v-if="value != user.discipline">, {{ user.discipline }} </span></p>

                      <p v-if="user.position">{{ user.title }} {{ user.first_name }} {{ user.last_name }} </p>

                      <p v-else>{{ user.first_name }} {{ user.last_name }} ({{ user.location }})<span v-if="value != user.discipline">, {{ user.discipline }} </span> </p>

                    </div>

                  </div>

                </slot>
              </div>

            </div>

          </div>
        </div>
      </div>
    </body>
  </transition>
</template>
<script>
import orderBy from "lodash.orderby";

export default {
  name: "Modal_Adaptive",
  props: ["title", "entries", "introduction"],
  methods: {
    closeModal() {
      document.documentElement.style.overflow = "auto";
    }
  },
  computed: {
    orderedUsers: function() {
      if (
        this.title === "Diplomats" ||
        this.title === "The International Board"
      ) {
        let users = orderBy(this.entries, "last_name");

        const map1 = users.map(x => x.last_name.substring(0, 1));

        const letters = map1.filter(function(item, index) {
          return map1.indexOf(item) >= index;
        });

        const groups = {};

        // create groups containers from names
        letters.forEach(k => {
          groups[k] = [];
        });

        users.forEach(k => {
          const user = k.last_name.substring(0, 1);
          groups[user].push(k);
        });

        return groups;
      } else if (this.title === "Country Representatives") {
        let users = orderBy(this.entries, "country");

        const map1 = users.map(x => x.country);

        const countries = map1.filter(function(item, index) {
          return map1.indexOf(item) >= index;
        });

        const groups = {};

        // create groups containers from names
        countries.forEach(k => {
          groups[k] = [];
        });

        users.forEach(k => {
          const user = k.country;
          groups[user].push(k);
        });

        return groups;
      } else if (this.title === "The Executive Board") {
        let users = this.entries;

        const map1 = users.map(x => x.position);

        const countries = map1.filter(function(item, index) {
          return map1.indexOf(item) >= index;
        });

        const groups = {};

        // create groups containers from names
        countries.forEach(k => {
          groups[k] = [];
        });

        users.forEach(k => {
          const user = k.position;
          groups[user].push(k);
        });

        return groups;
      } else {
        let users = orderBy(this.entries, "discipline");

        const map1 = users.map(x => x.discipline);

        const letters = map1.filter(function(item, index) {
          return map1.indexOf(item) >= index;
        });

        const groups = {};

        // create groups containers from names
        letters.forEach(k => {
          groups[k] = [];
        });

        users.forEach(k => {
          const user = k.discipline;
          groups[user].push(k);
        });

        return groups;
      }
    }
  }
};
</script>
<style scoped>
body {
  overflow: hidden;
}
.modal-container {
  font-family: "Open Sans" !important;
  position: relative;
}

.modal-default-button {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='%23016895' d='M49.5 90.1c-22.1 0-40.1-18-40.1-40.1s18-40.1 40.1-40.1 40.1 18 40.1 40.1-18 40.1-40.1 40.1zm17-23.1c1.6-1.6 1.6-4.1 0-5.7L55.2 50l11.3-11.3c1.6-1.6 1.6-4.1 0-5.7a3.98 3.98 0 0 0-5.7 0L49.5 44.3 38.2 33a3.98 3.98 0 0 0-5.7 0 3.98 3.98 0 0 0 0 5.7L43.8 50 32.5 61.3a3.98 3.98 0 0 0 0 5.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3L60.8 67c1.6 1.6 4.1 1.6 5.7 0z' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E")
    30px no-repeat;
  background-color: #fff;
  background-position: -2px -2px !important;
  width: 50px;
  border: none;
  height: 50px;
  background-size: 53px !important;
  border-radius: 30px;
  position: absolute;
  top: -15px;
  left: -20px;
}
.modal-default-button:focus {
  outline: none;
}

.modal-default-button:hover {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='%23005478' d='M49.5 90.1c-22.1 0-40.1-18-40.1-40.1s18-40.1 40.1-40.1 40.1 18 40.1 40.1-18 40.1-40.1 40.1zm17-23.1c1.6-1.6 1.6-4.1 0-5.7L55.2 50l11.3-11.3c1.6-1.6 1.6-4.1 0-5.7a3.98 3.98 0 0 0-5.7 0L49.5 44.3 38.2 33a3.98 3.98 0 0 0-5.7 0 3.98 3.98 0 0 0 0 5.7L43.8 50 32.5 61.3a3.98 3.98 0 0 0 0 5.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3L60.8 67c1.6 1.6 4.1 1.6 5.7 0z' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E")
    30px no-repeat #fff;
  cursor: pointer;
}
h1 {
  margin: 10px 0;
  font-size: 2.1em;
  line-height: 46px !important;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  color: black;
  clear: both;
  padding-bottom: 10px;
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
}

p {
  font-size: 1.25em;
  line-height: 35px;
  color: #000;
}
.user {
  margin: 10px 0 5px 0;
}
.bold {
  font-weight: bold;
}
.entry {
  margin: 0 0 20px 0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden !important;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  width: 500px;
  height: 90%;
}
.modal-content {
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 0px 20px;

  display: inline-block;
  overflow: scroll;
}
.modal-container {
  width: 500px;
  margin: 10% auto;
  height: 80%;
  padding: 10px 10px 10px;

  display: block;
  background-color: #fff;
  color: black;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 20px;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>