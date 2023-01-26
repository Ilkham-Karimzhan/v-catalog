import axios from "axios";
import { createStore } from "vuex";

let store = createStore({
  state: {
    meals: [],
  },
  mutations: {
    SET_MEALS_TO_STATE: (state, meals) => {
      state.meals = meals;
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
        console.log(meals.data);
        return meals;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {
    MEALS(state) {
      return state.meals;
    },
  },
});

export default store;
