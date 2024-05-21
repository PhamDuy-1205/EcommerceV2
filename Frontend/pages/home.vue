<script setup>
import commonData from '@/common/data';
import media from '@/common/media';

const tempImg = ref(2);
</script>


<template>
    <div id="homepage">
        <div class="flex justify-center items-center w-full py-[5rem] px-[3rem]   border-[1px] border-red-500">
            <div class="block xl:flex justify-center items-center w-[80%] px-[1rem]">
                <div class="flex justify-center items-start flex-col w-full lg:w-[60%]">
                    <p class="mb-[1rem] text-[1.5rem] text-[--secondMainColor] font-[600]">100% Organic Foods</p>
                    <p class="mb-[3rem] text-[4rem] text-[--firstMainColor] font-[800] max-w-[48rem]">Organic Veggies & Fruits Foods</p>
                    <div class="w-full">
                        <div class="w-full max-w-[37rem] relative flex justify-center items-center h-[3.5rem] pl-[1.5rem] rounded-[30px] border-[1px] border-[--gray] bg-white">
                            <input type="text" class="w-full h-full text-[1.5rem] outline-none" placeholder="Search">
                            <button type="submit" class="rounded-[30px]  w-[13rem] h-full bg-[--firstMainColor] right-0 font-[700] text-[--white] hover:bg-[--secondMainColor] duration-[.5s] active:text-[black]">Subscribe Now</button>
                        </div>
                    </div>
                </div>

                <div class="ml-[1rem] flex items-center w-full lg:w-[40%] p-2rem">
                    <div class="flex justify-center items-center w-full h-[20rem]">
                        <img :src="tempImg == 1 ? media.category_1 : media.category_2" :alt="tempImg == 1 ? 'category_1' : 'category_2'" class="w-full h-full  rounded-[40px]">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>