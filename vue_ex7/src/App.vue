<template>
  <HeaderCompVue />
  <div id="container">
    <router-view></router-view>
  </div>
  <FooterCompVue />
</template>

<script>
import FooterCompVue from './components/FooterComp.vue'
import HeaderCompVue from './components/HeaderComp.vue'
export default {
  name: 'App',
  components: {
    FooterCompVue:FooterCompVue,
    HeaderCompVue:HeaderCompVue
  }
}
</script>

<style>
</style>
