<template>
  <section id="Contacts" class="contacts">
    <div class="contacts-content">
      <h2 class="contacts-title">СВЯЖИТЕСЬ С НАМИ</h2>
      <div class="contacts-info">
        <p><strong>Адрес:</strong> ул. Вятская, 2, Слободской, Кировская обл., Россия, 613152</p>
        <p><strong>Телефоны:</strong> <a href="tel:+79123727282">+7-912-372-72-82</a>, <a href="tel:+79128291793">+7-912-829-17-93</a></p>
        <p><strong>Email:</strong> <a href="mailto:manilov@rukad.ru">manilov@rukad.ru</a>, <a href="mailto:araslanov@rukad.ru">araslanov@rukad.ru</a></p>
      </div>
    </div>

    <div class="contacts-map">
      <iframe
          src="https://yandex.ru/map-widget/v1/?ll=50.182766%2C58.731363&z=16&pt=50.182766,58.731363,pm2rdm"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen
      ></iframe>
    </div>
  </section>
</template>


<style scoped lang="scss">
@import "@/css/variables.scss";

.contacts {
  padding: 40px 0;
  background-color: #f5f5f5;
  text-align: center;

  .contacts-content {
    width: 100%;
    padding-bottom: 40px;
  }

  .contacts-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #0d1b3e;
  }

  .contacts-info {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    p {
      margin: 10px 0;
      font-size: 1.2rem;
      color: #000;

      a {
        color: #000;
        font-weight: bold;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    strong {
      color: #ffcc00;
    }
  }

  .contacts-map {
    margin-top: 20px;
    width: 100%;
    height: 340px;

    iframe {
      width: 100%;
      height: 400px;
      border: none;
    }
  }
}
</style>
