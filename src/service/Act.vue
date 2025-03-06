<template>
  <section class="service">
    <div class="container">
      <h1 class="service-title">Составление акта обследования</h1>
      <div class="service-content">
        <div class="service-image">
          <img
              src="@/assets/services/act.jpg"
              alt="Акт обследования"
          />
        </div>
        <div class="service-text">
          <p>
            Компания <strong>КадастрПлюс</strong> предлагает составление акта
            обследования для снятия объекта недвижимости с кадастрового учета.
          </p>
          <h2>Что такое акт обследования?</h2>
          <p>
            Акт обследования требуется, когда объект недвижимости (здания,
            сооружения, объекты незавершенного строительства, помещения) уже не
            существует, а в государственном кадастре недвижимости по-прежнему
            содержатся сведения о нем. Такие сведения необходимо исключить из
            кадастра.
          </p>
          <p class="service-price"><strong>Цена от 5 000₽</strong></p>
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
              <strong>Заключение договора.</strong> В договоре указываются виды работ, сроки, составляется смета и выводится общая сумма оплаты.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Выезд на место</strong> кадастрового инженера и обработка информации. Инженер запрашивает имеющиеся в ГКН данные и сверяет их с реальным состоянием.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Составление акта.</strong> Документ заверяется электронной подписью и квалифицированной печатью. Один экземпляр заказчику, второй в кадастровую палату.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Юридическое оформление.</strong> На основании акта принимается решение о прекращении существования объекта в ГКН.
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