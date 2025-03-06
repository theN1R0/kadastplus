<template>
  <div>
    <!-- Контент главной страницы -->
    <Hero />
    <Whyus />
    <Pricing />
    <About />
    <Offer />
  </div>
</template>

<script setup>
import Hero from "@/sections/Hero.vue";
import Whyus from "@/sections/Whyus.vue";
import Pricing from "@/sections/Pricing.vue";
import About from "@/sections/About.vue";
import Offer from "@/sections/Offer.vue";
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

.container {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
