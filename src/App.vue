<template>
  <div class="  bg-black">
  <LandingPageInit></LandingPageInit>
  <h1>Qualsevol marranada on me la posa</h1>
</div>

</template>
<script>
  import LandingPageInit from './components/LandingPageInit.vue';

  export default {
    data() {
        return {
          activeComp: ''
        }
      },
      components: {
        LandingPageInit
      }
  }
  

</script>