<template>
  <div class="gallery-section">
    <div class="gallery-container">
      <gallery-item
          :key="photo.id"
          :id="photo.id"
          v-for="photo in photos"
          :url="photo.urls.regular"
          :alt="photo.urls.alt_description"
          :user="photo.user"
      ></gallery-item>
    </div>
    <loader-box></loader-box>
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem/GalleryItem";
import LoaderBox from "@/components/LoaderBox/LoaderBox";

export default {
  name: "gallery",
  components: {
    'gallery-item': GalleryItem,
    'loader-box': LoaderBox
  },
  props: {
    photos: Array
  }
}
</script>

<style lang="scss">
.gallery-container {
  box-sizing: content-box;
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  grid-gap: 20px;
  width: 80%;
  margin: 100px auto 30px;

  .img {
    width: 100%;
    filter: grayscale(.75);
    cursor: pointer;
    transition: all .35s ease;

    img {
      width: 100%;
      max-height: 300px;
      border-radius: 5%;
      -webkit-transition: all .35s ease;
      transition: all .35s ease
    }

    &:hover {
      -webkit-filter: grayscale(0);
      filter: grayscale(0);

      img {
        -webkit-transform: scale(1.06);
        transform: scale(1.06)
      }
    }
  }
}
</style>