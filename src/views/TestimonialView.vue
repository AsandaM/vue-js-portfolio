<template>
    <div>
      <testimonials-comp :items="testimonials" />
    </div>
  </template>
  
  <script>
  import TestimonialsComp from '../components/TestimonialsComp.vue';
  
  export default {
    components: {
      TestimonialsComp
    },
    computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  },
  mounted() {
    this.$store.dispatch('getData');
  }
  };
  </script>
  
  <style>
 
  </style>
  