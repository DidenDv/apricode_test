<template>
  <div class="photo-card-section">
    <div @click="goBack" class="backTo">back to prev page</div>
    <div class="slider" :style="getUrl">
      <div class="fullname">
        <router-link :to="{ name: 'Author', params: { user: getUser }}">{{ getUserName }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    getUrl() {
      const { url } = this.$route.params;
      return `background-image: url(${url});`
    },
    getUserName() {
      const { name } = this.$route.params.user;
      return name;
    },
    getUser() {
      const { user } = this.$route.params;
      return user;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-card-section {
  position: relative;

  .fullname {
    position: absolute;
    bottom: 35px;
    left: 35px;
    font-weight: 700;
    background-color: #fff;
    padding: 15px;
    color: #000
  }
}

.backTo {
  position: fixed;
  left: 50px;
  top: 120px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    text-decoration: underline
  }
}
</style>
