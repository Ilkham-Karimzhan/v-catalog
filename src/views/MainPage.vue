<template>
  <ItemList :items="meals">
    <template #list-item__text="{ list: meal }">
      {{ meal.strMeal }}
      <img :src="meal.strMealThumb" alt="" />
    </template>
  </ItemList>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import { mapActions } from "vuex";

export default {
  name: "MainPage",
  components: {
    ItemList,
  },
  data() {
    return {
      meals: [],
    };
  },
  methods: {
    ...mapActions(["GET_MEALS_FROM_API"]),
  },
  created() {
    this.GET_MEALS_FROM_API().then(
      () => (this.meals = this.$store.state.meals)
    );
    console.log(this.meals);
  },
  mounted() {},
};
</script>

<style>
.home {
  width: 500px;
  float: left;
  text-align: left;
}
li {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: burlywood;
  border: 1px soild #333;
  margin-right: 10px;
}
img {
  width: 200px;
}
</style>
