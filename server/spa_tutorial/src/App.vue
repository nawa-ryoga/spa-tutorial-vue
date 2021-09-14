<template>
  <div id="app">
    <header-component></header-component>
    <p>暫定的なトップページ</p>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent
  }
}
</script>
