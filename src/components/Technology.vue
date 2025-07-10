<template>
    <div class= "w-50 flex flex-col items-center justify-center p-4  rounded-lg shadow-lg duration-200"
    :style="{
        backgroundColor: isHover === true ? bgcolor : '',
    }"
    @mouseover="isHover = true"
    @mouseleave="isHover = false">

        <img :src="icon" alt="Technology Icon" class="w-35 h-35 mb-2">
        <h3 class="text-white text-xl font-semibold"
        :style="{ color: isHover === true ? textColor : '',}" >{{ name }}</h3>
    </div>    
</template>

<script>
export default {
    name: 'Technology',
    props: {
        icon: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        bgcolor: {
            type: String,
            required: false
        }, 
        textColor: {
            type: String,
            required: false
        }
        

    },
    data() {
        return {isHover: false}
    }
};
</script>