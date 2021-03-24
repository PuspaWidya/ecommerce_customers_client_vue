<template>
    <div class="card col col-3" style="width:100px">
    <img class="card-img-top" :src="product.imageUrl" alt="Card image cap" style="height:300px">
    <div class="card-body">
    <h2 class="card-title">{{product.name}}</h2>
    <p> Stock </p>
    <p class="card-text">{{product.stock}}</p>
    <a href="#" class="btn" id="btn"
    @click.prevent="chart(product.id)">Put in chart</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CardProducts',
  props: ['product'],
  methods: {
    chart (payload) {
      // console.log(payload)
      this.$store.dispatch('addCart', payload)
        .then(_ => {
          this.$store.dispatch('fetchProduct')
        })
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>
#btn {
  background-color: salmon;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

}
</style>
