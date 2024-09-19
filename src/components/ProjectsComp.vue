<template lang="">
    <div>
        <section>
            <h1>PROJECTS</h1>
            <div id="deco"></div>
            <div class="container">
                <div class="card" v-for="project in projectsData()" :key="project.name">
                <div class="card-inner" style="--clr:#fff;">
                    <div class="box">
                    <div class="imgBox">
                        <img :src="project.image" alt="">
                    </div>
                    </div>
                </div>
                <div class="content">
                    <h4>{{project.name}}</h4>
                    <p>{{project.description}}</p>
                    <ul>
                    <a :href="project.github" target="blank"><li style="--clr-tag:#d3b19a;" class="github">GitHub</li></a>
                    <a :href="project.vercel" target="blank"><li style="--clr-tag:#70b3b1;" class="demo">Live Demo</li></a>
                    </ul>
                </div>
                </div>      
            </div>
            </section>
    </div>
</template>
<script>
export default {
    methods: {
        projectsData(){
            return this.$store.state.projects
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

section {
  padding-block: min(20vh, 2rem);
  width: calc(min(76.5rem, 90%));
  margin-inline: auto;
  color: #111;
}

section a {
  display: inline-block;
  text-decoration: none;
}

section .container {
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
}

section .container .card ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-top: auto;
}

section .container .card ul li {
  text-transform: uppercase;
  background: var(--clr-tag);
  color: #282828;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.375rem 0.625rem;
  border-radius: 0.188rem;
}

section .container .card ul li:hover{
  background-color: #1a3a33;
  color: white ;
}

section .container .card .content {
  flex-grow: 1;
  padding: 0.938rem 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

section .container .card .content p {
  margin: 0.625rem 0 1.25rem;
  color: #565656;
}

section .container .card .card-inner {
  position: relative;
  width: inherit;
  height: 18.75rem;
  background: var(--clr);
  overflow: hidden;
}

section .container .card .card-inner .box {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}

section .container .card .card-inner .box .imgBox {
  position: absolute;
  inset: 0;
}

section .container .card:hover{
  border: 2px solid;
  border-image: linear-gradient(90deg, #006400, #eeef9d, #afb20a, #7c7d25, #C9CC3F) 1;
}

section .container .card .card-inner .box .imgBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#deco{
  border-bottom: #fff solid 1px;
}
</style>