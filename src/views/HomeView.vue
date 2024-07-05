<template>
  <main>
      <div class="content container">
        <HomeComp msg="Welcome to My Portfolio"/>
      </div>
      <div class="stack">
        <div class="card">
          <img
            src="https://asandam.github.io/images/asaM.jpg"
            alt="" />
        </div>
        <div class="card">
          <img
            src="https://asandam.github.io/images/asaM.jpg"
            alt="" />
        </div>
      </div>
    </main>
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

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  min-height: 100vh;
}

.content {
  padding-left: 120px;
  color: #c7c7c7c9;
  
}

.content p {
  font-size: clamp(0.9rem, 4vw, 1.2rem);
  line-height: 1.6;
  padding-right: 100px;
}

.stack {
  position: relative;
}

.stack:hover .card{
  transform: translate(-50%,-50%) scale(1.2);
}

.card {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 350px;
  height: 500px;
  border-radius: 2rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25),
    0 15px 20px 0 rgba(0, 0, 0, 0.125);
  transition: transform 0.6s;
  user-select: none;
}


.card img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}

.card:nth-last-child(n + 5) {
  --x: calc(-50% + 90px);
  transform: translate(var(--x), -50%) scale(0.85);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.01);
}

.card:nth-last-child(4) {
  --x: calc(-50% + 60px);
  transform: translate(var(--x), -50%) scale(0.9);
}

.card:nth-last-child(3) {
  --x: calc(-50% + 30px);
  transform: translate(var(--x), -50%) scale(0.95);
}

.card:nth-last-child(2) {
  --x: calc(-50%);
  transform: translate(var(--x), -50%) scale(1);
}

.card:nth-last-child(1) {
  --x: calc(-50% - 30px);
  transform: translate(var(--x), -50%) scale(1.05);
}

.card:nth-last-child(1) img {
  box-shadow: 0 1px 5px 5px rgba(255, 193, 111, 0.5);
}

@media (max-width: 1200px) {
  .content {
    padding-left: 80px;
  }

  .content p {
    padding-right: 40px;
  }

  .card {
    width: 250px;
    height: 380px;
  }
}

@media (max-width: 1050px) {
  .content {
    padding-left: 60px;
  }

  .content p {
    line-height: 1.5;
  }

  .card {
    width: 220px;
    height: 350px;
  }
}

@media (max-width: 990px) {
  .content p {
    padding-right: 0;
  }

  .card {
    width: 200px;
    height: 300px;
  }
}

@media (max-width: 950px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 4fr 3fr;
    grid-template-areas:
      "stacked"
      "content";
  }

.content {
  grid-area: content;
  text-align: center;
  padding: 0 90px;

}

.stack {
  grid-area: stacked;
  }
}

@media (max-width: 650px) {
  main {
    grid-template-rows: 1fr 1fr;
  }

.card {
    width: 120px;
    height: 250px;
  }

.content{
  padding: 0 50px;
}
}


</style>
