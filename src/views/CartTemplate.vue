<template>
  <div class="about" v-if="CART.length">
    <h1>This is an about page</h1>
  </div>
  <ul class="cart-list">
    <CartItem :cart="CART"></CartItem>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style>
.cart-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
