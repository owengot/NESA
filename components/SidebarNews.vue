<template>
  <div class="sidebar">

    <div class="section">
      <h1>Subscribe to our Newsletter</h1>
      <p>Get regular updates on all the latest news and current events from NESA</p>
      <form
        name="contact"
        action="/thank-you"
        netlify-honeypot="bot-field"
        method="post"
        netlify
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <input
          class="form-field"
          name="name"
          id="name"
          placeholder="Your name"
        />
        <input
          class="form-field"
          name="email"
          id="email"
          placeholder="Your email address"
        />
        <input
          class="form-button"
          type="submit"
          value="Subscribe"
        />
      </form>

      <p class="gdpr">View our GDPR policy on Data Protection</p>

    </div>

    <div class="section">
      <h1>Follow us</h1>

      <div class="social">
        <a
          href="twitter.com/nesa"
          class="twitter"
        ></a>
        <a
          href="twitter.com/nesa"
          class="rss"
        ></a>

      </div>

    </div>

    <div class="section">

      <h1>Get in touch</h1>
      <form
        name="contact"
        action="/thank-you"
        netlify-honeypot="bot-field"
        method="post"
        netlify
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>

        <input
          class="form-field"
          name="name"
          id="name"
          placeholder="Your Name"
        />

        <input
          class="form-field"
          name="email"
          id="email"
          placeholder="Your Email Address"
        />
        <textarea
          class="form-field"
          name="message"
          id="message"
          placeholder="Your Message"
        ></textarea>
        <input
          class="form-button"
          type="submit"
          value="Send message"
        />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.gdpr {
  border: 1px solid #d5d5d580;
  background: #fafafa;
  color: #016895 !important;
  font-size: 0.98em !important;
  padding: 10px 20px;
  display: inline-block;
  width: auto;
  margin: 0px 20px 20px !important;
  border-radius: 10px;
}

.social {
  display: inline-block;
  margin: 0px 18px 10px;
}
.social a {
  width: 50px;
  height: 50px;
  display: inline-block;
  float: left;
  background-color: #016895;
  border-radius: 100%;
}
a.twitter {
  background: url("data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fab' data-icon='twitter' class='svg-inline--fa fa-twitter fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='#fff' d='M459 152l1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z'/%3E%3C/svg%3E")
    center no-repeat #016895;
  background-size: 27px;
  margin-right: 10px;
}
a.rss {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 32 40'%3E%3Cpath fill='#fff' d='M6 22a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM5 2a3 3 0 1 0 0 6c10 0 19 9 19 19a3 3 0 1 0 6 0C30 13 19 2 5 2zm0 10a3 3 0 1 0 0 6c5 0 9 4 9 9a3 3 0 1 0 6 0c0-8-7-15-15-15z'/%3E%3C/svg%3E")
    center 11px no-repeat #016895;
  background-size: 27px;
  margin-right: 10px;
}
form {
  width: 90%;
  margin: 10px auto 20px;
}
input, textarea {
  width: 100%;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #efefef;
  font-family: "Open Sans";
  font-size: 1.1em;
  padding: 15px 10px 15px 15px;
  margin: 5px auto !important;
  transition: border 1s ease;
}
input:focus, textarea:focus {
  outline: none !important;
  border: 1px solid #016895;
}
.form-button {
  color: #016895;
  background: #fafafa;
  border: 1px solid #d5d5d580;
  font-size: 1.15em;
  padding: 12px 0;
  margin: 10px auto 0 !important;
}
.sidebar {
  width: 100%;
  float: left;
  height: 100%;
  h1 {
    color: #016895;
    background: #fafafa;
    display: inline-block;
    font-family: "Open Sans";
    width: 100%;
    font-size: 1.3em;
    margin: 0 0 15px 0;
    padding: 15px 20px;
    border-bottom: 1px solid #efefef;
    border-radius: 10px 10px 0 0;
  }
  p {
    color: black;
    font-family: "Open Sans";
    width: 90%;
    font-size: 1.2em;
    font-weight: 300;
    letter-spacing: 0px;
    margin: 0 auto;
    line-height: 30px;
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
