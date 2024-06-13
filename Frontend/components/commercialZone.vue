<script setup>
import media from '~/common/media';

const props = defineProps({
    title : String,
    content : String,
    image : String
 });

</script>

<template>
    <div class="w-full bg-[#ffb524]">
        <div class="w-full h-fit min-h-[40rem] lg:flex justify-center items-center">
            <div class="w-full lg:w-[50%] flex justify-center items-center flex-col px-[5%] py-[2vw]">
                <p class="text-[calc(1rem+3vw)] text-[--white] font-[800] mb-[1rem] lg:mb-[3rem]">{{ props.title }}</p>
                <p class="text-[1rem] text-[--black] font-[400]">{{ props.content }}</p>
            </div>
            <div class="w-full lg:w-[50%] flex justify-center items-center">
                <img class="w-[70%]" :src="props.image" alt="Apple basket commercial">
            </div>
        </div>
    </div>
</template>