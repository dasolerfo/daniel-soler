<template>
    <div class="fixed left-5 top-5 z-50">
        <button @click="toggleMenu" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <Transition name="slide">
            <div v-if="isMenuOpen" class="fixed top-0 left-0 w-1/3 h-full bg-gray-800 text-white shadow-lg">
                <button @click="toggleMenu" class="relative top-5 left-5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <ul>
                    <li class="p-4 border-b border-gray-700">Menu Item 1</li>
                    <li class="p-4 border-b border-gray-700">Menu Item 2</li>
                    <li class="p-4 border-b border-gray-700">Menu Item 3</li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">

import { isMemoSame, ref } from 'vue';
export default {
    name: 'SideBar',

    data (){
        return {isMenuOpen: false}
    },
    emits: ['toggle-menu'],
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            this.$emit('toggle-menu');
      }
    }
};




</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    
}
.fixed {
    z-index: 1000;
}

</style>