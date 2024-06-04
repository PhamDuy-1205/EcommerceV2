<script setup>
import media from '~/common/media';
</script>

<template>
    <div class="flex items-center justify-center w-full py-[10px] px-[5%] border-[1px] border-[--secondMainColor] rounded-[30px] addToCartButtonHover hover:cursor-pointer active:translate-y-[1px]">
        <img :src="media.green_cart" alt="green cart icon" class="w-[15%] mr-[10%]">
        <p class="text-[1rem] font-[600] whitespace-nowrap">Add To Cart</p>
    </div>
</template>

<style lang="scss">
    .addToCartButtonHover{
        color : var(--firstMainColor)
    }
    .addToCartButtonHover:hover{
        background-color: var(--secondMainColor);
        color : var(--white);
        // transition-duration : 0.2s;
    }
</style>