<template>
  <div>
    <Header />

    <main>
      <router-view />
    </main>

    <Contacts />
    <Footer />
  </div>
</template>

<script setup>
import Header from './sections/Header.vue';
import Contacts from './sections/Contacts.vue';
import Footer from './sections/Footer.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  min-height: 100vh;
}

main {
  margin-top: 0px; /* отступ под фиксированный хедер */
  flex: 1;
}
</style>
