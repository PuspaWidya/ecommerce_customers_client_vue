<template>
   <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 login-section-wrapper d-flex justify-content-center pt-4">
          <div class="brand-wrapper" style="padding: 10px; height: 25px;">
          </div>
          <div class="login-wrapper my-auto" style="width: 300px;">
            <h1 class="login-title" style="font-weight: bold,;margin-bottom:25px;">Register</h1>
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="email@example.com" v-model="email">
              </div>
              <div class="form-group mb-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="enter your passsword" v-model="password">
              </div>
              <div class="d-flex justify-content-center">
                <button @click.prevent="register" type="button" class="btn btn-outline-dark">Register</button>
              </div>
            </form>
            <p class="login-wrapper-footer-text" style="padding:10px">Already have an account? <a href="#" @click.prevent="login" class="text-reset">Login here</a></p>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="https://cdn.pixabay.com/photo/2015/08/18/20/45/kids-894787__340.jpg" alt="login image" class="login-img" style="height:400px">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      console.log(this.email, this.password)
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
