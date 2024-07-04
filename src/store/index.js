import { createStore } from 'vuex'

export default createStore({
  state: {
    work_experience: null,
    presentEducation: null,
    completedEducation: null,
    current_learnership: null,
    professional_certificates: null,
    technical_skills: null,
    additional_experience: null,
    skills: null,
    references: null,
    aboutMe: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {
    setWorkExperience(state, work_experience) {
      state.work_experience = work_experience
    },
    setPast(state, education) {
      state.completedEducation = education
    },
    setPresent(state, education) {
      state.presentEducation = education
    },
    setCurrentLearnership(state, current_learnership) {
      state.current_learnership = current_learnership
    },
    setProfessionalCertificates(state, professional_certificates) {
      state.professional_certificates = professional_certificates
    },
    setTechnicalSkills(state, technical_skills) {
      state.technical_skills = technical_skills
    },
    setAdditionalExperience(state, additional_experience) {
      state.additional_experience = additional_experience
    },
    setSkills(state, skills) {
      state.skills = skills
    },
    setReferences(state, references) {
      state.references = references
    },
    setAboutMe(state, aboutMe) {
      state.aboutMe = aboutMe
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials
    },
    setProjects(state, projects){
      state.projects = projects
    }
  },
  actions: {
    async getData({ commit }) {
    
        let fetchedInfo = await fetch('https://asandam.github.io/json_file/data/')
        let data = await fetchedInfo.json()
        let { work_experience, education, current_learnership, professional_certificates, technical_skills, additional_experience, skills, references, aboutMe, testimonials, projects } = data
        commit('setWorkExperience', work_experience)
        commit('setPast', education.completed)
        commit('setPresent', education.present)
        commit('setCurrentLearnership', current_learnership)
        commit('setProfessionalCertificates', professional_certificates)
        commit('setTechnicalSkills', technical_skills)
        commit('setAdditionalExperience', additional_experience)
        commit('setSkills', skills)
        commit('setReferences', references.stats_sa)
        commit('setAboutMe', aboutMe.text)
        commit('setTestimonials', testimonials)
        commit('setProjects', projects)
      
    }
  },
  modules: {
  }
})
