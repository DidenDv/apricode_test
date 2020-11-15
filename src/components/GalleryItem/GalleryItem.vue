<template>
  <router-link class="photo-item" :to="{ name: 'Card', params: { url, user }}">
    <div class="img">
      <img :src="url" :alt="alt">
    </div>
  </router-link>
</template>

<script>
export default {
 name: "GalleryItem",
  props: {
   url: String,
   alt: String,
    id: String,
    user: Object
  }
}
</script>

<style lang="scss" scoped>
.photo-item {
  width: 100%;
  overflow: hidden;
  max-height: 300px;
  justify-content: center;
  box-sizing: border-box;
  align-self: center;
  position: relative
}
</style>