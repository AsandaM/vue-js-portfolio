<template>
  <div class="container">
  <div class="row ">
    <div id="deco" class="col text-start">
      <h1>EDUCATION & EXPERIENCE</h1>
    </div>
    <div class="col text-end">
      <div class="btn-group">
            <label type="text">Download CV</label>
            <a href="https://asandam.github.io/images/myCV.pdf" target="_blank">
            <button id="download" type="button" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
            </button>
          </a>
      </div>
    </div>
  </div>
  </div>
    <div class="container resume-container mt-5">
      <div class="row">
        <div class="col-md-5">
            <h3 class="section-title text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
              </svg> WORK EXPERIENCE
            </h3>
            <div v-for="experience in experienceData()" :key="experience.title" class="experience-item">
              <h5 class="fw-bolder">{{ experience.title }}, {{ experience.company }}</h5> <span></span>
              <p class="fst-italic">{{ experience.period }}</p>
              <p class="fw-bold">DUTIES INCLUDED:</p>
              <ul>
                <li v-for="duty in experience.duties" :key="duty">{{ duty }}</li>
              </ul>
            </div>
            <h3 class="section-title text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
              </svg> PROFESSIONAL CERTIFICATES
            </h3>
            <ul class="certificate-list">
              <li v-for="cert in certificatData()" :key="cert">
                <a :href="cert.url" target="_blank" class="button"><img :src="cert.image" style="width: 20%; height: 20%;" class="cert-image"></a>
                <p>{{ cert.certificate }}</p>
              </li>
            </ul>
        </div>
        <div class="col-md-2 d-flex justify-content-center">
            <div class="divider"></div>
        </div>
        <div class="col-md-5">
                <h3 class="section-title text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg> EDUCATION
                </h3>
                <div class="list-unstyled" v-for="learn in learnership()" :key="learn.name"> 
                <h5 class="fw-bolder"> {{ learn.program }}, {{ learn.institution }} </h5>
                <p class="fst-italic">{{ learn.period }}</p>
                <p class="fw-bolder">Being taught:</p>
                <ul>
                  <li>{{ (learn.subjects || []).join(', ') }}</li>
                </ul>
              </div>
                <div v-for="education in presentEducation()" :key="education.name" class="education-item">
                  <h5 class="fw-bolder">{{ education.degree }}, {{ education.institution }}</h5>
                  <p class="fst-italic">{{ education.status }}</p>
                  <p class="fw-bolder">Modules included:</p>
                  <ul>
                    <li> {{ (education.modules || []).join(', ') }}</li>
                  </ul>
                  
                </div>
                <h5 class="fw-bolder">Cloud Support Associate Immersion Program, AWS</h5>
            <P class="fst-italic">Jan 2023 - July 2023</P>
            <ul v-for="exp in additionalExp()" :key="exp">
              <li> {{exp}}</li>
            </ul>
                <div v-for="education in completedEducation()" :key="education.name" class="education-item">
                  <h5 class="fw-bolder">{{ education.qualification }}, {{ education.institution }}</h5>
                  <p class="fst-italic">{{ education.period }}</p>
                  <p>{{ (education.courses || []).join(', ') }}</p>
                </div>
            </div>
    </div>
  </div>
</template>
  
<script>
export default {
    methods: {
      presentEducation(){
        return this.$store.state.presentEducation
      },
      completedEducation(){
        return this.$store.state.completedEducation
      },
        experienceData(){
            return this.$store.state.work_experience
        },
        educationData(){
            return this.$store.state.education
        },
        additionalExp(){
            return this.$store.state.additional_experience
        },
        learnership(){
            return this.$store.state.current_learnership
        },
        certificatData(){
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
.resume-container {
  background-color: rgba(108, 149, 122, 0.6);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
  
.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #333;
  margin-top: 1.5rem;
}

ul li {
  padding: 0.2rem 0;
  font-size: 0.9rem;
  color: #333;
  margin-left: 30px
}
 
.divider {
  width: 1px;
  background-color: #666;
  height: 100%;
  border: none;
}
  
svg {
  color: #0e5c31;
}

.education-item, .experience-item {
  margin-bottom: 1.5rem;
}

.left-column {
  padding-right: 1.5rem;
}

.right-column {
  padding-left: 1.5rem;
}
#deco{
  border-bottom: #f8f8f8 solid 1px;
}

.col-md-5{
  background-color: rgba(234, 241, 236, 0.6);
}

.btn {
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #0e5c31;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  
}

.btn-group{
  margin-top: 10px;
}

label{
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #0e5c31;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 5px;
  outline: none;
  transition: 0.3s;
  margin: 0;
}
  
#download:hover {
  background-color: transparent;
  color: #fff;
  
}
#download:hover svg {
  color: #f8f8f8;
}

.certificate-list {
  list-style: none;
  padding: 0;
}

.certificate-list li {
  margin-bottom: 10px;
  text-align: center; 
}

.button {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: transparent; 
  border: none; 
  padding: 0;
  cursor: pointer;
}

.cert-image {
  width: 10%; 
  height: auto; 
  transition: transform 0.3s ease; 
}

.button:hover {
  opacity: 0.8;
  transform: scale(1.05);
}
</style>
  
