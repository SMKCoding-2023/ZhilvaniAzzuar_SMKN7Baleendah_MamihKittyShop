<script lang="ts" setup>
import { useProductsStore } from "~/stores/products";


const productStore = useProductsStore();
const allProducts = ref([]);

productStore.getAllProducts().then(() => {
allProducts.value = productStore.products;
});

const selectedCategory = ref("");

</script>


<template>
  <div id="carouselExample" class="carousel slide" style=" margin-bottom: 15px;" data-bs-ride="true">

  <div class="carousel-inner" style="height: 60vh;">
    <div class="carousel-item active">
      <img src="../images/banner1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../images/banner2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../images/banner3.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<h5 class="judul">New Product</h5>


<div class="container text-center" style="margin-left: 69px; margin-bottom: 20px;">
  <div class="row row-cols-5" style="gap: 74px;">

    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="../images/prod/gam.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="font-weight: 600;">Outemu - Brown Switch</h5>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorum?</p>
          <NuxtLink to="/product" class="btn btn-primary" style="margin-top: 5px;">See Details</NuxtLink>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card" style="width: 18rem; height: 463px;">
        <img src="../images/prod/ser.jpg" class="card-img-top" alt="...">
        <div class="card-body" style="margin-top: 37.7px;">
          <h5 class="card-title" style="font-weight: 600;">NAS Server</h5>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorum?</p>
          <NuxtLink to="/product" class="btn btn-primary" style="margin-top: 5px;">See Details</NuxtLink>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="../images/prod/1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="font-weight: 600;">Hachiroku - Tshirt</h5>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorum?</p>
          <NuxtLink to="/product" class="btn btn-primary" style="margin-top: 5px;">See Details</NuxtLink>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="../images/prod/4.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="font-weight: 600;">Supra T-Shirt + Not Released</h5>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorum?</p>
          <NuxtLink to="/product" class="btn btn-primary" style="margin-top: 5px;">See Details</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</div>




</template>

<style scoped>
.judul{
  font-weight: 600;
  font-size: large;
  display: flex;
  justify-content: center;
  margin-block: 15px;
}
</style>