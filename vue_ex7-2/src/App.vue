<template>
<HeaderCompVue/>
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
    HeaderCompVue:HeaderCompVue,
    FooterCompVue:FooterCompVue
  }
}
</script>

<style lang="scss">
* { margin:0; padding:0; }
a { text-decoration: none; }
h1,h2,h3,h4,h5,h6 { font-size:100%; }
img { vertical-align: top; }
ul,li,ol { list-style: none; }
</style>
