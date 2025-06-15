<template>
  <div class="  bg-black">
  <SideBar @toggle-menu="aplicaFilter"></SideBar>
  <div :class="menuActive ?  'blancinegre' : 'totColor'">
  <LandingPageInit></LandingPageInit>
  </div>
  <h1>Qualsevol marranada on me la posa</h1>
</div>

</template>

<script> 
  import LandingPageInit from './components/LandingPageInit.vue';
import SideBar from './components/SideBar.vue';

  export default {
    data() {
        return {
          activeComp: '',
          menuActive: false
        }
      },
      methods: {
        aplicaFilter() {
          console.log('aplicaFilter')
          this.menuActive = !this.menuActive
        }
      },
      components: {
        LandingPageInit,
        SideBar
      }
  }
  

</script>
<style scoped>
  .blancinegre{
    filter: grayscale(50%);
    transition: filter 0.5s ease-in-out;
  }

  .totColor{
    filter: grayscale(0%);
    transition: filter 0.5s ease-in-out;
  }
</style>