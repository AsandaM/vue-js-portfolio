<template>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container-fluid">
        <p id="shimmerWave">MEHLO A.</p>
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
  /* animation: wave 2.4s ease infinite; */
  letter-spacing: 0.01em;
  transform-origin: 100% 50%;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "MORF" 15,
    "SHLN" 50;
  font-size: 34px;
}

@keyframes wave {
  0% {
    transform: translate3D(0, 0, 0) scale(1) rotateY(0);
    color: #000;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  12% {
    transform: translate3D(2px, -2px, 2px) scale(1.16) rotateY(6deg);
    color: lighten(#000, 54%);
  }
  15% {
    text-shadow: 0 0 2px lighten(#000, 30%);
  }
  24% {
    transform: translate3D(0, 0, 0) scale(1) rotateY(0);
    color: lighten(#000, 10%);
    opacity: 1;
  }
  36% {
    transform: translate3D(0, 0, 0) scale(1);
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>
  