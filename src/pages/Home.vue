<template>
  <div class="home-box">
    <InvoiceHead title="title" />
    <FoldHead title="section-title" />
    <InvoiceDash />
    <Calculator
      v-model="calValue"
      @minus="handleCal(-1)"
      @add="handleCal(1)"
    />
  </div>
</template>

<script>
import InvoiceHead from "../components/InvoiceHead"
import InvoiceDash from "../components/InvoiceDash"
import FoldHead from "../components/FoldHead"
import Calculator from "../components/Calculator"
export default {
  name: "Home",
  components: {
    InvoiceHead,
    InvoiceDash,
    FoldHead,
    Calculator,
  },
  data () {
    return {
      calValue: 0
    }
  },
  methods: {
    // Calculator add or minus
    handleCal (step) {
      this.calValue = Number(this.calValue) + step
    },
  }
}
</script>
<style scoped lang="stylus">
.home-box
  > div
    margin-bottom 30px
</style>