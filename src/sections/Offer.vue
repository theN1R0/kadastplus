<template>
  <section id="Offer" class="offer">
    <div class="container">
      <h2 class="offer-title">ЗАКАЖИТЕ КОНСУЛЬТАЦИЮ ОНЛАЙН</h2>
      <p class="offer-subtitle">
        Наши специалисты справятся с работой любой сложности.<br>
        Оставьте заявку и мы <span class="offer-discount">предоставим скидку 10%</span>
      </p>
      <form class="offer-form" @submit.prevent="submitForm">
        <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            v-model="phoneNumber"
            @input="formatPhone"
            class="offer-input"
        />
        <button type="submit" class="offer-button">ОСТАВИТЬ ЗАЯВКУ</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const phoneNumber = ref("");

// Получаем глобальный notyf из main.js
const { appContext } = getCurrentInstance();
const notyf = appContext.config.globalProperties.$notyf;

const formatPhone = () => {
  let value = phoneNumber.value.replace(/\D/g, "");

  if (value.startsWith("7")) {
    value = value.substring(1);
  }

  if (value.length > 10) {
    value = value.substring(0, 10);
  }

  let formatted = "+7 ";

  if (value.length > 0) {
    formatted += "(" + value.substring(0, 3);
  }
  if (value.length > 3) {
    formatted += ") " + value.substring(3, 6);
  }
  if (value.length > 6) {
    formatted += "-" + value.substring(6, 8);
  }
  if (value.length > 8) {
    formatted += "-" + value.substring(8, 10);
  }

  phoneNumber.value = formatted;
};

const submitForm = () => {
  if (phoneNumber.value.length < 18) {
    notyf.error("Введите корректный номер телефона");
    return;
  }

  notyf.success("Заявка отправлена!");
  phoneNumber.value = "";
};
</script>

<style scoped>
@import "@/css/variables.scss";

.offer {
  padding: 60px 20px;
  background: linear-gradient(135deg, #ce5852, #c24741);
  text-align: center;
  color: white;

  .offer-title {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .offer-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.5;

    .offer-discount {
      font-weight: bold;
      color: #fff200;
    }
  }

  .offer-form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .offer-input {
    padding: 15px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    width: 280px;
    max-width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .offer-button {
    padding: 15px 25px;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffd700;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #ffcc00;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>