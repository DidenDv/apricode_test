<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: content-box;
  margin: 0;
  padding: 0
}

body {
  background-color: #262626;
  overflow-x: hidden;
  color: #fff
}

.main-loader-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-loader {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border-color: transparent #fff;
    border-style: solid;
    border-width: 3px;
    -webkit-animation: rotate 1s linear infinite;
    animation: rotate 1s linear infinite
  }
}

@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}

</style>
