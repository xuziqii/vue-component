<template>
  <div class="wrapper">
    <div
      class="icon"
      @click="minus"
    >
      <i class="iconfont iconjian" />
    </div>
    <input
      ref="input"
      class="input"
      type="number"
      :value="data"
      @change="handleChange"
    >
    <div
      class="icon"
      @click="add"
    >
      <i class="iconfont iconicon-test" />
    </div>
  </div>
</template>

<script>
import { checkValidNumber } from '../utils';
export default {
  name: "Calculator",
  model: {
    prop: "data",
    event: "input",
  },
  props: {
    data: {
      type: [ String, Number ],
      default: 0,
    },
    checkValidFn: {
      type: Function,
      default: checkValidNumber,
    },
    checkFailFn: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    minus () {
      this.$emit("minus")
    },
    add () {
      this.$emit("add")
    },

    // Calculator input change
    handleChange(e) {
      // check value vaild
      const value = e.target.value
      if (this.checkValidFn(value)) {
        this.$emit("input", Number(value))
      } else {
        // reset input value
        this.$refs.input.value = this.data
        this.checkFailFn(value, this.data)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  display flex
  width 90px
  overflow hidden
  .input
    outline none
    color #4D4D4D
    border-bottom 1px solid #EEE
    border-top 1px solid #EEE
    border-left: none
    border-right: none
    width 50px
    text-align center
  .icon
    width 20px
    height 20px
    display flex
    justify-content center
    align-items center
    color #9B9B9B
    border 1px solid #EEE
    background #fff

</style>