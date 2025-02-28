<template>
  <section id="Contacts" class="contacts">
    <div class="container">
      <div class="contacts-layout">
        <div class="contacts-info">
          <h2>Хотите сотрудничать?</h2>
          <p>
            Заполните простую форму или позвоните по телефону. Наши менеджеры бесплатно
            проконсультируют вас.
          </p>

          <div class="contact-item">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            <div>
              <strong>Адрес</strong>
              <p>Санкт-Петербург ул. Политехническая, дом 22, литера К</p>
            </div>
          </div>

          <div class="contact-item">
            <font-awesome-icon :icon="['fas', 'clock']" />
            <div>
              <strong>Часы работы</strong>
              <p>По будням 9:00 - 18:00</p>
            </div>
          </div>

          <div class="contact-item">
            <font-awesome-icon :icon="['fas', 'phone']" />
            <div>
              <strong>Телефон</strong>
              <p>+7 (812) 703-75-84</p>
            </div>
          </div>

          <div class="contact-item">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <div>
              <strong>Email</strong>
              <p>sales@nicetu.spb.ru</p>
            </div>
          </div>
        </div>

        <div class="contacts-form">
          <form @submit.prevent="handleSubmit">
            <label>Контактное лицо</label>
            <input type="text" placeholder="Имя" required />

            <label>Email</label>
            <input type="email" placeholder="Email" required />

            <label>Номер телефона</label>
            <input type="tel" placeholder="+7 (000) 000 00-00" required />

            <label>Описание</label>
            <textarea placeholder="Кратко опишите ваш вопрос"></textarea>

            <button type="submit" class="contacts-button">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert("Форма отправлена!");
};
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.contacts {
  padding: 80px 0;
  background-color: #ffffff;

  .container {
    max-width: 1700px;
    margin: 0 auto;
  }

  .contacts-layout {
    display: flex;
    justify-content: space-between;
    gap: 350px;
  }

  .contacts-info {
    max-width: 500px;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #1a1a1a;
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      color: #333;
      margin-bottom: 30px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 50px;

      svg {
        font-size: 24px;
        color: #0f2a55;
      }

      strong {
        font-size: 1rem;
        font-weight: bold;
        color: #1a1a1a;
      }

      p {
        margin: 0;
        font-size: 1rem;
        color: #333;
      }
    }
  }

  .contacts-form {
    flex: 1;
    background: #ffffff;
    border-radius: 10px;

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    label {
      font-size: 1rem;
      font-weight: bold;
      color: #1a1a1a;
    }

    input,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }

    textarea {
      min-height: 250px;
    }

    .contacts-button {
      background: rgba(15, 42, 85, 0.8);
      color: #ffffff;
      font-size: 1rem;
      font-weight: 500;
      padding: 15px 30px;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: background 0.3s ease-in-out;
      width: 150px;

      &:hover {
        background: rgba(15, 42, 85, 1);
      }
    }
  }

  @media (max-width: 1200px) {
    .contacts-layout {
      flex-direction: column;
      gap: 40px;
    }

    .contacts-info {
      max-width: 100%;
    }
  }
}
</style>
