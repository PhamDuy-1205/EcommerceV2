<script setup>
import commonData from '@/common/data';
import media from '~/common/media';
</script>


<template>
    <div id="footer" class="flex justify-center w-full bg-[--black]">
        <div class="w-[81.1rem] mx-[2rem] my-[3rem]">
            <div class="block lg:flex justify-between items-center">
                <div class="w-full lg:w-auto justify-start lg:justify-center items-start flex-col">
                    <p class="text-[2.5rem] text-[--firstMainColor] font-[600]">{{ commonData.mainData.webName }}</p>
                    <p class="text-[1rem] text-[--secondMainColor] font-[400]">All Products</p>
                </div>
                <div class="w-full lg:w-[50%] my-[1rem]">
                    <div class="w-full relative flex justify-center items-center h-[3.5rem] pl-[1.5rem] rounded-[30px] bg-white">
                        <input type="text" class="w-full h-full text-[1.5rem] outline-none" placeholder="Your Email">
                        <button type="submit" class="rounded-[30px] w-[12rem] h-full bg-[--firstMainColor] right-0 font-[700] text-[--white] hover:bg-[--secondMainColor] duration-[.5s] active:text-[black]">Subscribe Now</button>
                    </div>
                </div>
                <div class="flex justify-end items-center">
                    <div class="p-[10px] w-[40px] mr-[1rem] rounded-[50%] bg-[--yellow]">
                        <img :src="media.facebook_icon" alt="facebook_icon">
                    </div>
                    <div class="p-[10px] w-[40px] mr-[1rem] rounded-[50%] bg-[--yellow]">
                        <img :src="media.linkedin_icon" alt="linkedin_icon">
                    </div>
                    <div class="p-[10px] w-[40px] mr-[1rem] rounded-[50%] bg-[--yellow]">
                        <img :src="media.youtube_icon" alt="youtube_icon">
                    </div>
                    <div class="p-[10px] w-[40px] mr-[1rem] rounded-[50%] bg-[--yellow]">
                        <img :src="media.twitter_icon" alt="twitter_icon">
                    </div>
                </div>
            </div>
            
            <div class="w-full border-t-[1px] border-[--secondMainColor] my-[1rem] opacity-[0.6]"></div>

            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between items-start">
                <div class="sm:w-[95%]">
                    <p class="text-title">Why People Like us!</p>
                    <p class="text-content">typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                    <div class="w-fit px-[25px] py-[10px] border-[1px] border-[--secondMainColor] rounded-[30px] mt-[1rem] button-hover">
                        <p class="font-[600]">Read More</p>
                    </div>
                </div>
                <div>
                    <p class="text-title">Shop Info</p>
                    <p class="text-content">About Us</p>
                    <p class="text-content">Contact Us</p>
                    <p class="text-content">Privacy Policy</p>
                    <p class="text-content">Terms & Condition</p>
                    <p class="text-content">Return Policy</p>
                    <p class="text-content">FAQs & Help</p>
                </div>
                <div>
                    <p class="text-title">Account</p>
                    <p class="text-content">My Account</p>
                    <p class="text-content">Shop details</p>
                    <p class="text-content">Shopping Cart</p>
                    <p class="text-content">Wishlist</p>
                    <p class="text-content">Order History</p>
                    <p class="text-content">International Orders</p>
                </div>
                <div>
                    <p class="text-title">Contact</p>
                    <p class="text-content">Address: {{ commonData.mainData.address }}</p>
                    <p class="text-content">Email: {{ commonData.mainData.email }}</p>
                    <p class="text-content">Phone: {{ commonData.mainData.phone }}</p>
                    <p class="text-content">Payment Accepted:</p>
                    <img :src="media.payment" alt="" class="mt-[1rem]">
                </div>
            </div>

            <div></div>
        </div>
    </div>
</template>

<style lang="scss">
#footer {
    .text-title{
        font-size: 1.5rem;
        color: var(--white);
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .text-content{
        width: fit-content;
        font-size: 1rem;
        color: rgba(255,255,255,.5);
        font-weight: 400;
        line-height : 35px;
    }
    .text-content:hover {
        color: var(--secondMainColor);
        cursor: pointer;
        transition-duration: 0.5s;
        transform: translateY(2px)
    }

    .button-hover {
        color: var(--firstMainColor);
        transition-duration: 0.5s;
    }
    .button-hover:hover {
        background-color: var(--secondMainColor);
        color: var(--white) !important;
        cursor: pointer;
    }
}
</style>