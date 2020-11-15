<template>
  <div class="slider" :style="getRandomUrl"></div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    randomPhoto: Object
  },
  computed: {
    getRandomUrl() {
      const { full } = this.randomPhoto.urls;
      return `background-image: url(${full})`
    }
  }
}
</script>

<style lang="scss">
  .slider {
    width: 100vw;
    height: 100vh;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-filter: grayscale(.5);
    filter: grayscale(.5);
    position: relative
  }

  .slider:before {
    position: absolute;
    top: 50%;
    z-index: 10;
    left: 50%;
    font-size: 80px;
    line-height: 1;
    opacity: .7;
    color: #fff;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
  }
</style>