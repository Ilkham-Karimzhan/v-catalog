<template>
  <li class="list-item" v-for="item in cart" :key="item.id">
    <img :src="item.strMealThumb" />
    <div class="list-item_content">
      <slot name="list-item__text" class="list-item__text" :list="item">
        {{ item.strMeal }}
      </slot>
      <a>
        <span>Удалить</span>
        <div class="wave"></div>
      </a>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.list-item {
  display: flex;
  flex-direction: row;
  width: 400px;
  border: 3px solid #ccc;
  border-radius: 5px;
}
.list-item_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
a {
  width: 140px;
  padding: 20px 30px;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
a:hover .wave {
  top: -120px;
}

span {
  position: relative;
  z-index: 1;
  color: white;
  font-size: 15px;
  letter-spacing: 8px;
}

.wave {
  width: 200px;
  height: 200px;
  background-color: #a54242;
  box-shadow: inset 0 0 50px rgba(224, 37, 37, 0.5);
  position: absolute;
  left: 0;
  top: -80px;
  transition: 0.4s;
}

.wave::before,
.wave::after {
  width: 200%;
  height: 200%;
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
}
.wave::before {
  border-radius: 45%;
  background-color: rgba(20, 20, 20, 1);
  animation: wave 5s linear infinite;
}

.wave::after {
  border-radius: 40%;
  background-color: rgba(20, 20, 20, 0.5);
  animation: wave 10s linear infinite;
}

@keyframes wave {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
