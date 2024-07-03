<template>
  <div class="container">
  <div class="row ">
    <div id="deco" class="col text-start">
      <h1>Resume</h1>
    </div>
    <div class="col text-end">
      <button type="button" class="btn btn-light">Download CV
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
        </svg>
      </button>
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
            <p class="fw-bold">DUTIES INCLUDED</p>
            <ul>
              <li v-for="duty in experience.duties" :key="duty">{{ duty }}</li>
            </ul>
          </div>
          <h3 class="section-title text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg> ADDITIONAL EXPERIENCE
              </h3>
              <h5 class="fw-bolder">Cloud Support Associate Immersion Program, AWS</h5>
              <P class="fst-italic">Jan 2023 - July 2023</P>
              <ul class="contact-info" v-for="exp in additionalExp()" :key="exp">
                <li> {{exp}}</li>
              </ul>
              <h3 class="section-title text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg> SOFT SKILLS
              </h3>
              <ul>
                <li v-for="skill in skillsData()" :key="skill">
                  {{ skill }}
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
                <h4 class="section-title">PRESENT:</h4>
                <div v-for="education in educationData().present" :key="education.name" class="education-item">
                  <!-- <h4>{{ category}} : </h4> -->
                  <h5 class="fw-bolder">{{ education.degree }}, {{ education.institution }}</h5>
                  <p class="fst-italic">{{ education.status }}</p>
                  <div v-for="subject in education.modules" :key="subject">
                    <p>{{ subject }}</p>
                  </div>
                </div>
                <h4 class="section-title">COMPLETED:</h4>
                <div v-for="education in educationData().completed" :key="education.name" class="education-item">
                  <!-- <h4>{{ category}} : </h4> -->
                  <h5 class="fw-bolder">{{ education.qualification }}, {{ education.institution }}</h5>
                  <p class="fst-italic">{{ education.period }}</p>
                  <div v-for="subject in education.courses" :key="subject">
                    <p>{{ subject }}</p>
                  </div>
                </div>
              
              <h3 class="section-title text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg> CURRENT LEARNERSHIP
              </h3>
              <div class="list-unstyled" v-for="learn in learnership()" :key="learn.name"> 
                <!-- <h5>{{ category }}</h5> -->
                <h5 class="fw-bolder"> {{ learn.program }}, {{ learn.institution }} </h5>
                <p class="fst-italic">{{ learn.period }}</p>
                <p class="fw-bold">Being taught:</p>
                <ul v-for="subject in learn.subjects" :key="subject">
                  <li>{{ subject }}</li>
                </ul>
              </div>
              
              <h3 class="section-title text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg> TECHNICAL SKILLS
              </h3>
              <ul>
                <li v-for="(skills, category) in technicalSkills()" :key="category">
                    <!-- <h5>{{ category }}</h5> -->
                    <p> {{ skills.join(', ') }}</p>
                </li>
              </ul>
              
            </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
        experienceData(){
            return this.$store.state.work_experience
        },
        educationData(){
            return this.$store.state.education
        },
        skillsData(){
            return this.$store.state.skills
        },
        technicalSkills(){
            return this.$store.state.technical_skills
        },
        additionalExp(){
            return this.$store.state.additional_experience
        },
        learnership(){
            return this.$store.state.current_learnership
        },
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
  body {
    background-color: #f8f8f8;
  }
  
  .resume-container {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: #333;
  }
  
  .section-title i {
    margin-right: 0.5rem;
  }
  
  ul {
    padding-left: 0;
  }
  
  ul li {
    padding: 0.2rem 0;
    font-size: 1rem;
    color: #666;
    margin-left: 30px
  }
  
  .contact-info i {
    margin-right: 0.5rem;
  }
  
  .contact-info li {
    font-size: 1rem;
  }
  
  .divider {
    width: 1px;
    background-color: #666;
    height: 100%;
    border: none;
  }
  
  .arrow-icon {
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
  
  </style>
  