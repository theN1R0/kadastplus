<template>
  <div>
    <Header />
    <Hero />
    <About />
    <Whom />
    <Functions />
    <Features />
    <Requirements />
    <Whyus />
    <Offer />
    <Pricing />
    <Contacts />
    <main class="container mt-4">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./sections/Header.vue";
import Hero from "./sections/Hero.vue";
import About from "./sections/About.vue";
import Whom from "./sections/Whom.vue";
import Functions from "./sections/Functions.vue";
import Features from "./sections/Features.vue";
import Requirements from "./sections/Requirements.vue";
import Whyus from "./sections/Whyus.vue";
import Offer from "./sections/Offer.vue";
import Pricing from "./sections/Pricing.vue";
import Contacts from "./sections/Contacts.vue";
import Footer from "./sections/Footer.vue";

export default {
  components: {
    Header,
    Hero,
    About,
    Whom,
    Functions,
    Features,
    Requirements,
    Whyus,
    Offer,
    Pricing,
    Contacts,
    Footer,
  },
};
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
