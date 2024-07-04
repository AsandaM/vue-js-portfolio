<template>
  <div>
    <p class="lead mb-4">
      I'm <b>Asanda Mehlo</b>, <span>{{ currentTitle }}</span>.
    </p>
    <slot name="about">
    </slot>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: ["Full Stack Developer", "Cloud Architect", "Networking Specialist", "Software Engineer"],
      currentTitle: "Full Stack Developer",
      titleIndex: 0
    };
  },
  methods: {
    changeTitle() {
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.currentTitle = this.titles[this.titleIndex];
    }
  },
  mounted() {
    setInterval(this.changeTitle, 3000);
  }
}
</script>

<style scoped>
.lead span{
  font-size: 1.25rem;
  font-style: italic;
}
b{
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}
</style>
