<template>
  <div class="wrapper">
    <div class="text">
      {{ title }}
    </div>
    <div class="big">
      <div class="small" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceHead",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="stylus" scoped>
defaultColor = #F58A88
defaultBorderRadius = 60%

.wrapper
  display flex
  flex-direction column
  align-items center
  position relative
  .text
    position absolute
    top 21px
    color defaultColor
    font-size 18px
  .big
    position relative
    border-radius defaultBorderRadius
    height 60px
    width 100px
    border 2px solid defaultColor
    .small
      position absolute
      left 4px
      top 4px
      border-radius defaultBorderRadius
      height 50px
      width 90px
      border 1px solid defaultColor
</style>
