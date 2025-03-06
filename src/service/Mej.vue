<template>
  <section class="service">
    <div class="container">
      <h1 class="service-title">Межевание земельного участка</h1>
      <div class="service-content">
        <div class="service-image">
          <img
              src="@/assets/services/mej.jpg"
              alt="Межевание земельного участка"
          />
        </div>
        <div class="service-text">
          <p>
            Компания <strong>КадастрПлюс</strong> предлагает услугу по межеванию в Кировской области для учета изменений границ земельного участка.
          </p>
          <h2>Наши услуги:</h2>
          <p>
            <strong>Уточнение границ земельного участка.</strong> Определение местоположения земельного участка на местности.
          </p>
          <p>
            <strong>Раздел земельного участка.</strong> Исходный участок прекращает свое существование, вместо него образуются два или несколько новых земельных участков.
          </p>
          <p>
            <strong>Объединение земельных участков.</strong> Объединяем смежные земельные участки в один, при этом исходный участок прекращает свое существование.
          </p>
          <p>
            <strong>Перераспределение земельных участков.</strong> В результате перераспределения смежных участков образуются новые земельные участки, а исходные прекращают существование.
          </p>
          <p>
            <strong>Исправление реестровой ошибки.</strong> Корректировка границ участков при наличии ошибок, вызванных некорректным определением координат.
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
@import "@/css/variables.scss";

.service {
  padding: 100px 20px;

  .service-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
    color: black;
  }

  .service-content {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;

    @media (min-width: 992px) {
      flex-wrap: nowrap;
    }
  }

  .service-image {
    flex: 1;
    max-width: 500px;

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 3px solid #ffcc00;
    }
  }

  .service-text {
    flex: 1;
    font-size: 1.1rem;
    line-height: 1.6;
    color: black;

    h2 {
      margin-top: 20px;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .service-price {
      margin-top: 20px;
      font-size: 1.3rem;
      color: #ffcc00;
      font-weight: bold;
    }

    .order-call {
      margin-top: 20px;
      background-color: #ffcc00;
      border: none;
      padding: 15px 30px;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: darken(#ffcc00, 10%);
      }
    }
  }
}
</style>
