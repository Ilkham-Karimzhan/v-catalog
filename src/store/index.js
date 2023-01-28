import axios from "axios";
import { createStore } from "vuex";

let store = createStore({
  state: {
    meals: [],
    cart: [],
  },
  mutations: {
    SET_MEALS_TO_STATE: (state, meals) => {
      state.meals = meals;
    },
    SET_CART: (state, order) => {
      state.cart.push(order);
    },
  },
  actions: {
    async GET_MEALS_FROM_API({ commit }) {
      try {
        const meals = await axios(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
          {
            method: "GET",
          }
        );
        commit("SET_MEALS_TO_STATE", meals.data);
        return meals;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    ADD_TO_CART({ commit }, order) {
      commit("SET_CART", order);
    },
  },
  getters: {
    MEALS(state) {
      return state.meals;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
