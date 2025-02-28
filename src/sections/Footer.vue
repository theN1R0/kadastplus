<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <img src="@/assets/logo.png" alt="НИЦ" class="footer-logo" />
          <p>@ АО "НИЦ СПБ ЭТУ"</p>
        </div>

        <nav class="footer-nav">
          <a href="#Hero">Главная</a>
          <a href="#About">О решении</a>
          <a href="#Functions">Функции</a>
          <a href="#Whyus">Почему мы?</a>
          <a href="#Offer">Наше предложение</a>
          <a href="#Pricing">Стоимость</a>
          <a href="#Contacts">Контакты</a>
        </nav>
        <div class="footer-socials">
          <a href="#" class="social-icon">
            <img src="@/assets/vk.png" alt="VK" class="icon-white" />
          </a>
          <a href="#" class="social-icon">
            <img src="@/assets/tg.png" alt="Telegram" class="icon-white" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/css/variables.scss";

.footer {
  background: linear-gradient(to right, #1d314c, #192a42);
  padding: 30px 0;

  .container {
    max-width: 1700px;
    margin: 0 auto;
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-top: 30px;

    .footer-logo {
      height: 50px;
      margin-bottom: 50px;
    }

    p {
      font-size: 0.9rem;
      color: #ffffff;
    }
  }

  .footer-nav {
    display: flex;
    gap: 40px;
    justify-content: right;
    flex-grow: 1;
    margin-right: -125px;

    a {
      font-size: 1rem;
      color: #ffffff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #a0c4ff;
      }
    }
  }

  .footer-socials {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    margin-top: 150px;

    .social-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ffffff;
      border-radius: 50%;
      transition: background 0.3s, transform 0.3s;
      padding: 5px;

      img {
        width: 18px;
        height: 18px;
        object-fit: contain;
        filter: brightness(0) invert(1);
      }

      &:hover {
        background: #ffffff;
        transform: scale(1.1);

        img {
          filter: brightness(1) invert(0);
        }
      }
    }
  }

  /* 🔹 Адаптивность */
  @media (max-width: 992px) {
    .footer-content {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    .footer-left {
      align-items: center;
      text-align: center;
    }

    .footer-nav {
      flex-wrap: wrap;
      justify-content: center;
    }

    .footer-socials {
      justify-content: center;
    }
  }
}
</style>
