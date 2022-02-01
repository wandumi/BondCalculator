import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    calculate_bond: [
      {
        purchase_price: "",
        bond_amount: "",
        interest_rate: "",
        repayment_term: "",
      },
    ],
  },
  mutations: {
    updateBond(currentState, bond) {
      currentState.calculate_bond = bond;
    },
  },
  actions: {},
  modules: {},
});
