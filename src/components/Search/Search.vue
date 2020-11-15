<template>
  <div class="search">
    <input @input="onSearch" class="search_input" type="text" v-model="value" placeholder="search">
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import debounce from "lodash.debounce";

export default {
 name: "Search",
  data() {
    return {
      value: '',
    }
  },
  computed: mapState(['countListPhotos']),
  methods: {
   ...mapActions(['getPhotos']),
    onSearch: debounce(function() {
      const query = this.value.trim();

      if (query) {
        this.getPhotos({type: query, count: this.countListPhotos})
      } else {
        this.getPhotos({type: 'all', count: this.countListPhotos})
      }

    }, 300),
  }
}
</script>

<style scoped>

</style>