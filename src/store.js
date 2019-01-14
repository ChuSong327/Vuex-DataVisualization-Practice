import Vue from 'vue'
import Vuex from 'vuex'
import * as dataUtil from "./utils/dataUtil"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    salesByCountry: []
  },
  mutations: {
    GET_SALES_BY_COUNTRY_DATA: (state, data) => {
      state.salesByCountry = data.slice();
      console.log("this is the updated state", state)
    }
  },
  actions: {
    getSalesByCountry: (context) => {
      dataUtil.get("http://localhost:3000/singlepiedata")
        .then(res => {
          console.log("this is the response", res)
          context.commit("GET_SALES_BY_COUNTRY_DATA", res)
        })
    }
  }
})
