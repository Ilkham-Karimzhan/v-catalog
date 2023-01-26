<template>
  <input type="text" v-model="filter" placeholder="filter" />
  <hr />
  <ul class="list">
    <li class="list-item" v-for="item in items.meals" :key="item.id">
      <slot name="list-item__text" class="list-item__text" :list="item">
        {{ item.strMeal }}
        <input type="checkbox" />~
        <img :src="item.strMealThumb" alt="" />
      </slot>
      <button>Заказать !</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      filter: "",
    };
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  display: flex;
  width: 1400px;
  padding-top: 30px;
}
.list-item {
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  margin-bottom: 20px;
}
</style>
