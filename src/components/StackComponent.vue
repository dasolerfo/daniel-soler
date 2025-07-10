<template>
<div class="w-full h-full flex items-center justify-center p-10">
    <div class="w-full max-w-6xl bg-gray-900 rounded-lg shadow-lg p-10">
        <div class="flex gap-18 flex-wrap justify-center">
            <Technology v-for="tech in technologies" :key="tech.name" :icon="tech.icon" :name="tech.name"  :bgcolor="tech.bgcolor" :textColor="tech.textColor"
            />
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

            //isHover: isHover
            // Aquí podrías definir más datos si es necesario
            //En castellà?
        };
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
    }
};

</script>