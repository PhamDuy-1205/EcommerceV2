<template>
    <div class="screen">
        <div class="headerForm">
            <headerForm />
        </div>
        <div class="bodyForm">
            <slot />
        </div>
        <div class="footerForm">
            <footerForm />
        </div>
    </div>
</template>


<style lang="scss">
.screen{
    width: 100%;
    height: 100%;
    user-select: none;
}
</style>