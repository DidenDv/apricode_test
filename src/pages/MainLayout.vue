<template>
  <div>
    <div class="header">
      <router-link to="/" class="logo active">
        <img src="../assets/images/logo.png" alt="logo">
      </router-link>

      <div class="menu">
        <button class="item" @click="getCategoryPhotos('all')">All</button>
        <button class="item" @click="getCategoryPhotos('animal')">Animals</button>
        <button class="item" @click="getCategoryPhotos('films')">Films</button>
        <button class="item" @click="getCategoryPhotos('food&amp;drink')">Food&amp;Drink</button>
        <button class="item" @click="getCategoryPhotos('nature')">Nature</button>
      </div>
      <search></search>
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Search from "@/components/Search/Search";

export default {
  name: 'MainLayout',
  components: {
    'search': Search,
  },
  computed: mapState(['countListPhotos']),
  methods: {
    ...mapActions(['getPhotos']),
    getCategoryPhotos(value) {
      const data = {
        type: value,
        count: this.countListPhotos
      }

      this.getPhotos(data)
    }
  }
};
</script>

<style lang="scss">
  body {
    background-color: #262626;
    overflow-x: hidden;
    color: #fff;
  }

  .search_input {
    color: #000;
    padding: 5px 15px;
  }

  .header {
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .8);
    justify-content: space-between;
    padding: 5px 15px;

    .item {
      padding: 5px;
      margin: 0 30px;
      text-transform: uppercase;
      opacity: .7;
      cursor: pointer;
      color: #fff;
      border: none;
      background: none;

      &:focus {
        outline: none;
      }

      &.active, &:hover {
        opacity: 1;
        text-decoration: underline
      }
    }

    .logo {
      width: 65px;
      height: 65px;
      justify-content: center;
      border-radius: 100%;
      opacity: .9;
      cursor: pointer;

      img {
        width: 90%;
        border-radius: 100%;
        max-height: 90%
      }

      &:hover {
        opacity: 1
      }
    }
  }

  .header, .header .logo {
    display: flex;
    align-items: center
  }
</style>
