<script setup>
import commonData from '@/common/data';
import media from '~/common/media';
</script>


<template>
    <div id="footer" class="w-full pt-[6rem] px-[20rem] min-h-[30rem] bg-[#45595b]   border-[1px] border-red-600">
        <div class="block w-full border-[1px] border-white">
            <div class="flex justify-between items-center">
                <div class="w-[20rem] flex justify-center items-start flex-col">
                    <p class="text-[2.5rem] text-[--firstMainColor] font-[600]">{{ commonData.webName }}</p>
                    <p class="text-[1rem] text-[--secondMainColor] font-[400]">Products</p>
                </div>
                <div class="w-[calc(100vw-80rem)] relative flex justify-center items-center">
                    <input type="text" class="absolute w-full py-[1rem] px-[1.5rem] rounded-[30px]" placeholder="Your Email">
                    <button type="submit" class="absolute py-[1rem] px-[1.5rem] rounded-[30px] bg-[--firstMainColor] right-0 font-[700] text-[--white] hover:bg-[--secondMainColor] duration-[.5s] active:text-[black]">Subscribe Now</button>
                </div>
                <div class="w-[20rem] flex justify-end items-center">
                    <img :src="media.facebook_icon" alt="facebook_icon" class="w-[40px] mr-[1rem] rounded-[50%] bg-[--yellow]">
                    <div class="p-[10px] w-[40px] mr-[1rem] rounded-[50%] bg-[--yellow]">
                        <img :src="media.linkedin_icon" alt="facebook_icon">
                    </div>
                </div>
            </div>
            <div class="w-full border-t-[1px] border-[--secondMainColor] my-[1rem] opacity-[0.6]"></div>
            <div>3</div>
            <div>4</div>
        </div>
    </div>
</template>

<style lang="scss"></style>