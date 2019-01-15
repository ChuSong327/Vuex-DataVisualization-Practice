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
            const r = 200;
            const color = d3.scaleOrdinal()
                            .domain(this.salesByCountry.map((d) => {
                                return d.BILLINGCOUNTRY;
                            }))
                            // .range(d3.schemeCategory10);
                            .range(["red", "yellow"]); 

            // Create a SVG tag and g tag as a container for the pie chart
            const vis = d3.select(".chartsalesbycountry")
                        .append("svg")
                            .attr("width", "500px")
                            .attr("height", "500px")
                        .append("g")
                            .attr("transform", `translate(${ r+100 }, ${ r })`);

            // arc generator with radius settings
            const arc = d3.arc()
                        .outerRadius(r)
                        .innerRadius(0);

            // pie generator and associate the pie instance with data value 
            const pie = d3.pie()
                            .value(d => {
                                return d.COUNT
                            })
                            (this.salesByCountry);
            
            // Create path and assign color attribute
            const arcs = vis.selectAll("g.slice")
                            .data(pie)
                            .enter()
                                .append("svg:g")
                                    .attr("class", "slice")
                                .append("svg:path")
                                    .attr("fill", (d) => {
                                        return color(d)
                                    })
                                    .attr("d", arc);
            console.log(color(this.salesByCountry[0]))
            console.log(color(this.salesByCountry[1]))
            console.log("this is the color", color())
            console.log(this.salesByCountry.map((d) => {
                return d.BILLINGCOUNTRY
            }))
        }
    },
    created(){
        this.getSalesByCountry();
    }
}
</script>