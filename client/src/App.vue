<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/server"> </router-link> |
      <router-link to="/about">About</router-link> -->
       <div class="container">
        <nav class="navbar navbar-expand-lg" style="background-color:">
        <a class="navbar-brand" href="#" style="color:white"> Rose Gold</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link ">
            <router-link to="/"> Products </router-link></a>
             <a v-if="!$store.state.loggedIn" class="nav-item nav-link">
            <router-link to="/login"> Login</router-link></a>
              <a v-if="$store.state.loggedIn" class="nav-item nav-link ">
            <router-link to="/cart"> Show Your Cart </router-link></a>
          <a  v-if="$store.state.loggedIn" href="#" class="nav-item nav-link " @click.prevent="logout"> Logout </a>
        </div>
       </div>
     </nav>
    </div>
      <!-- <Navbar/> -->
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      console.log('masuk logout')
      this.$store.dispatch('logout')
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('setLogIn', true)
    } else {
      this.$store.commit('setLogIn', false)
    }
  }
}
</script>

<style>

</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #DDBEA9;
  margin-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #6B705C;
}
</style>
