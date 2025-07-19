<template>
<div class="w-full h-full flex items-center justify-center p-10">
    <div class="w-full max-w-6xl h-140 bg-gray-900 rounded-lg shadow-lg p-10 ">
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
<script>
 
import Technology from './Technology.vue';

export default {
    components: {
        Technology
    },
    data() {
        return {
            visibleTechnologies: this.technologies.map(t => ({ ...t })),
            animacioEntrada: false
        };
    },

    methods: {
    async fadeOutIn(newTechs) {
      // Esborrem els actuals amb delay progressiu
      this.animacioEntrada = false;
        var temps = newTechs.length * 150;
      for (let i = this.visibleTechnologies.length - 1; i >= 0; i--) {
        this.visibleTechnologies.splice(i, 1);
      }
       //await new Promise(resolve => setTimeout(resolve, temps));

      // Ara afegim els nous amb delay
      this.animacioEntrada = true;
      var temps = newTechs.length * 200;
      await new Promise(resolve => setTimeout(resolve, 502));
      for (let i = 0; i < newTechs.length; i++) {
        // Assegura que cada tecnologia tingui l'atribut transitionDelay
        //const techWithDelay = { ...newTechs[i], transitionDelay: `${i * 150}ms` };
        this.visibleTechnologies.push(newTechs[i]);
        //:style="{ transitionDelay: tech.transitionDelay  }"
    
        //this.visibleTechnologies.push(newTechs[i]);
        //await new Promise(resolve => setTimeout(resolve, 150));
      }
       await new Promise(resolve => setTimeout(resolve, temps));
       this.animacioEntrada = false;

    }

    },
    props: {
        technologies: {
            type: Array,
            default: () => ([
                { name: 'Vue.js', icon: 'assets/logos/Vue.js.svg' },
                { name: 'Node.js', icon: 'assets/logos/Vue.js.svg' },
                { name: 'Python', icon: 'assets/logos/Vue.js.svg' },
                { name: 'Docker', icon: 'assets/logos/Vue.js.svg' }
            ])
        }
    },

    watch: {
        technologies: {
            handler(newVal) {
                this.fadeOutIn(newVal);
            }
        }
    }
};

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