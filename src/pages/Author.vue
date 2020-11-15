<template>
  <div class="user-card-section">
    <div class="user-photo"><img :src="getPhotoUrl" alt=""></div>
    <div class="user-information">
      <p class="name">Fullname: {{ getFullName }}</p>
      <p>Collections: {{ getUserInfo.total_collections }}</p>
      <p>Likes: {{ getUserInfo.total_likes }}</p>
      <p>Total photos: {{ getUserInfo.total_photos }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Author",
  computed: {
    getUserData() {
      return this.$route.params.user
    },
    getUserInfo() {
      const { total_collections, total_likes, total_photos } = this.getUserData;
      return { total_collections, total_likes, total_photos };
    },
    getPhotoUrl() {
      const { profile_image: { large } } = this.getUserData;
      return large;
    },
    getFullName() {
      const { first_name, last_name } = this.getUserData;
      return `${first_name} ${last_name}`;
    }
  }
}
</script>

<style lang="scss">
.user-card-section {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  text-align: center
}
</style>