<template>
  <div>
    <side-menu id="side-menu"></side-menu>
    <div class="home">
      <div id="header-div">
        <div style="height: 150px"></div>
        <carousel></carousel>
        <quick-nav style="float: right;margin-top: -450px;margin-right: 480px"></quick-nav>
      </div>
      <update-card id="update-card"></update-card>
      <slogan id="slogan"></slogan>
      <about id="about"></about>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel'
import UpdateCard from './UpdateCard'
import SideMenu from './SideMenu'
export default {
  name: 'AppIndex',
  components: {Carousel, UpdateCard, SideMenu}
}
</script>

<style scoped>

</style>
