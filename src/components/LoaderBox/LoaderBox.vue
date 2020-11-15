<template>
  <div class="loader-box">
    <span @click="onShowMore" class="glyphicon glyphicon-refresh loader"></span>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoaderBox",
  methods: mapActions(['onShowMore']),
}
</script>

<style scoped lang="scss">
.loader-box {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    font-size: 30px;
    cursor: pointer;

    &:hover {
      opacity: .7
    }

    &.active {
      -webkit-animation: rotate 1s linear infinite;
      animation: rotate 1s linear infinite
    }
  }
}

</style>