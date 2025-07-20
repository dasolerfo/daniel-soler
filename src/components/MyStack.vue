<template>
    <div class="w-max-7xl items-center bg-gradient-to-r bg-gray-800 box-border">
      
      <h2
        v-intersect
        class="text-7xl font-bold mb-4 text-white text-left ml-40 pt-10 translate-y-10 transition duration-700 ease-out">
        El meu Stack
      </h2>

      <div class=" box-border w-full p-15">
        <!-- Contenidor lateral -->
          <div id="stack" class="relative text-white text-2xl mt-10 flex max-w-7xl m-auto bg-gray-700 rounded-lg text-center ">
            <p
              class="p-3 rounded-lg w-full"
              :class="{ 'bg-gray-600': selectedStack === 0 }"
              @click="changeStack(0)"
            >FRONTEND</p>
            <p
              class="p-3 rounded-lg w-full"
              :class="{ 'bg-gray-600': selectedStack === 1 }"
              @click="changeStack(1)"
            >BACKEND</p>
            <p
              class="p-3 rounded-lg w-full"
              :class="{ 'bg-gray-600': selectedStack === 2 }"
              @click="changeStack(2)"
            >DEVOPS</p>
            <p
              class="p-3 rounded-lg w-full"
              :class="{ 'bg-gray-600': selectedStack === 3 }"
              @click="changeStack(3)"
            >DATA BASES</p>

          </div>

          <StackComponent
          :technologies="tecnologies[selectedStack]"
          />

      </div>
    </div>
  </template>
  
  <style>

   #stack p:hover{
    background-color: aliceblue;
    color: #364153;
    transition-duration: 0.5s;
    cursor: pointer;
   }

    #stack p::after:hover{
    background-color: #364153;
    transition-duration: 0.5s;
   }


</style>

<script>

// from-gray-800 to-gray-900
import StackComponent from './StackComponent.vue';




export default {
  name: 'MyStack',
  directives: {
    intersect: {
      inserted(el, binding) {
        const options = {
          root: null,
          threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.remove('translate-y-10');
              el.classList.add('translate-y-0');
              observer.unobserve(el);
            }
          });
        }, options);
        observer.observe(el);
      }
    }
  },
  components: {
    StackComponent
  },
  methods: {
    changeStack(index) {
      this.selectedStack = index;
    }
  }
  , data() {
    const tecnologies = [ [
  { name: 'HTML', icon: 'assets/logos/HTML5.svg', bgcolor: '#E34F26', textColor: '#ffffff' },
  { name: 'CSS', icon: 'assets/logos/CSS3.svg', bgcolor: '#1572B6', textColor: '#ffffff' },
  { name: 'Sass', icon: 'assets/logos/Sass.svg', bgcolor: '#CC6699', textColor: '#ffffff' },
  { name: 'Tailwind CSS', icon: 'assets/logos/Tailwind CSS.svg', bgcolor: '#38B2AC', textColor: '#ffffff' },
  { name: 'JavaScript', icon: 'assets/logos/JavaScript.svg', bgcolor: '#F7DF1E', textColor: '#000000' },
  { name: 'TypeScript', icon: 'assets/logos/TypeScript.svg', bgcolor: '#3178C6', textColor: '#ffffff' },
  { name: 'Vue.js', icon: 'assets/logos/Vue.js.svg', bgcolor: '#42B883', textColor: '#35495E' },
  { name: 'React', icon: 'assets/logos/React.svg', bgcolor: '#20232A', textColor: '#61DAFB' }
],[
  { name: 'Go', icon: 'assets/logos/Go.svg', bgcolor: '#00ADD8', textColor: '#ffffff' },
  { name: 'Python', icon: 'assets/logos/Python.svg', bgcolor: '#3776AB', textColor: '#FFD43B' },
  { name: 'Java', icon: 'assets/logos/Java.svg', bgcolor: '#007396', textColor: '#ffffff' },
  { name: 'C#', icon: 'assets/logos/CSharp.svg', bgcolor: '#68217A', textColor: '#ffffff' },
  { name: 'PHP', icon: 'assets/logos/PHP.svg', bgcolor: '#8892BF', textColor: '#ffffff' },
  { name: 'Laravel', icon: 'assets/logos/Laravel.svg', bgcolor: '#FF2D20', textColor: '#ffffff' },
  { name: 'CodeIgniter', icon: 'assets/logos/CodeIgniter.svg', bgcolor: '#EE4623', textColor: '#ffffff' },
  { name: 'Gingo', icon: 'assets/logos/gingo.webp', bgcolor: '#00AF9C', textColor: '#ffffff' }
], [
  { name: 'Docker', icon: 'assets/logos/Docker.svg', bgcolor: '#0db7ed', textColor: '#ffffff' },
  { name: 'Kubernetes', icon: 'assets/logos/Kubernetes.svg', bgcolor: '#326CE5', textColor: '#ffffff' },
  { name: 'Git', icon: 'assets/logos/Git.svg', bgcolor: '#F05032', textColor: '#ffffff' },
  { name: 'GitHub', icon: 'assets/logos/GitHub.svg', bgcolor: '#181717', textColor: '#ffffff' },
  { name: 'AWS', icon: 'assets/logos/AWS.svg', bgcolor: '#FF9900', textColor: '#000000' },
  { name: 'Postman', icon: 'assets/logos/Postman.svg', bgcolor: '#FF6C37', textColor: '#ffffff' },
  
], [
  { name: 'PostgreSQL', icon: 'assets/logos/Postgres.svg', bgcolor: '#336791', textColor: '#ffffff' },
  { name: 'MongoDB', icon: 'assets/logos/MongoDB.svg', bgcolor: '#47A248', textColor: '#ffffff' },
  { name: 'Redis', icon: 'assets/logos/Redis.svg', bgcolor: '#D82C20', textColor: '#ffffff' },
  { name: 'MySQL', icon: 'assets/logos/MySQL.svg', bgcolor: '#00758F', textColor: '#ffffff' },
  { name: 'SQLite', icon: 'assets/logos/SQLite.svg', bgcolor: '#003B57', textColor: '#ffffff' },
  { name: 'Firebase', icon: 'assets/logos/Firebase.svg', bgcolor: '#FFCA28', textColor: '#000000' }
]];

    return {tecnologies: tecnologies, selectedStack: 0};
  }
  
};


</script>