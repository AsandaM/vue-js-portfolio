<template>
  <div class="container text-center">
    <div class="row">
    <div class="col align-self-center ring-container">
      <div class="align-self-center email-container">
          <p class="email-text fst-italic">_______ asandamehlo088@gmail.com _______</p>
        </div>
      <div class="ring">
        <i style="--clr:#00ff0a;"></i>
        <i style="--clr:#ff0057;"></i>
        <i style="--clr:#fffd44;"></i>
        <div class="image">
          <img src="https://asandam.github.io/images/asaM.jpg" alt="Your Name" class="img-fluid rounded-circle" style="max-width: 350px;"> 
        </div>
      </div>
    </div>
    <div id="back" class="col align-self-center">
      <HomeComp msg="Welcome to My Portfolio"/> 
    </div>
  </div>
</div>
</template>

<script>
import HomeComp from '@/components/HomeComp.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComp
  }
}
</script>

<style scoped>

.ring-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.ring {
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ring i {
  position: absolute;
  inset: 0;
  border: 1px solid #C9CC3F;
  transition: 0.5s;
}

.ring i:nth-child(1) {
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: animate 6s linear infinite;
}

.ring i:nth-child(2) {
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  animation: animate 4s linear infinite;
}

.ring i:nth-child(3) {
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  animation: animate2 10s linear infinite;
}

.ring:hover i {
  border: 6px solid var(--clr);
  filter: drop-shadow(0 0 20px var(--clr));
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

#back{
  background-color: rgba(145, 186, 159, 0.6);
}

.email-container {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  writing-mode: vertical-lr;
  font-size: 18px; /* Adjust as needed */
  padding: 10px;
  z-index: 1000; /* Ensure it stays on top of other elements */
  
}

.email-text {
  white-space: nowrap; /* Keeps the email in one line */
  color: #1a3a33;
}

.container {
  padding-left: 100px; /* Adjust this value to create space for the email navbar */
}

</style>
