
export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedin = true;
    if (to.path === '/' && isLoggedin) {
        return navigateTo('/home')
    }
})