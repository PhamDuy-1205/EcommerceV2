<script setup>
import commonData from '@/common/data';
import media from '@/common/media';

const tempImg = ref(1);

const listImage = ref();

const categoryList = commonData.categoryList;

const selectedCategoryItem = ref(0)

function handleSelectCategoryItem(categoryItemIndex){
    selectedCategoryItem.value = categoryItemIndex
}

// =========== Dữ liệu tạm thời ================

// List hình ảnh background category
const categoryPicList = [media.category_1, media.category_2];


// =========== Dữ liệu tạm thời ================


</script>


<template>
    <div id="homepage">
        <div class="flex justify-center items-center flex-col w-full py-[5rem] lg:px-[3rem]   border-[1px] border-red-500">
            <div class="block xl:flex justify-center items-center w-[80%] px-[1rem]">

                <div class="flex justify-center items-start flex-col w-full xl:w-[60%] mb-[2rem] xl:mb-0">
                    <p class="mb-[1rem] text-[1.5rem] text-[--secondMainColor] font-[600]">100% Organic Foods</p>
                    <p class="mb-[3rem] text-[4rem] text-[--firstMainColor] font-[800] max-w-[48rem]">Organic Veggies & Fruits Foods</p>
                    <div class="w-full">
                        <div class="w-full max-w-[37rem] relative flex justify-center items-center h-[3.5rem] pl-[1.5rem] rounded-[30px] border-[1px] border-[--gray] bg-white">
                            <input type="text" class="w-full h-full text-[1.5rem] outline-none" placeholder="Search">
                            <button type="submit" class="rounded-[30px]  w-[13rem] h-full bg-[--firstMainColor] right-0 font-[700] text-[--white] hover:bg-[--secondMainColor] duration-[.5s] active:text-[black]">Subscribe Now</button>
                        </div>
                    </div>
                </div>
                <div class="xl:ml-[1rem] flex items-center w-full xl:w-[40%] p-2rem relative border-[1px] border-[--secondMainColor] rounded-[30px] overflow-hidden">
                    <div class="flex justify-start items-center w-full xl:h-[20rem] overflow-hidden">
                        <img v-for="categoryPic, index in categoryPicList" :src="categoryPic" alt="" class="w-full">
                    </div>
                    <div class="flex justify-center items-center absolute h-[30px] w-[30px] bg-[--firstMainColor] rounded-[50%]">
                        <p class="font-[800]"><</p>
                    </div>
                    <div class="flex justify-center items-center absolute h-[30px] w-[30px] bg-[--firstMainColor] rounded-[50%] right-0">
                        <p class="font-[800]">></p>
                    </div>
                </div>
            </div>

            <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-between items-center w-full p-[3rem] my-[7rem]">
                <!-- Free Shipping -->
                <div class="flex justify-center items-center flex-col p-[1.5rem] bg-[#f4f6f8]">
                    <div class="relative flex justify-center w-[120px] h-[120px] mx-[69px] rounded-[50%] bg-[--yellow]">
                        <div class="absolute w-[60px] bottom-[30px]">
                            <img :src="media.white_car_icon" alt="">
                        </div>
                        <div class="absolute w-[35px] h-[35px] bottom-[-10px] rotate-45 bg-[--yellow]"></div>
                    </div>
                    <div class="flex justify-between items-center flex-col">
                        <p class="text-[--black] text-[1.25rem] font-[600] mt-[2.5rem]">Free Shipping</p>
                        <p class="text-[#747d88] text-[1rem] mt-[0.5rem]">Free on order over $300</p>
                    </div>
                </div>
                
                <!-- Security Payment -->
                <div class="flex justify-center items-center flex-col p-[1.5rem] bg-[#f4f6f8]">
                    <div class="relative flex justify-center w-[120px] h-[120px] mx-[69px] rounded-[50%] bg-[--yellow]">
                        <div class="absolute w-[60px] bottom-[30px]">
                            <img :src="media.white_security_payment_icon" alt="">
                        </div>
                        <div class="absolute w-[35px] h-[35px] bottom-[-10px] rotate-45 bg-[--yellow]"></div>
                    </div>
                    <div class="flex justify-between items-center flex-col">
                        <p class="text-[--black] text-[1.25rem] font-[600] mt-[2.5rem]">Security Payment</p>
                        <p class="text-[#747d88] text-[1rem] mt-[0.5rem]">100% security payment</p>
                    </div>
                </div>

                <!-- 30 Day Return -->
                <div class="flex justify-center items-center flex-col p-[1.5rem] bg-[#f4f6f8]">
                    <div class="relative flex justify-center w-[120px] h-[120px] mx-[69px] rounded-[50%] bg-[--yellow]">
                        <div class="absolute w-[60px] bottom-[30px]">
                            <img :src="media.white_refund_icon" alt="">
                        </div>
                        <div class="absolute w-[35px] h-[35px] bottom-[-10px] rotate-45 bg-[--yellow]"></div>
                    </div>
                    <div class="flex justify-between items-center flex-col">
                        <p class="text-[--black] text-[1.25rem] font-[600] mt-[2.5rem]">30 Day Return</p>
                        <p class="text-[#747d88] text-[1rem] mt-[0.5rem]">30 day money guarantee</p>
                    </div>
                </div>

                <!-- 24/7 Support -->
                <div class="flex justify-center items-center flex-col p-[1.5rem] bg-[#f4f6f8]">
                    <div class="relative flex justify-center w-[120px] h-[120px] mx-[69px] rounded-[50%] bg-[--yellow]">
                        <div class="absolute w-[60px] bottom-[30px]">
                            <img :src="media.white_phone_icon" alt="">
                        </div>
                        <div class="absolute w-[35px] h-[35px] bottom-[-10px] rotate-45 bg-[--yellow]"></div>
                    </div>
                    <div class="flex justify-between items-center flex-col">
                        <p class="text-[--black] text-[1.25rem] font-[600] mt-[2.5rem]">24/7 Support</p>
                        <p class="text-[#747d88] text-[1rem] mt-[0.5rem]">Support every time fast</p>
                    </div>
                </div>
            </div>

            <!-- Bestseller Products -->
            <div class="block lg:flex justify-between items-center w-full px-[3rem] my-[2rem]">
                <p class="text-[calc(1.375rem+1.5vw)] font-[600] text-[--black] mb-[1rem] lg:mb-0">Bestseller Products</p>
                <div class="w-[100%] py-[5px] lg:w-[40vw] flex justify-start items-center overflow-x-auto">
                    <div v-for="categoryItem, index in categoryList" class="flex justify-center items-center text-[1rem] rounded-[30px] py-[10px] px-[20px] mx-[10px] w-fit min-w-[6rem] hover:cursor-pointer hover:translate-y-[-2px]" :class="{ 'bg-[#f4f6f8]': selectedCategoryItem != index, 'bg-[--secondMainColor]': selectedCategoryItem == index }" @click="handleSelectCategoryItem(index)">
                        <p :class="{'whitespace-nowrap text-[--white]': selectedCategoryItem == index }">{{ categoryItem }}</p>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-[3rem] py-[1rem]">
                <ItemsCart v-for="item, index in commonData.productData.slice(0, 8)" class="w-[20vw]" :name="item.name" :category="item.category" :description="item.description" :price="item.price" :image="item.image"/>
            </div>

            <!-- Commercial -->
            <div class="w-full h-fit mt-[4rem] mb-[2rem]">
                <CommercialZone :title="commonData.commercialData.title" :content="commonData.commercialData.content" :image="commonData.commercialData.image"/>
            </div>

            <!-- Recent Products -->
            <div class="block lg:flex justify-between items-center w-full px-[3rem] my-[2rem]">
                <p class="text-[calc(1.375rem+1.5vw)] font-[600] text-[--black] mb-[1rem] lg:mb-0">Recent Products</p>
            </div>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-[3rem] py-[1rem]">
                <ItemsCart v-for="item, index in commonData.productData.slice(0, 8)" class="w-[20vw]" :name="item.name" :category="item.category" :description="item.description" :price="item.price" :image="item.image"/>
            </div>


        </div>
    </div>
</template>