<template>
  <div class="about">
    <div class="container text-center mt-5">
    <h1 class="mb-4">ABOUT ME</h1>
    <!-- <p class="lead mb-4">
      I'm <strong>Asanda Mehlo</strong>, Full Stack Developer.
    </p> -->
    <p class="mb-4">
      <about-comp>
        <template #about>
          <p id="me">{{ aboutData() }}</p>
        </template>
      </about-comp>
    </p>
    <div class="row text-center mb-5">
      <h2>Professional Certificates</h2>
      <div v-for="cert in certficateData()" :key="cert.certificate" class="col-md-6 mb-4">
        <div class="stats-box p-3">
          <img :src="cert.image" style="width: 20%; height: 20%">
          <h5>{{ cert.certificate }}</h5> 
          <a :href="cert.url" target="_blank" class="btn">View Certificate</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import AboutComp from '../components/AboutComp.vue'
export default {
  components: {
    AboutComp
  },
  methods: {
    aboutData() {
      return this.$store.state.aboutMe
    },
    technicalSkills(){
      return this.$store.state.technical_skills
    },
    certficateData(){
      return this.$store.state.professional_certificates
    }
  },
  computed:{
    getData(){
      return this.$store.dispatch('getData')
    }
  },
  mounted(){
    this.getData
  }
}
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
}

.lead {
  font-size: 1.25rem;
}

.stats-box {
  background-color: rgba(145, 186, 159, 0.6);
  color: #fff;
  border-radius: 5px;
  position: relative;
  animation: appear 5s ease forwards;
  border: 2px solid;
  border-image: linear-gradient(90deg, #006400, #eeef9d, #afb20a, #7c7d25, #C9CC3F) 1;
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

.stats-box:hover {
  box-shadow: 0 0 0 2px rgb(175, 212, 175), 0 0 0 4px #7c7d25, 0 0 0 6px #C9CC3F;
  transition: box-shadow 0.3s ease;
}

.btn{
  padding: 0.6rem 1.3rem;
    background-color: #fff;
    border: 2px solid #fafafa;
    font-size: 0.95rem;
    color: #1abc9c;
    line-height: 1;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
  background-color: transparent;
  color: #fff;
}


.stats-box h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.stats-box p {
  margin: 0;
}

h3 {
  font-size: 1.75rem;
  font-weight: bold;
}

ul li h5 {
  font-size: 1.25rem;
  font-weight: bold;
}

ul li p {
  margin: 0;
}

.about{
  background-color: rgba(145, 186, 159, 0.6);
  
}
#me{
  font-size: 1.2rem;
  /* font-style: italic; */
  background-color: rgba(145, 186, 159, 0.6);
}
</style>
