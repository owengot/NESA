<template>
  <header>
    <div id="main-menu">
      <a href="/">
        <div id="logo">
          <h1 class="title">NESA</h1>
          <p class="caption">New European Surgical Academy</p>
        </div>
      </a>

      <div class="mobileMenu" v-on:click="showMobileMenu = !showMobileMenu">
        <p>Menu</p>
        <div id="toggle" :class="{ open: showMobileMenu }">
          <span></span>
        </div>
      </div>
      <ul id="menu" v-bind:class="{ opened: showMobileMenu }">
        <li v-for="link in menu" :key="link.title" v-on:click="showMobileMenu = !showMobileMenu">
          <nuxt-link
            :to="link.href"
            v-bind:class="{ active: isActive(link) }"
            :key="link.title"
          >{{link.title}}</nuxt-link>
        </li>
        <li>
          <a href="http://connect.nesacademy.org/">Log In</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
li a.active {
  color: #016895 !important;
}

header {
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0px;
  z-index: 99999;
}

#homepage header {
  animation: draw-down 1s ease forwards;
  top: -90px;
}

#main-menu {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#dfdfdf),
    color-stop(40%, #ffffff)
  );
  background-image: linear-gradient(0deg, #dfdfdf 0%, #ffffff 40%);
  -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  border-bottom: 1px solid #efefef;
  padding: 6px 0;
  font-family: "Exo 2";
  width: 97%;
  height: 80px;
  margin: 0 auto;
}

#main-menu #logo {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='221' height='221'%3E%3Cdefs%3E%3Cpath id='a' d='M77 105H11V77h38a16.6 16.6 0 0 0-2.7 9c0 10 12.8 14.7 30.7 17v2z'/%3E%3Cpath id='b' d='M77 144H11v-28h38a16.6 16.6 0 0 0-2.7 9c0 10 12.8 14.7 30.7 17v2z'/%3E%3C/defs%3E%3Cg fill='%23016895' fill-rule='evenodd'%3E%3Cpath d='M40.7 105H0a110.5 110.5 0 1 1 0 11h40.7a71.1 71.1 0 1 0 0-11z'/%3E%3Cuse xlink:href='%23a'/%3E%3Cuse transform='matrix(1 0 0 -1 0 260)' xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E")
    no-repeat 10px center;
  background-size: 53px;
  width: 350px;
  height: 70px;
  padding-left: 74px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  float: left;
  -webkit-box-align: left;
  -ms-flex-align: left;
  align-items: left;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: -1px 0 0 4px;
}

#main-menu #menu {
  float: right !important;
  text-align: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0em 0 0 0;
  font-size: 1.04em;
  margin: 8px 10px 0 0;
  font-weight: 100 !important;
  background: none;
  box-shadow: none;
  line-height: 35px;
}

#main-menu #menu li {
  display: inline-block;
  padding: 0.6em 1.3em 1em 1.3em;
  height: 100%;
  border-right: 1px solid #efefef;
  margin: 0 0 0 -4px;
  border-width: 0px 1px 0px 0px;
  -o-border-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #dbdbdb 25%,
      #dbdbdb 75%,
      rgba(237, 237, 237, 0.19) 100%
    )
    1 100%;
  border-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0)),
      color-stop(25%, #dbdbdb),
      color-stop(75%, #dbdbdb),
      to(rgba(237, 237, 237, 0.19))
    )
    1 100%;
  border-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #dbdbdb 25%,
      #dbdbdb 75%,
      rgba(237, 237, 237, 0.19) 100%
    )
    1 100%;
}

#main-menu #menu li:last-child {
  border: none;
}

#main-menu #menu li a {
  text-decoration: none;
  color: black;
  letter-spacing: 0px;
  font-size: 1.2em;
  position: relative;
}

#main-menu #menu li a:hover {
  background: none !important;
}

#main-menu #menu li a::after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  bottom: -4px;
  height: 2px;
  background: #016895;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
}

#main-menu #menu li:hover a {
  font-weight: 400 !important;
  color: #016895;
  -webkit-transition: none;
  transition: none;
}

#main-menu #menu li:hover a::after {
  width: 100%;
}

#main-menu #menu li a.active::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  bottom: -4px;
  height: 2px;
  background: #016895;
}

#main-menu h1.title {
  font-size: 1.9em !important;
  font-weight: 600 !important;
  line-height: 20px !important;
  margin: 15px 0 0 !important;
  color: #016895 !important;
  padding: 0 !important;
  border: none !important;
  text-align: left !important;
  font-family: "Exo 2" !important;
}

#main-menu p.caption {
  line-height: 20px !important;
  padding: 0 !important;
  font-size: 18px !important;
  margin: 6px 0 0 !important;
  color: #016895 !important;
}

#main-menu .contact {
  float: right;
  position: absolute;
  right: 35px;
  border: 0.5px solid rgba(1, 104, 149, 0.2);
  background: rgba(0, 0, 0, 0.05);
  padding: 5px 10px;
  border-radius: 0 0 4px 4px;
  top: -1px;
  font-family: "Exo 2";
  font-weight: 400;
  font-size: 13px;
  color: rgba(4, 155, 229, 1);
}

#main-menu .contact a {
  text-decoration: none;
  color: #016895;
}

.mobileMenu {
  display: none;
}

@media all and (max-width: 1280px) {
  #main-menu #logo {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='221' height='221'%3E%3Cdefs%3E%3Cpath id='a' d='M77 105H11V77h38a16.6 16.6 0 0 0-2.7 9c0 10 12.8 14.7 30.7 17v2z'/%3E%3Cpath id='b' d='M77 144H11v-28h38a16.6 16.6 0 0 0-2.7 9c0 10 12.8 14.7 30.7 17v2z'/%3E%3C/defs%3E%3Cg fill='%23016895' fill-rule='evenodd'%3E%3Cpath d='M40.7 105H0a110.5 110.5 0 1 1 0 11h40.7a71.1 71.1 0 1 0 0-11z'/%3E%3Cuse xlink:href='%23a'/%3E%3Cuse transform='matrix(1 0 0 -1 0 260)' xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E")
      no-repeat 10px center;
    background-size: 45px;
    padding-left: 65px;
    width: 110px !important;
  }
  #main-menu h1.title {
    width: 70px;
    margin: 25px 0 0 !important;
  }

  #main-menu .caption {
    display: none !important;
  }
}

@media all and (max-width: 1070px) {
  #main-menu h1.title {
    margin: 18px 0 0 0 !important;
    width: 270px;
  }

  #main-menu .caption {
    display: block !important;
  }

  .mobileMenu {
    display: block;
  }

  #main-menu #logo {
    width: 320px !important;
  }

  #main-menu p.caption {
    display: block;
    font-size: 1em !important;
    margin-top: 6px !important;
  }

  .mobileMenu {
    width: 150px;
    float: right;
    height: 100%;

    p {
      margin: 20px 22px 0 0;
      font-size: 1.4em;
      float: right;
      color: rgba(6, 102, 144, 1);
      font-weight: 800;
      position: relative;
      z-index: 999999;
    }
    &:hover {
      cursor: pointer;
    }
  }
  #toggle {
    position: absolute;
    z-index: 3;
    width: 1.8em;
    display: block;
    height: 1em !important;
    top: 22px;
    right: 110px;
    cursor: pointer;
  }

  #toggle span {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.14em;
    margin: 1.05em 0 0 0;
    background: #016895;
    border-radius: 20px;
    -webkit-transition: 100ms ease background-color;
    -moz-transition: 100ms ease background-color;
    transition: 100ms ease background-color;
  }
  #toggle span:before,
  #toggle span:after {
    content: " ";
    position: absolute;
    border-radius: 20px;
    width: 100%;
    height: 0.14em;
    background: #016895;
    -webkit-transition: 350ms ease transform;
    -moz-transition: 350ms ease transform;
    transition: 350ms ease transform;
  }
  #toggle span:before {
    margin: -0.5em 0 0 0;
  }
  #toggle span:after {
    margin: 0.5em 0 0 0;
  }
  #toggle.open span {
    background-color: transparent;
  }
  #toggle.open span:before,
  #toggle.open span:after {
    margin: 0;
    background: #016895;
  }
  #toggle.open span:before {
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  #toggle.open span:after {
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  #main-menu #menu {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    list-style: none;
    display: block;
    width: 100% !important;
    margin: 0 !important;
    padding-top: 45px;
    top: 0;
    left: 0;
    text-align: center;
    background: #fff;
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-transition: 350ms ease all;
    -moz-transition: 350ms ease all;
    transition: 350ms ease all;
  }
  #main-menu #menu.opened {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 350ms ease all;
    -moz-transition: 350ms ease all;
    transition: 350ms ease all;
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    position: fixed;
    overflow: scroll;
    height: 100vh;
  }
  #main-menu #menu span#title {
    display: block;
    line-height: 1em;
    margin: 0 0 0.5em 0;
    font-size: 5em;
    color: #286efa;
  }

  #main-menu #menu li {
    display: inline-block;
    width: 100% !important;
    height: auto;
    float: none !important;
    clear: both !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 1.3em;
  }
  #main-menu #menu li a {
    display: inline-block;
    width: 100% !important;
    padding: 25px 0 25px 0 !important;
    margin: 0 !important;
    border-bottom: 1px solid #ddd !important;
  }

  #main-menu #menu li a::after {
    background: none;
  }
}

@media all and (max-width: 500px) {
  #main-menu .caption {
    display: none !important;
  }
  #main-menu h1.title {
    margin: 25px 0 0 0 !important;
    width: 70px;
  }
  #main-menu #logo {
    width: 100px !important;
  }
  .mobileMenu {
    width: 110px;
    float: right;
    height: 40px;
    padding: 9px 12px 10px;
    border: 1.4px solid rgba(6, 102, 144, 1);
    border-radius: 10px;
    margin: 16px 20px 0px 0 !important;
    position: relative;
    z-index: 9999;
    p {
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      font-size: 1em;
      font-weight: 400;
    }
  }
  #toggle {
    position: relative;
    z-index: 3;
    width: 1.8em;
    display: block;
    height: 1em !important;
    float: left;
    margin: 0 !important;
    left: 0px !important;
    top: -6px !important;
    transform: scale(0.8);
    cursor: pointer;
  }
}
</style>

<script>
export default {
  data() {
    return {
      openMenu: false,
      showMobileMenu: false,
      menu: [
        { href: "/about", title: "About" },
        { href: "/news", title: "News" },
        { href: "/projects", title: "Projects" },
        { href: "/pedagogy", title: "Pedagogy" },
        { href: "/events", title: "Events" },
        { href: "/publications", title: "Publications" },
        { href: "/contact", title: "Contact" }
      ]
    };
  },
  methods: {
    isActive(link) {
      return this.$route.fullPath === link.href;
    },

    toggleMenu: function() {
      var toggle = document.getElementById("#toggle");
      var menu = document.getElementById("#menu");
      toggle.classList.add("open");
      menu.classList.add("opened");
    }
  }
};
</script>
