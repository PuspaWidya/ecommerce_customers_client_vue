<template>
<div class="container">
  <div class="products">
    <div class="container">
      <div class="hero-image">
      <div class="hero-text">
        <h1>This is products page</h1>
      </div>
    </div>
    <div class="row">
    <CardProducts
    v-for="product in products"
    :key="product.id"
    :product="product"
    />
  </div>
  </div>
</div>
</div>
</template>

<script>
import CardProducts from '@/components/CardProducts.vue'
import { mapState } from 'vuex'

export default {
  name: 'Product',
  data () {
    return {
    }
  },
  methods: {
    fetchProduct () {
      // console.log('test123')
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    ...mapState(['products'])
  },
  created () {
    this.fetchProduct()
  },
  components: { CardProducts }
}
</script>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1609353898029-d5408b6a93ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80");
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
