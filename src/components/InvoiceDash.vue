<template>
  <div class="dash-wrapper">
    <div class="dot left"></div>
    <div class="dash-line">
    </div>
    <div class="dot right"></div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceDash',
}
</script>
<style lang="stylus" scoped>
defaultWidth = 8px

.dash-wrapper
  display flex
  align-items center
  background #fff
  .dot
    width defaultWidth
    height defaultWidth * 2
    background #f5f5f5
    &.left
      border-radius 0 defaultWidth defaultWidth 0
    &.right
      border-radius defaultWidth 0 0 defaultWidth
  .dash-line
    flex 1
    margin 0 defaultWidth
    border-top 1px dashed #eee
</style>
