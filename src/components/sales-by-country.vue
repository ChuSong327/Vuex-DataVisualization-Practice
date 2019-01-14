<template>
    <div class="container-sales-by-country">
        <p>Click to load sales by country chart</p>
        <button v-on:click="loadSalesByCountry()">Load</button>
        <div class="chartsalesbycountry"></div>
    </div>
</template>

<script>
 /* eslint-disable */
import { mapState, mapActions } from "vuex"

export default {
    name: "SalesByCountry",
    computed: {
        ...mapState([
            "salesByCountry"
        ]),
        // data: this.salesByCountry
    },
    methods: {
        ...mapActions([
            "getSalesByCountry"
        ]),
        loadSalesByCountry(){
            const r = 100;
            const svg = d3.select(".chartsalesbycountry")
                        .append("svg")
                            .attr("width", "800px")
                            .attr("height", "800px");
            const rect = svg.selectAll("rect")
                            .data(this.salesByCountry)
            rect.enter()
                .append("rect")
                    .attr("x", (d, i) => {
                        return i * 50 + 55;
                    })
                    .attr("y", (d) => {
                        return 100;
                    })
                    .attr("width", 160)
                    .attr("height", (d, i) => {
                        console.log((d.COUNT / 100) + 50)
                        return (d.COUNT / 100) + 50;
                    })
                    .attr("fill", "red")
        }
    },
    created(){
        this.getSalesByCountry();
    }
}
</script>