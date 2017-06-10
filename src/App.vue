<!-- ./src/App.vue -->
<template>
  <div id="app">
    <div class="container">
      <div class="heading">
        <h2>revue.</h2>
        <h6 class="subheader">realtime movie reviews with Vue.js and Pusher.</h6>
      </div>
      <div class="row">
        <div class="columns small-7">
          <movie></movie>
        </div>
        <div class="columns small-5">
          <reviews></reviews>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Movie from './components/Movie'
import Reviews from './components/Reviews'

export default {
  name: 'app',
  components: {
    Movie, Reviews
  }
}
</script>

<style>
  #app .heading {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px 0 30px;
    border-bottom: 1px solid #eee;
  }
</style>
