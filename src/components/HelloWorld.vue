<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
    <p class="lead">I'm a Full-Stack Developer passionate about creating amazing digital experiences.</p>
      <router-link to="/about" class="btn btn-primary btn-get-started">MORE ABOUT ME</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  color:black;
}

.hello a{
  margin: 10px;
}

.hello h1{
  font-weight: bold;
  font-size: 4rem;
  color: #ffffff;
}

.hello p{
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
.btn-primary {
  background-color: #1a3a33;
  border-color: #1a3a33;
  font-weight: bold;
}
</style>
