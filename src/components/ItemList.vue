<template>
  <input type="text" v-model="filter" placeholder="filter" />
  <hr />
  <ul class="list">
    <li class="list-item" v-for="item in items.meals" :key="item.id">
      <slot name="list-item__text" class="list-item__text" :list="item">
        {{ item.strMeal }}
        <input type="checkbox" />~
        <img :src="item.strMealThumb" />
      </slot>
      <div>
        <button @click="addOrder(item)">Заказать !</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
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
  emits: {
    click: null,
  },
  methods: {
    addOrder(order) {
      this.$emit("click", JSON.parse(JSON.stringify(order)));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
