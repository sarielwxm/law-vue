<template>
  <body id="poster">
    <div>
      <nav-menu></nav-menu>
      <search-bar></search-bar>
      <router-view/>
    </div>
  </body>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
export default {
  components: {NavMenu}
}
</script>

<style>
  #poster {
    background: url("../assets/bg.jpg");
    height: 100%;
    width: 100%;
  }
</style>
