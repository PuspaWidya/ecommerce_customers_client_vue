<template>
<div class="container">
  <div class="products">
    <div class="container">
      <div class="hero-image">
      <div class="hero-text">
        <h1>This is your cart page</h1>
      </div>
    </div>
    <div class="row">
      <CartBody
      v-for="cart in carts"
      :key="cart.id"
      :cart="cart"></CartBody>
  </div>
  </div>
</div>
</div>
</template>

<script>
import CartBody from '../components/CartBody.vue'

export default {
  name: 'Cart',
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchCart()
  },
  computed: {
    carts () {
      return this.$store.state.cart
    }
  },
  components: {
    CartBody
  }
}
</script>

<style scoped>
.hero-image {
  background-image: url("https://images.unsplash.com/photo-1609644942858-7183f459eba4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80");
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 200px;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

</style>
