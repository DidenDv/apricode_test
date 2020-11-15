<template>
  <div class="wrapper">
    <banner v-if="randomPhoto" :randomPhoto="randomPhoto"></banner>
    <gallery v-if="photos" :photos="photos"></gallery>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Gallery from "../components/Gallery/Gallery";
import Banner from "@/components/Banner/Banner";

export default {
  name: 'Home',
  components: {
    'gallery': Gallery,
    'banner': Banner
  },
  data() {
    return {
      data: {
        type: 'all',
        count: this.countListPhotos
      }
    }
  },
  watch: {
    countListPhotos(val, oldVal) {
      if (val !== oldVal) {
        this.getPhotos({type: 'all', count: this.countListPhotos})
      }
    }
  },
  computed: mapState(['photos', 'randomPhoto', 'countListPhotos']),
  methods: mapActions(['getPhotos', 'getRandomPhoto']),
  async mounted() {
    await Promise.all([this.getPhotos({type: 'all', count: this.countListPhotos}), this.getRandomPhoto()]);
  }
};
</script>
