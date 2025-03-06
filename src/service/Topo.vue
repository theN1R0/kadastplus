<template>
  <section class="service">
    <div class="container">
      <h1 class="service-title">Топографическая съемка</h1>
      <div class="service-content">
        <div class="service-image">
          <img
              src="@/assets/services/plan.jpg"
              alt="Топографическая съемка"
          />
        </div>
        <div class="service-text">
          <p>
            Компания <strong>КадастрПлюс</strong> предлагает услугу по топографической съемке в Кировской области для учета изменений границ земельного участка.
          </p>
          <h2>Что такое топографическая съемка?</h2>
          <p>
            Топографическая съемка — это комплекс процедур, целью которых является определение и регистрация местности на определенном участке.
            По завершении этой процедуры на карте отображаются все особенности рельефа, такие как высоты, расстояния, водоемы, строения, растительность, инженерные системы и дорожная инфраструктура.
          </p>
          <p>
            Это необходимо для строительства, реконструкции или планирования объектов, таких как здания, дороги, коммуникации и ландшафтные улучшения.
          </p>
          <p>
            Топографическая съемка проводится по заказу владельца участка и выполняется квалифицированными геодезистами, обладающими соответствующими лицензиями.
            Для этой цели используется высокоточное GPS-оборудование, которое регулярно проверяется на калибровочной станции.
            По завершении съемки составляется план или карта в нужном масштабе, содержащая основные характеристики участка.
          </p>
          <p class="service-price"><strong>Цена от 10 000₽</strong></p>
          <button
              class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
              onclick="window.location.href='tel:+79123727282'"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToOffer = () => {
  const offerSection = document.getElementById("Offer");
  if (offerSection) {
    offerSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
@import "@/css/service.scss";
</style>
