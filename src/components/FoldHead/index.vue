<template>
  <div class="wrapper" @click="toggleFold">
    <div class="title">{{ title }}</div>
    <slot>
      <div>
        <img v-show="!folded" src="./img/top-arrow.png" alt="折叠" class="icon">
        <img v-show="folded" src="./img/bottom-arrow.png" alt="展开" class="icon">
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FoldHead',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      folded: true,
    }
  },
  mounted () {
    this.folded = this.status
  },
  methods: {
    toggleFold () {
      this.folded = !this.folded
      this.$emit('click')
    },
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 44px
  display flex
  justify-content space-between
  align-items center
  background #fff
  .title
    font-size 14px
    color #4F5564
  .icon
    height 16px
    width 16px
</style>
