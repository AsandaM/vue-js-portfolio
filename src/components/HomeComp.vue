<template>
  <div class="about">
    <h1>{{ msg }} </h1>
    <p class="lead">I'm a Full-Stack Developer passionate about creating amazing digital experiences.</p>
      <router-link to="/about" class="btn btn-primary btn-get-started">MORE ABOUT ME</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Quicksand:wght@300..700&display=swap");
.about{
  color:black;
}

.about a{
  margin: 10px;
}
.about{
  animation: appear 3s ease forwards;
}

.about h1{
  font-family: "Dancing Script", cursive;
  font-size: clamp(6.5rem, 8vw, 10rem);
  font-weight: 700;
  background: -webkit-linear-gradient(0deg, #799786, #2a664f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  margin-bottom: 36px;
  padding-left: 10px;
  
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about p{
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.8;
  padding-right: 100px;
}
.btn-primary {
  background-color: #1a3a33;
  border-color: #1a3a33;
  font-weight: bold;
}

.btn-primary:hover {
    background-color: transparent;
    color: #fff;
  }

@media (max-width: 1200px) {

  .content p {
    padding-right: 40px;
    
  }

}

@media (max-width: 1050px) {

  .content p {
    line-height: 1.5;
  }
}

@media (max-width: 990px) {
  .content p {
    padding-right: 0;
    background-color: #fff;
    
  }

  .content h1{
  background: -webkit-linear-gradient(0deg, #1a3a33, #f2f3f3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: clamp(4.5rem, 6vw, 8rem);
  padding-left: 0;
  margin-left: 0;
}

@media (max-width: 650px){
  .content{
    padding-left: 0 ;
  }
}

}



</style>
