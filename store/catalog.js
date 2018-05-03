export default {
  namespaced: true,
  state() {
    return {
      product_list: [],
    };
  },
  actions: {
    async FETCH_PRODUCTS({ commit, state }) {
      const response = await this.$axios.$get('products/');
      commit('SET_PRODUCT_LIST', response);
    },
  },
  mutations: {
    SET_PRODUCT_LIST(state, response) {
      state.product_list = response.results;
    },
  },
};
