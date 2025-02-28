<template>
  <section id="Features" class="features">
    <div class="container">
      <h2>Особенности решения</h2>

      <div class="features-grid">
        <div class="features-column">
          <div class="feature-card big-card big-card-top">
            <div class="feature-icon">
              <img :src="iconCompany" alt="Настройка под компанию" />
            </div>
            <div class="feature-content">
              <h3>Настройка под компанию</h3>
              <p>Вы можете заменить логотип и настроить ссылку на внутренний портал компании, чтобы система идеально вписывалась в существующий IT-ландшафт.</p>
            </div>
          </div>
          <div class="feature-card big-card big-card-bottom">
            <div class="feature-content">
              <h3>Работа без интернета</h3>
              <p>Система работает автономно, без подключения к интернету. Это гарантирует конфиденциальность вашей внутренней документации.</p>
            </div>
            <div class="feature-icon">
              <img :src="iconLock" alt="Работа без интернета" />
            </div>
          </div>
        </div>

        <div class="features-column">
          <div class="feature-card small-card">
            <div class="feature-content">
              <h3>Точность и достоверность результатов</h3>
              <p>Поиск предоставляет точные фрагменты документов без искажений или «галлюцинаций», а также автоматически генерирует ссылки на оригинальные PDF-файлы для проверки контекста.</p>
            </div>
          </div>
          <div class="feature-card small-card">
            <div class="feature-content">
              <h3>Продвинутые технологии обработки данных</h3>
              <p>В основе решения лежат современные модели извлечения признаков (embedding models), обеспечивающие высокую точность поиска даже в сложных случаях.</p>
            </div>
          </div>
          <div class="feature-card big-card big-card-top">
            <div class="feature-icon">
              <img :src="iconPen" alt="Гибкая настройка содержания фрагментов" />
            </div>
            <div class="feature-content">
              <h3>Гибкая настройка содержания фрагментов</h3>
              <p>Предусмотрена возможность ручной корректировки и настройки содержания извлекаемых фрагментов, что позволяет адаптировать результаты под конкретные задачи.</p>
            </div>
          </div>
        </div>

        <div class="features-column">
          <div class="feature-card big-card big-card-bottom">
            <div class="feature-content">
              <h3>Кроссплатформенная серверная часть</h3>
              <p>Серверное ядро решения совместимо с различными операционными системами, что делает внедрение максимально удобным для любой IT-инфраструктуры.</p>
            </div>
            <div class="feature-icon">
              <img :src="iconDatabase" alt="Кроссплатформенная серверная часть" />
            </div>
          </div>
          <div class="feature-card small-card">
            <div class="feature-content">
              <h3>Удобный интерфейс для всех устройств</h3>
              <p>Веб-приложение полностью адаптировано под мобильные устройства, позволяя пользователям работать эффективно в любых условиях.</p>
            </div>
          </div>
          <div class="feature-card small-card">
            <div class="feature-content">
              <h3>Высокая совместимость оборудования</h3>
              <p>Решение успешно функционирует без использования дискретной видеокарты, что снижает затраты на инфраструктуру.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconCompany from "@/assets/company.png";
import iconLock from "@/assets/lock.png";
import iconDatabase from "@/assets/database.png";
import iconPen from "@/assets/pen.png";
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.features {
  padding: 80px 0;
  background-color: #f3f3f3;

  .container {
    max-width: 1700px;
    margin: 0 auto;
    text-align: left;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #1a1a1a;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffffff;
  }

  .features-grid {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  .features-column {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
  }

  .feature-card {
    background: #0f2a55;
    color: white;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    text-align: left;
  }

  .big-card {
    width: 100%;
    min-height: 450px;
  }

  .small-card {
    height: 210px;
  }

  .big-card-top {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    padding-top: 50px;
  }

  .big-card-top .feature-icon {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  .big-card-bottom {
    display: flex;
    justify-content: space-between;
  }

  .big-card-bottom .feature-content {
    flex: 1;
  }

  .big-card-bottom .feature-icon {
    position: absolute;
    bottom: 40px;
    left: 40px;
  }

  .feature-icon img {
    width: 220px;
    height: auto;
  }

  @media (max-width: 992px) {
    .features-grid {
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>



