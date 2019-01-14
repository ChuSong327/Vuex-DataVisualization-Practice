<template>
  <div>
    <div class="section-sales-by-country">
      <SalesByCountry v-bind="{ loadSalesByCountry }"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import SalesByCountry from "../components/sales-by-country"

export default {
  name: "Dashboard",
  computed: {
    ...mapState([
      "salesByCountry"
    ])
  },
  methods: {
    ...mapActions([
      "getSalesByCountry"
    ]),
    loadSalesByCountry(){
      this.getSalesByCountry()
    }
  },
  components: {
    SalesByCountry
  }
}
</script>
