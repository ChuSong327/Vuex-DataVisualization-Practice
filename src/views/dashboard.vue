<template>
  <div>
    <div class="section-sales-by-country">
      <SalesByCountry />
    </div>
  </div>
</template>

<script>

import SalesByCountry from "../components/sales-by-country"

export default {
  name: "Dashboard",
  components: {
    SalesByCountry
  }
}
</script>
