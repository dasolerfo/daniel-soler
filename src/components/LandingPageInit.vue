<template>
    <div class="flex h-screen">
      <!-- Side panel -->
      <div  class="w-1/3  text-white p-5 flex flex-col justify-center">
        <Transition name="fade-up">
        <div v-if="show" class="flex flex-col space-y-4 ml-10 mr-5 justify-center">
          <h1 class="text-6xl font-bold mb-4">Daniel Soler</h1>
          <h2 class="text-3xl font-bold mb-4">{{ $t('message.fullstackdev') }}</h2>
          <h2 class="text-3xl font-bold mb-4">{{ $t('message.enginyerInfo') }}</h2>
          <p class="text-gray-400 mb-6 text-l mt-5">
            <span class="text-white">{{ $t('message.fullstackdev') }}</span> {{ $t('message.intro1') }}
            <strong class="text-cyan-400">Go</strong> {{ $t('message.and') }} <strong class="text-red-400">PHP Laravel</strong> {{ $t('message.intro2') }}
            <strong class="text-green-400">Vue.js</strong> {{ $t('message.and') }} <strong class="text-cyan-500">React</strong> {{ $t('message.intro3') }} <strong class="text-white">PostGreSQL</strong> {{ $t('message.or') }} <strong class="text-yellow-100">MySQL</strong>
            </p>
            <div class="flex space-x-4 mt-5">
            <a href="https://github.com/dasolerfo" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github-mark/github-mark-white.svg" alt="GitHub" class="w-10 h-10">
            </a>
            <a href="https://www.linkedin.com/in/daniel-soler-fontanet" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.svg" alt="LinkedIn" class="w-10 h-10 filter invert">
            </a>
            <a href="https://www.instagram.com/danii_soler13" target="_blank" rel="noopener noreferrer">
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
      <div class="relative h-1/15 bg-gradient-to-t from-green-900  to-transparent"></div>
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
  
  <script lang="ts">



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
  