<template>
  <div class="  bg-black">
  <SideBar @toggle-menu="aplicaFilter"></SideBar>
  <div :class="menuActive ?  'blancinegre' : 'totColor'">
  <LandingPageInit></LandingPageInit>
  
  <QuiSocComponent></QuiSocComponent>
  <MyStack></MyStack>
</div>
</div>

</template>

<script lang="ts"> 
  import LandingPageInit from './components/LandingPageInit.vue';
import SideBar from './components/SideBar.vue';
import QuiSocComponent from './components/QuiSocComponent.vue';
import MyStack from './components/MyStack.vue';

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
        SideBar,
        QuiSocComponent,
        MyStack
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