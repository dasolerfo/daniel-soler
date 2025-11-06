<template>
<div class="w-full h-full flex items-center justify-center mt-5 pb-15">
    <div class="w-full max-w-6xl h-115 bg-gray-900 rounded-lg shadow-lg p-5 ">
        <div class="flex gap-18 flex-wrap justify-center">
            <transition-group name ="technology-fade" tag="div" class="flex flex-wrap justify-center gap-10">
                <Technology v-for="(tech, index) in visibleTechnologies" :key="tech.name" :icon="tech.icon" :name="tech.name" 
                :bgcolor="tech.bgcolor" 
                :textColor="tech.textColor" 
                class="technology"
                :style="{ transitionDelay: animacioEntrada ? `${index * 150}ms` : '0ms' }"
            />
            </transition-group>
            
        </div>
    </div>

</div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Technology from './Technology.vue';

interface TechnologyItem {
  name: string;
  icon: string;
  bgcolor?: string;
  textColor?: string;
}

export default defineComponent({
  components: { Technology },

  props: {
    technologies: {
      type: Array as () => TechnologyItem[],
      default: () => ([
        { name: 'Vue.js', icon: 'assets/logos/Vue.js.svg' },
        { name: 'Node.js', icon: 'assets/logos/Node.js.svg' },
        { name: 'Python', icon: 'assets/logos/Python.svg' },
        { name: 'Docker', icon: 'assets/logos/Docker.svg' }
      ])
    }
  },

  data() {
    return {
      visibleTechnologies: [] as TechnologyItem[],
      animacioEntrada: false
    };
  },

  mounted() {
    // inicialitza correctament
    this.visibleTechnologies = this.technologies.map(t => ({ ...t }));
  },

  methods: {
    async fadeOutIn(newTechs: TechnologyItem[]) {
      this.animacioEntrada = false;
      const temps = newTechs.length * 150;

      // Esborrem els actuals
      for (let i = this.visibleTechnologies.length - 1; i >= 0; i--) {
        this.visibleTechnologies.splice(i, 1);
      }

      await new Promise(resolve => setTimeout(resolve, 502));

      // Afegim els nous amb animació
      this.animacioEntrada = true;
      for (let i = 0; i < newTechs.length; i++) {
        this.visibleTechnologies.push(newTechs[i]);
      }

      await new Promise(resolve => setTimeout(resolve, temps));
      this.animacioEntrada = false;
    }
  },

  watch: {
    technologies: {
      handler(newVal: TechnologyItem[]) {
        this.fadeOutIn(newVal);
      }
    }
  }
});
</script>


<style>
.technology-fade-enter-active{}
.technology-fade-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    
}

.technology-fade-enter-from {
    opacity: 0;
    transform: translateY(40px);
}
.technology-fade-enter-to {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0s;
}

.technology-fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.technology-fade-leave-to {
    opacity: 0;
    transform: translateY(-40px);
}
</style>