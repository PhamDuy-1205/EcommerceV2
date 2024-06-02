<script setup>
const props = defineProps({
    id : String,
    name : String,
    category : String,
    description : String,
    price : Number,
    image : String
 });


</script>



<template setup>
    <div class="w-full rounded-[10px] border-[1px] border-[--secondMainColor]">
        <div class="w-full overflow-hidden">
            <img :src="image" alt="" class="w-full h-full object-cover hover:scale-150 duration-[0.5s]">
        </div>


        <div class="w-full px-[5%]">
            <div class="flex justify-center items-center flex-col py-[0.5rem]">
                <p class="text-[1.5rem] text-[--black] font-[600]">{{ name }}</p>
                <div class="w-full">
                    <p class="text-[1rem] text-[--gray] font-[400] multilineTextOverflow">{{ description }}</p>
                </div>
            </div>
            <div class="flex justify-between items-center my-[1rem]">
                <div class="text-[1.25rem] text-[--black] font-[700]">${{price}}/kg</div>
                <div class="w-[50%]">
                    <addToCartButton />
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss">
.multilineTextOverflow{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>