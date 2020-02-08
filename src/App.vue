<template>
  <div id="app">
    <InvoiceHead />
    <FoldHead title="发票详情"/>
    <InvoiceDash />
  </div>
</template>

<script>
import InvoiceHead from './components/InvoiceHead'
import InvoiceDash from './components/InvoiceDash'
import FoldHead from './components/FoldHead'

export default {
  name: 'app',
  components: {
    InvoiceHead,
    InvoiceDash,
    FoldHead
  }
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
