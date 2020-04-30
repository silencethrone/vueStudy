<template>
  <div id="app">
    <div id="cover"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view />
  </div>
</template>
<style lang="stylus" scoped>
  #app
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
  #cover
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color #999
    opacity .4
    z-index -1
</style>
