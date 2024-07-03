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
                    <div class="icon">
                        <a :href="project.vercel" target="blank" class="iconBox"> <span class="material-symbols-outlined">
                            arrow_outward
                        </span></a>
                    </div>
                    </div>
                </div>
                <div class="content">
                    <h4>{{project.name}}</h4>
                    <p>{{project.description}}</p>
                    <ul>
                    <a :href="project.github" target="blank"><li style="--clr-tag:#d3b19a;" class="branding">GitHub</li></a>
                    <a :href="project.vercel" target="blank"><li style="--clr-tag:#70b3b1;" class="packaging">Vercel</li></a>
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
 @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: #fff; */
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}

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

section .container .card:nth-child(1) .box .icon .iconBox {
  background: #d3b19a;
}

section .container .card:nth-child(2) .box .icon .iconBox {
  background: #70b3b1;
}

section .container .card:nth-child(3) .box .icon .iconBox {
  background: #d05fa2;
}

section .container .card ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
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

/* Color adjustments for li elements based on class */
/* Note: CSS does not support the darken function directly. You'll need to manually specify the darker colors. */
/* / */

section .container .card .content {
  padding: 0.938rem 0.625rem;
}

section .container .card .content h3 {
  text-transform: capitalize;
  font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
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
  border-radius: 1.25rem;
  border-bottom-right-radius: 0;
  overflow: hidden;
}

section .container .card .card-inner .box {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 1.25rem;
  overflow: hidden;
}

section .container .card .card-inner .box .imgBox {
  position: absolute;
  inset: 0;
}

section .container .card .card-inner .box .imgBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

section .container .card .card-inner .box .icon {
  position: absolute;
  bottom: -0.375rem;
  right: -0.375rem;
  width: 6rem;
  height: 6rem;
  background: var(--clr);
  border-top-left-radius: 50%;
}

section .container .card .card-inner .box .icon:hover .iconBox {
  transform: scale(1.1);
}

section .container .card .card-inner .box .icon::before,
section .container .card .card-inner .box .icon::after {
  position: absolute;
  content: "";
  background: transparent;
  width: 1.25rem;
  height: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}

section .container .card .card-inner .box .icon::before {
  bottom: 0.375rem;
  left: -1.25rem;
  box-shadow: 0.313rem 0.313rem 0 0.313rem #fff;
}

section .container .card .card-inner .box .icon::after {
  top: -1.25rem;
  right: 0.375rem;
  box-shadow: 0.313rem 0.313rem 0 0.313rem var(--clr);
}

section .container .card .card-inner .box .icon .iconBox {
  position: absolute;
  inset: 0.625rem;
  background: #282828;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

section .container .card .card-inner .box .icon .iconBox span {
  color: #fff;
  font-size: 1.5rem;
}

#deco{
  border-bottom: #fff solid 1px;
}
</style>