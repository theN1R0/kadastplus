<template>
  <header class="header">
    <div class="top-bar">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img src="@/assets/logo.png" alt="Логотип" class="logo" />
          <div class="brand">
            <span class="brand-name">НейроПоиск</span>
            <span class="brand-subtitle">Справочная система</span>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <span class="contact-info">
            <a href="mailto:sales@nicetu.spb.ru" class="email">
              <font-awesome-icon icon="envelope" class="me-2" /> sales@nicetu.spb.ru
            </a>
            <a href="tel:+78127037584">
              <font-awesome-icon icon="phone" class="me-2" /> +7 (812) 703-75-84
            </a>
          </span>
          <button class="btn order-call">Заказать звонок</button>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="scrollTo('Hero')">Главная</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="scrollTo('About')">О решении</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="scrollTo('Functions')">Функции</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="scrollTo('Whyus')">Почему мы?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="scrollTo('Offer')">Наше предложение</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="scrollTo('Pricing')">Стоимость</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="scrollTo('Contacts')">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.top-bar {
  background-color: $primary-color;
  padding: 15px 0;
  color: white;
  font-size: 1.1rem;

  .container {
    max-width: 1700px;
    height: 60px;
  }

  .logo {
    height: 50px;
    margin-right: 15px;
  }

  .brand {
    display: flex;
    flex-direction: column;

    .brand-name {
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
    }

    .brand-subtitle {
      font-size: 0.8rem;
      color: lighten(white, 20%);
    }
  }

  .contact-info {
    display: flex;
    align-items: center;
    margin-right: 50px;

    .email {
      margin-right: 40px;
    }

    a {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 1.1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .order-call {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    padding: 12px 25px;
    color: white;
    font-size: 1.2rem;
    font-weight: 100;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      border-color: white;
      color: white;
    }
  }
}

.navbar {
  background-color: white;
  position: relative;
  padding: 15px 0;
  height: 70px;

  .navbar-nav {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    gap: 30px;
  }

  .nav-link {
    font-size: 1.2rem;
    color: $text-dark;
    padding: 15px 20px;
    font-weight: bold;
    position: relative;

    &:hover::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 6px;
      background-color: $primary-color;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
}
</style>
