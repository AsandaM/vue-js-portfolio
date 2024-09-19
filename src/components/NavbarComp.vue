<template>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container-fluid">
        <p id="shimmerWave">A.Mehlo </p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: $route.path === '/' }">
              <router-link to="/" class="nav-link">
                <span class="outer">
                  <span class="inner">HOME</span>
                </span>
              </router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/about' }">
              <router-link to="/about" class="nav-link">
                <span class="outer">
                  <span class="inner">ABOUT</span>
                </span>
              </router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/resume' }">
              <router-link to="/resume" class="nav-link">
                <span class="outer">
                  <span class="inner">EDUCATION & EXPERIENCE </span>
                </span>
              </router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/projects' }">
              <router-link to="/projects" class="nav-link">
                <span class="outer">
                  <span class="inner">PROJECTS</span>
                </span>
              </router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/contact' }">
              <router-link to="/contact" class="nav-link">
                <span class="outer">
                  <span class="inner">CONTACT</span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBarComp",
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Honk&family=Marck+Script&family=Mr+Dafoe&display=swap');
  .navbar {
    background-color: #d6dbd8;
    padding: 1rem 2rem;
  }
  
  .navbar-nav {
    display: flex;
    justify-content: end;
    width: 100%;
  }
  
  .nav-item {
    margin: 0 1rem;
    position: relative;
  }
  
  .nav-link {
    text-decoration: none;
    color: #100f0f;
    font-size: 20px;
    position: relative;
  }
  
  .outer::before,
  .outer::after,
  .inner::before,
  .inner::after {
    content: "";
    position: absolute;
    background: #080808;
    transition: transform 0.6s ease;
  }
  
  .outer::before,
  .outer::after {
    height: 1px;
    width: calc(100% + 12px);
    top: 0;
    left: -8px;
    transform: scale(0);
  }
  
  .outer::after {
    bottom: 0;
    transform-origin: right;
  }
  
  .inner::before,
  .inner::after {
    width: 1px;
    height: calc(100% + 10px);
    top: -5px;
    transform: scale(0);
  }
  
  .inner::before {
    left: -2px;
    transform-origin: bottom;
  }
  
  .inner::after {
    right: 0;
    transform-origin: top;
  }
  
  .nav-link:hover .outer::before,
  .nav-link:hover .outer::after,
  .nav-link:hover .inner::before,
  .nav-link:hover .inner::after {
    transform: scale(1);
  }

  .nav-item.active .nav-link {
  position: relative;
}

.nav-item.active .nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #006400, #eeef9d, #afb20a, #7c7d25, #C9CC3F);
  background-size: 500% 100%;
  animation: animate-underline 5s linear infinite;
}

@keyframes animate-underline {
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 100%;
  }
}

#shimmerWave {
  display: inline-block;
  font-family: "Dancing Script", cursive;
  font-size: clamp(2.5rem, 2vw, 3rem);
  font-weight: 500;
  background: -webkit-linear-gradient(0deg, #7c7d25, #1a3a33);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
  