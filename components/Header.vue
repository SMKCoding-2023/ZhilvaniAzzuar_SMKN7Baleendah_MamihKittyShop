<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const isAuthenticated = ref();
const router = useRouter();

isAuthenticated.value = useCookie("access_token").value;

const logout = async () => {
  await authStore.logout();
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");
  accessToken.value = null;
  refreshToken.value = null;
  setTimeout(() => {
    isAuthenticated.value = useCookie("access_token").value;
  }, 100);
  router.push({
    path: "/",
  });
};
</script>

<template>
  <header class="w-full border-b border-slate-200 py-2 px-10 bg-blue-100">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="flex gap-5 items-center ">
            <img src="../public/images/logo.png" style="width: 75px; height: 70px; margin-left: -90px;">
          <div>
            <NuxtLink to="/" class="text-xl font-bold" style="">MK - Shop</NuxtLink>
          </div>
          <nav class="flex items-center gap-6">
            <NuxtLink to="/" class="text-base hover:text-white">Home</NuxtLink>

            <NuxtLink to="/product" class="text-base hover:text-white">Product</NuxtLink>

            <NuxtLink to="/cart" class="text-base hover:text-white">Cart</NuxtLink>

          </nav>
        </div>

        <div>
          
        </div>

          
        <div class="flex column gap-2" style="margin-right: -115px;">
          <form class="d-flex w-80" role="search">
            <input class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> 
          <NuxtLink v-if="!isAuthenticated" to="/login" class="text-base bg-blue-600 px-6 py-2 text-white rounded-lg hover:bg-blue-600/80">Login</NuxtLink>
          <div v-else class="text-base cursor-pointer bg-red-600 px-6 py-2 text-white rounded-lg hover:bg-red-600/80" @click="logout">Logout</div>
        </div>
      </div>
    </div>
  </header>
</template>z