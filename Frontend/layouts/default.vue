<template>
    <div class="screen font-sans">
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
    user-select: none;
}
</style>