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
      <div id="update-card1">
        <update-card1></update-card1>
      </div>
      <update-card2 id="update-card2"></update-card2>
      <update-card3 id="update-card3"></update-card3>
      <slogan id="slogan"></slogan>
      <about id="about"></about>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel'
import UpdateCard from './UpdateCard'
import UpdateCard1 from './UpdateCard1'
import UpdateCard2 from './UpdateCard2'

export default {
  name: 'AppIndex',
  components: {Carousel, UpdateCard, UpdateCard1, UpdateCard2}
}
</script>

<style scoped>

</style>
