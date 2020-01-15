<template>
    <div>
      <nav-menu></nav-menu>
      <search-bar></search-bar>
      <router-view/>
    </div>
</template>

<script>
import NavMenu from './common/NavMenu'
import SearchBar from './common/SearchBar'
export default {
  name: 'Home',
  components: {SearchBar, NavMenu}
}
</script>

<style scoped>

</style>
