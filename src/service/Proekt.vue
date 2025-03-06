<template>
  <section class="service">
    <div class="container">
      <h1 class="service-title">Проектирование</h1>
      <div class="service-content">
        <div class="service-image">
          <img
              src="@/assets/services/proekt.jpg"
              alt="Проектирование"
          />
        </div>
        <div class="service-text">
          <p>
            Компания <strong>КадастрПлюс</strong> предлагает услугу проектирования:
          </p>
          <h2>Что включает услуга?</h2>
          <p>
            <strong>Различных типов зданий:</strong><br />
            Жилых зданий: индивидуальные дома, квартиры.<br />
            Промышленных зданий: заводы, фабрики.<br />
            Общественных зданий: школы, больницы, офисы.<br />
            Административных зданий: офисные здания, муниципальные учреждения.
          </p>
          <p>
            <strong>Оформление перепланировки:</strong><br />
            Квартир: изменение внутренней планировки квартир.<br />
            Нежилых помещений: перепланировка офисов, магазинов, складов.
          </p>
          <p class="service-price"><strong>Цена от 8 000₽</strong></p>
          <button
              class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
              onclick="window.location.href='tel:+79123727282'"
          >
            Заказать звонок
          </button>
        </div>
      </div>

      <!-- Секция этапов -->
      <div class="service-steps">
        <h2 class="steps-title">Этапы осуществления проекта</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Топографическая съемка</strong> земельного участка м 1:500.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Получение градостроительного плана</strong> земельного участка в отделе архитектуры.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Изготовление схемы планировочной организации земельного участка (СПОЗУ).</strong>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Подача документов и получение разрешения на строительство</strong> объекта капитального строительства.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <strong>Сопровождение</strong> до получения выписки из ЕГРН.
            </div>
          </div>
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