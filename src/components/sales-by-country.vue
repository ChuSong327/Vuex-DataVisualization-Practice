<template>
    <div class="container-sales-by-country">
        <p>Click to load sales by country chart</p>
        <button v-on:click="loadSalesByCountry()">Load</button>
        <p>{{ this.$store.state.salesByCountry }}</p>
    </div>
</template>

<script>
export default {
    name: "SalesByCountry",
    props: {
        loadSalesByCountry: Function,
    }
}
</script>