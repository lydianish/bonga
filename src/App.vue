<template>
  <div id="app">
    <header-section></header-section>
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderSection from '@/components/header'

export default {
  name: 'App',
  components: {
    HeaderSection
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
body{
  display: flex;
  flex-direction: column;
  margin: 0;
   font-family: 'Roboto', sans-serif;
}
</style>
