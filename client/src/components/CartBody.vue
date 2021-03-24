<template>
    <div class="card col col-3" style="width:100px">
    <img class="card-img-top" :src="cart.Product.imageUrl" alt="Card image cap" style="height:300px">
    <div class="card-body">
    <h2 class="card-title">{{cart.Product.name}}</h2>
    <h4> Ammount in your chart : </h4>
     <p>{{cart.amount}}</p>
       <h4> Price: </h4>
     <p1>Rp.{{cart.Product.price}}</p1>
     <div style="margin=10px">
    <a href="#" class="btn" id="btn"
    @click.prevent="chart(-1)"> - </a>
    <a href="#" class="btn" id="btn"
    @click.prevent="chart(+1)"> + </a>
    <a href="#" class="btn" id="btn"
    @click.prevent="deleteCart"> DELETE CART </a>
     </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['cart'],
  methods: {
    chart (payload) {
      this.$store.dispatch('updateCart', {
        amount: payload,
        ProductId: this.cart.ProductId,
        id: this.cart.id
      })
        .then(_ => {
          console.log('tes')
          this.$store.dispatch('fetchCart')
        })
    },
    deleteCart () {
      this.$store.dispatch('deleteCart', {
        ProductId: this.cart.ProductId,
        id: this.cart.id
      })
        .then(_ => {
          this.$store.dispatch('fetchCart')
        })
    },
    created () {
      this.$store.dispatch('fetchCart')
    }
  }
}
</script>

<style>

</style>
