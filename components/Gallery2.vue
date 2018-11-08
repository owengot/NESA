<template>

  <div>

    <mediumZoom>
      <div class="container">

        <nuxt-img src="/images/pedagogy.jpg" image-style="small" alt="Never forget alt tags!" />

      </div>
    </mediumZoom>
  </div>
</template>

<script>


export default {
  props: {
    project: { type: String, default: "" }
  }
};
</script>

<style>
.container img {
  margin: 0 2% 0 0;
  width: 23%;
  float: left;
  height: 200px;
  display: inline-block;
}

.fluidbox__ghost {
  border-radius: 5px;
}

.gallery a picture img {
  opacity: 0;
  visibility: hidden;
  width: 100%;
}

#image-caption {
  position: fixed;
  bottom: 0%;
  width: 100%;
  left: 0;
  right: 0;
  opacity: 0;
  padding: 1rem 0;
  background-color: hsla(198, 100%, 21.6329%, 1);
  z-index: 1011;
  color: white !important;
  font-family: "Exo 2";
  text-align: center;
  transition-delay: 2s !important;
  transition: all 20s !important;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.visible {
  animation: slidein 0.45s ease forwards;
  animation-delay: 0s;
}

@keyframes slidein {
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@-webkit-keyframes a {
  0% {
    -webkit-transform: translate(-50%, -50%) rotateX(0) rotateY(0);
    transform: translate(-50%, -50%) rotateX(0) rotateY(0);
  }
  50% {
    -webkit-transform: translate(-50%, -50%) rotateX(-180deg) rotateY(0);
    transform: translate(-50%, -50%) rotateX(-180deg) rotateY(0);
  }
  to {
    -webkit-transform: translate(-50%, -50%) rotateX(-180deg) rotateY(-180deg);
    transform: translate(-50%, -50%) rotateX(-180deg) rotateY(-180deg);
  }
}
@keyframes a {
  0% {
    -webkit-transform: translate(-50%, -50%) rotateX(0) rotateY(0);
    transform: translate(-50%, -50%) rotateX(0) rotateY(0);
  }
  50% {
    -webkit-transform: translate(-50%, -50%) rotateX(-180deg) rotateY(0);
    transform: translate(-50%, -50%) rotateX(-180deg) rotateY(0);
  }
  to {
    -webkit-transform: translate(-50%, -50%) rotateX(-180deg) rotateY(-180deg);
    transform: translate(-50%, -50%) rotateX(-180deg) rotateY(-180deg);
  }
}
.fluidbox {
  outline: none;
}
.fluidbox__overlay {
  background-color: hsla(0, 0%, 100%, 0.85);
  cursor: pointer;
  cursor: zoom-out;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: -100%;
  left: 0;
  bottom: -100%;
  right: 0;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.fluidbox--opened .fluidbox__overlay {
  pointer-events: auto;
  z-index: 99 !important;
}
.fluidbox__wrap {
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  position: relative;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.fluidbox--closed .fluidbox__thumb,
.fluidbox__thumb {
  -webkit-transition: opacity 0s ease-in-out 0s;
  transition: opacity 0s ease-in-out 0s;
}
.fluidbox__ghost {
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 100 !important;

  -webkit-transition: opacity 0s 0s, -webkit-transform 0.5s 0s;
  transition: opacity 0s 0s, -webkit-transform 0.5s 0s;
  transition: opacity 0s 0s, transform 0.5s 0s;
  transition: opacity 0s 0s, transform 0.5s 0s, -webkit-transform 0.5s 0s;
}
.fluidbox--opened .fluidbox__ghost {
  cursor: pointer;
  cursor: zoom-out;
}
.fluidbox--closed .fluidbox__ghost {
  -webkit-transition: opacity 0s 0.5s, -webkit-transform 0.5s 0s;
  transition: opacity 0s 0.5s, -webkit-transform 0.5s 0s;
  transition: opacity 0s 0.5s, transform 0.5s 0s;
  transition: opacity 0s 0.5s, transform 0.5s 0s, -webkit-transform 0.5s 0s;
}
.fluidbox__loader {
  opacity: 0;
  -webkit-perspective: 200px;
  perspective: 200px;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.fluidbox__loader:before {
  background-color: hsla(0, 0%, 100%, 0.85);
  content: "";
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  padding-bottom: 20%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.fluidbox--loading .fluidbox__loader {
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in-out 0.5s;
  transition: opacity 0.5s ease-in-out 0.5s;
}
.fluidbox--loading .fluidbox__loader:before {
  -webkit-animation: a 1s 0s infinite ease-in-out forwards;
  animation: a 1s 0s infinite ease-in-out forwards;
}
/*# sourceMappingURL=fluidbox.min.css.map */
</style>