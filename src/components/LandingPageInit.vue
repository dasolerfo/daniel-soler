<template>
    <div class="flex h-screen">
      <!-- Side panel -->
      <div  class="w-1/3  text-white p-5 flex flex-col justify-center">
        <Transition name="fade-up">
        <div v-if="show" class="flex flex-col space-y-4 m-10 justify-center">
          <h1 class="text-7xl font-bold mb-4">Daniel Soler</h1>
          <h2 class="text-3xl font-bold mb-4">Desenvolupador Fullstack</h2>
          <h2 class="text-3xl font-bold mb-4">Enginyer informàtic</h2>
          <p class="text-gray-400 mb-6 text-xl mt-5">
            <span class="text-white">Desenvolupador Fullstack</span> amb experiència en llenguatges com
            <strong class="text-cyan-400">Go</strong> i <strong class="text-red-400">PHP Laravel</strong> per el desenvolupament d'aplicacions backend,
            <strong class="text-green-400">Vue.js</strong> i <strong class="text-cyan-500">React</strong> per el frontend d'aplicacions web, amb experiencia amb 
            diferents entorns de bases de dades com <strong class="text-white">PostGreSQL</strong> o <strong class="text-yellow-100">MySQL</strong>
            </p>
            <div class="flex space-x-4 mt-5">
            <a href="https://github.com/danielsoler" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github-mark/github-mark-white.svg" alt="GitHub" class="w-10 h-10">
            </a>
            <a href="https://www.linkedin.com/in/danielsoler/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.svg" alt="LinkedIn" class="w-10 h-10 filter invert">
            </a>
            <a href="https://www.instagram.com/danielsoler/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram-white-icon.svg" alt="Instagram" class="w-10 h-10">
            </a>
           
            </div>
        </div>
      </Transition>
      </div>
    
  
      <!-- Main image/content -->
      <div class="w-2/3 relative overflow-hidden bg-position-bottom">
        <div class="relative w-full h-full rounded-xl">
          <img
            src="/assets/dani-soler.jpeg"
            alt="Dani Soler"
            class="object-cover w-full h-full bg-position-bottom object-bottom"
          />
          <div class="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
  
      </div>

    </div>
  </template>
  
  <style scoped>
  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: all 1s ease;
    transition-delay: 0.5s;
  }
  .fade-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  .fade-up-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  
  <script >



export default {
    name: 'LandingPageInit',
    data (){
        return {show: false} 
    },
    mounted (){
        this.show = true;
    }
}
  </script>
  
  <style scoped>
  /* Si vols més control, pots afegir posicionament personalitzat aquí */
  </style>
  