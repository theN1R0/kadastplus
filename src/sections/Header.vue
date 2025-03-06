<template>
  <header ref="headerRef" class="header">
    <div class="top-bar">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Логотип и название -->
        <div class="d-flex align-items-center" @click="goToHome">
          <img src="@/assets/logo.png" alt="Логотип" class="logo" />
          <span class="brand-name">ООО КадастрПлюс</span>
        </div>

        <!-- Меню навигации -->
        <nav class="navbar">
          <ul class="navbar-nav d-flex">
            <li class="nav-item">
              <button class="nav-link" @click="navigateTo('Whyus')">Преимущества</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="navigateTo('Pricing')">Услуги</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="navigateTo('About')">О нас</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="navigateTo('Offer')">Консультация</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="navigateTo('Contacts')">Контакты</button>
            </li>
          </ul>
        </nav>
        <div class="d-flex align-items-center contact-block">
          <button
              class="btn order-call"
              @click="navigateTo('Offer')"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, onBeforeUnmount, computed } from 'vue';

const router = useRouter();
const route = useRoute();

const isServicePage = computed(() => route.path.startsWith('/services/'));
const isHome = computed(() => route.path === '/');

// Функция перехода с якорем
const navigateTo = (anchor) => {
  if (isHome.value) {
    const section = document.getElementById(anchor);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    router.push(`/#${anchor}`);
  }
};

// Переход на главную по логотипу
const goToHome = () => {
  if (!isHome.value) {
    router.push('/');
  }
};

onMounted(() => {
  const header = document.querySelector('.header');

  const handleScroll = () => {
    if (window.scrollY > 0 || isServicePage.value) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

@keyframes underlineAnimation {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

.top-bar {
  background-color: rgba(255, 255, 255, 0); // прозрачный фон
  padding: 15px 0;
  color: white;
  font-size: 1.1rem;

  .container {
    max-width: 1700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 40px;
    margin-right: 10px;
    cursor: pointer; /* Добавляем курсор для логотипа */
  }

  .brand-name {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer; /* Добавляем курсор для названия */
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 15px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 6px;
      background-color: #ffcc00;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: width 0.4s ease-out;
    }

    &:hover::after {
      width: 100%;
    }
  }

  .contact-block {
    display: flex;
    align-items: center;
    gap: 20px;

    .order-call {
      background-color: #ffcc00;
      border-radius: 5px;
      padding: 10px 20px;
      color: black;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: darken(#ffcc00, 10%);
      }
    }
  }
}

</style>
