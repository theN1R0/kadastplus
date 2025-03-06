<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <span class="footer-logo">ООО «КадастрПлюс»</span>
        <span>© {{ new Date().getFullYear() }} Все права защищены.</span>
        <span><strong>Телефон:</strong> <a href="tel:+79123727282">+7 (912) 372-72-82</a></span>
        <span><strong>Email:</strong> <a href="mailto:manilov@rukad.ru">manilov@rukad.ru</a></span>
        <nav class="footer-links">
          <a href="#Whyus">Преимущества</a>
          <a href="#Pricing">Услуги</a>
          <a href="#Contacts">Контакты</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 50px 10px;
  font-size: 1rem;

  .container {
    max-width: 1700px;
    margin: 0 auto;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;

    span,
    nav {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .footer-logo {
      font-weight: bold;
      color: #ffcc00;
      font-size: 1.1rem;
    }

    a {
      color: #ffcc00;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    .footer-links {
      gap: 15px;
      display: flex;
    }
  }
}
</style>
