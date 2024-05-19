<script setup>
import commonMedia from '@/common/media';
import commonData from '@/common/data';

const menuBoxDisplay = ref(false)
</script>


<template>
    <div id="navbar" class="w-full flex justify-center">
        <div class="w-[70%] h-[6.3rem] flex justify-center items-center flex-col xl:h-auto">
            <div class="w-full hidden justify-between items-center p-[20px] rounded-tl-[230px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[230px] text-[--white] font-[400] text-[0.875rem] bg-[--firstMainColor]
            xl:flex">
                <div class="flex justify-start items-center">
                    <img :src="commonMedia.yellow_position_marker" alt="yellow_position_marker" class="w-[20px]">
                    <p class="mr-[20px] ishovering">{{ commonData.address }}</p>
                    <img :src="commonMedia.yellow_email" alt="yellow_position_marker" class="w-[20px] mr-[5px]">
                    <p class="ishovering">{{ commonData.email }}</p>
                </div>
                <div class="flex justify-center items-center">
                    <h1 class="ishovering">Privacy Policy</h1>
                    <h1 class="mx-[10px]">/</h1>
                    <h1 class="ishovering">Terms of Use</h1>
                    <h1 class="mx-[10px]">/</h1>
                    <h1 class="ishovering">Sales and Refunds</h1>
                </div>
            </div>
            <div class="w-full flex justify-between items-center my-[0.5rem]">
                <h1 class="text-[2.5rem] font-[800] text-[--firstMainColor]">{{ commonData.webName }}</h1>

                <div class="hidden xl:flex justify-between items-center">
                    <p class="text-[16px] text-[--gray] font-[400] py-[10px] px-[15px] ishovering">Home</p>
                    <p class="text-[16px] text-[--gray] font-[400] py-[10px] px-[15px] ishovering">Shop</p>
                    <p class="text-[16px] text-[--gray] font-[400] py-[10px] px-[15px] ishovering">Shop Detail</p>
                </div>

                <div class="hidden xl:flex justify-end items-center">
                    <img :src="commonMedia.green_search" alt="green_search" class="w-[40px] ml-[10px] ishovering">
                    <img :src="commonMedia.green_cart" alt="green_cart" class="w-[40px] ml-[10px] ishovering">
                    <img :src="commonMedia.green_user_profile" alt="green_user_profile" class="w-[40px] ml-[10px] ishovering">
                </div>

                <div class="inline-block xl:hidden justify-end items-center relative">
                    <div class="border-[--gray] border-[1px] rounded-[10px] hover:border-[--firstMainColor] hover:border-[3px] ishovering" @click="menuBoxDisplay =! menuBoxDisplay" :class="{ 'border-[3px] border-[--firstMainColor]': menuBoxDisplay, 'border-[1px]': !menuBoxDisplay }">
                        <img :src="commonMedia.green_menu" alt="green_menu" class="w-[20px] my-[0.5rem] mx-[1rem] mb-[10px]">
                    </div>
                    <div v-if="menuBoxDisplay" class="flex xl:hidden justify-center items-center flex-col absolute min-w-[12rem] border-[1px] border-[--gray] rounded-[10px] right-0 top-[43px] bg-white">
                        <div class="flex justify-center items-start flex-col w-full font-[600]">
                            <p class="text-[16px] text-[--gray] py-[10px] px-[15px] ishovering">Home</p>
                            <p class="text-[16px] text-[--gray] py-[10px] px-[15px] ishovering">Shop</p>
                            <p class="text-[16px] text-[--gray] py-[10px] px-[15px] ishovering">Shop Detail</p>
                        </div>

                        <div class="flex justify-between items-center my-[1rem]">
                            <img :src="commonMedia.green_search" alt="green_search" class="w-[40px] ml-[10px] ishovering">
                            <img :src="commonMedia.green_cart" alt="green_cart" class="w-[40px] ml-[10px] ishovering">
                            <img :src="commonMedia.green_user_profile" alt="green_user_profile" class="w-[40px] ml-[10px] ishovering">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
#navbar {
    .ishovering:hover {
        cursor: pointer;
        color: var(--secondMainColor);
        transform: translateY(-2px);
        transition-duration: 0.05s;
    }
    .ishovering:active {
        transform: translateY(2px)
    }

    .bordered {
        border: 1px solid black;
    }
}
</style>