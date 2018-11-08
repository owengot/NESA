<template>
  <div class="sidebar">

  <div class="section">
  <h1>Subscribe to our Newsletter</h1>
  <p>Get regular updates on all the latest news and current events from NESA</p>
   <form name="contact" action="/thank-you" netlify-honeypot="bot-field" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">     
          <label>Don’t fill this out: <input name="bot-field"></label>   
        </p>
        <input class="form-field" name="name" id="name" value="name" />
        <input class="form-field" name="email" id="email" value="email" />
        <p>View our GDPR policy on Data Protection</p>
        <input class="form-button" type="submit" value="Subscribe" />
      </form>
    </div>

  <div class="section">
  <h1>Follow us</h1>

  </div>

  <div class="section">

  <h1>Get in touch</h1>
   <form name="contact" action="/thank-you" netlify-honeypot="bot-field" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">     
          <label>Don’t fill this out: <input name="bot-field"></label>   
        </p>
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">
          Message:
        </label>
        <textarea class="form-field" name="message" id="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.hidden {
  display: none;
}
form {
  width: 90%;
  margin: 0px auto 20px;
}
input {
  width: 100%;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #efefef;
  font-size: 1.3rem;
  padding: 10px 10px;
  margin: 5px auto !important;
  font-size: 16px;
}
.form-button {
  color: white;
  background: #016895;
  font-size: 15px;
  padding: 10px 0;
}
.sidebar {
  width: 100%;
  float: left;
  height: 100%;
  h1 {
    color: white;
    background: #016895;
    display: inline-block;
    width: 100%;
    margin: 0 0 20px 0;
    padding: 15px 20px;
    border-radius: 10px 10px 0 0;
  }
  p {
    color: black;
    width: 90%;
    margin: 0 auto;
    line-height: 25px;
  }
  .section {
    margin: 0px auto 20px;
    border: 1px solid #efefef;
    border-radius: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      openMenu: false,
      menu: [
        { href: "/about", title: "About" },
        { href: "/news", title: "News" },
        { href: "/projects", title: "Projects" },
        { href: "/events", title: "Events" },
        { href: "/publications", title: "Publications" },
        { href: "/contact", title: "Contact" }
      ]
    };
  },
  methods: {
    isActive(link) {
      return this.$route.fullPath === link.href;
    }
  },
  props: ["result"]
};
</script>
