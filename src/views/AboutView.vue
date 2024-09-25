<template>
  <div class="about">
    <div class="container text-center mt-3">
      <div class="container">
        <h1 class="mb-4">ABOUT ME</h1>
        <p class="mb-4">
          <about-comp>
            <template #about>
              <p id="me" class="text-black">{{ aboutData() }}</p>
            </template>
          </about-comp>
        </p>
      </div>
      <div class="softSkills">
        <div class="container">
          <h2>Soft Skills</h2>
          <div class="soft-skills">
            <div class="soft-skill-item" v-for="skill in skillsData()" :key="skill">
              <p>{{ skill }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skills" v-if="technicalSkills">
        <div class="container">
          <h2>Technical skills</h2>
          <div class="services">
            <div class="service-item">
              <i class="fa-solid fa-laptop-code"></i>
              <p class="mb-2">Languages</p>
              <ul>
                <li v-for="language in technicalSkills.languages" :key="language" class="text-start">{{ language }}</li>
              </ul>
            </div>
            <div class="service-item">
              <i class="fas fa-code"></i>
              <p class="mb-2">Web Developement</p>
              <ul>
                <li v-for="webDev in technicalSkills.web_development" :key="webDev" class="text-start">{{ webDev }}</li>
              </ul>
            </div>
            <div class="service-item">
              <i class="fa-solid fa-database"></i>
              <p class="mb-2">Database Management</p>
              <ul>
                <li v-for="db in technicalSkills.database_management" :key="db" class="text-start">{{ db }}</li>
              </ul>
            </div>
            <div class="service-item">
              <i class="fa-solid fa-cloud"></i>
              <p class="mb-2">Cloud-Based Technologies</p>
              <ul>
                <li v-for="cloud in technicalSkills.cloud_based_technologies" :key="cloud" class="text-start">{{ cloud }}</li>
              </ul>
            </div>
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
    certficateData() {
      return this.$store.state.professional_certificates
    },
    skillsData() {
      return this.$store.state.skills
    }
  },
  computed: {
    getData() {
      return this.$store.dispatch('getData')
    },
    technicalSkills() {
      return this.$store.state.technical_skills
    }
  },
  mounted() {
    this.getData
  }
}
</script>

<style scoped>
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

#me {
  font-size: 1.2rem;
}

.skills {
  text-align: center;
  margin: 0;
  padding: 0;
}

.container {
  padding: 5px 25px;
  background-color: rgba(145, 186, 159, 0.6);
}

h2 {
  font-size: 36px;
  color: #1a3a33;
}

p {
  font-size: 18px;
  color: #666;
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.service-item {
  background-color: rgba(145, 186, 159, 0.6);
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: appear 5s ease forwards;
  border: 1px solid #7c7d25;

}

.service-item i {
  font-size: 24px;
  margin-bottom: 10px;
  color: #1a3a33;
}

.service-item p {
  font-size: 15.5px;
  color: #333;
  text-decoration: underline;
  margin: 0;
}

.softSkills {
  color: #333;
  text-align: center;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 36px;
  color: #000;
  font-weight: bold;
}

p {
  font-size: 18px;
  color: #666;
}

.soft-skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.soft-skill-item {
  background-color: rgba(145, 186, 159, 0.6);
  border-radius: 50%;
  padding: 30px;
  margin: 10px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: appear 5s ease forwards;
  border: 1px solid #7c7d25;
}

.soft-skill-item i {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.soft-skill-item p {
  font-size: 15px;
  color: #333;
  margin: 0;
  line-height: 1.2;
  padding: 0 5px;
  word-wrap: break-word;
}
</style>
