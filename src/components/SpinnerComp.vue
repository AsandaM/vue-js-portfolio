<template>
    <div class="flex-container">
      <div class="ball"></div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
<style scoped>
.ball {
    position: absolute;
    width: 20vmin;
    height: 20vmin;
    background: linear-gradient(to right, #d6dbd8 60%, #1a3a33 40%);
    border-radius: 50%;
    filter: blur(1vmin);
    box-shadow: 0 0 0.25vmin 0.75vmin #1a3a33 inset;
    top: calc(50% - 3vmin);
    animation: ballAnim 6000ms linear infinite, flexAnim 6000ms linear infinite;
  }
  
  @keyframes flexAnim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes ballAnim {
    0% {
      left: 0;
      transform: scale(0);
    }
    10% {
      left: 0;
      transform: scale(1);
    }
    90% {
      left: calc(50% - 3vmin);
      transform: scale(1);
    }
    100% {
      left: calc(50% - 3vmin);
      transform: scale(0);
    }
  }
  </style>
  