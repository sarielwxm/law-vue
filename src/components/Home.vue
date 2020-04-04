<template>
    <div>
      <nav-menu></nav-menu>
      <search-bar></search-bar>
      <router-view/>
    </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
export default {
  components: {NavMenu}
}
</script>

<style scoped>

</style>
