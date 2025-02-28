<template>
  <section id="Whyus" class="whyus">
    <div class="whyus-top">
      <div class="container">
        <h2>Почему мы?</h2>
        <div class="whyus-features">
          <div v-for="(feature, index) in features" :key="index" class="feature-item">
            <span class="icon">✦</span> {{ feature }}
          </div>
        </div>
      </div>
    </div>

    <div class="whyus-bottom">
      <div class="container">
        <div class="whyus-content">
          <div class="certificate">
            <img :src="certificateImage" alt="Свидетельство регистрации программы" />
          </div>
          <div class="text-content">
            <h3>Свидетельство регистрации программы</h3>
            <p>Наш продукт официально зарегистрирован и подтвержден на государственном уровне.</p>
            <p>
              Мы получили свидетельство о государственной регистрации программы для ЭВМ, что подтверждает
              соответствие продукта всем необходимым требованиям и стандартам.
            </p>
            <p>
              Это свидетельство не только подчеркивает уникальность и оригинальность разработки, но и
              гарантирует защиту наших прав на интеллектуальную собственность.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import certificateImage from "@/assets/certificate.png";

const features = [
  "Ведущий разработчик интеллектуальных решений для бизнеса",
  "Более 10 лет опыта в сфере искусственного интеллекта",
  "Научные публикации и патенты",
  "Успешно реализованные проекты в различных отраслях",
];
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.whyus {
  .whyus-top {
    background: linear-gradient(90deg, #2837df, #1e4086);
    padding: 60px 0;
    color: white;
    height: 350px;

    .container {
      max-width: 1700px;
      margin: 0 auto;
      text-align: left;
    }

    h2 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #ffffff;
    }

    .whyus-features {
      display: flex;
      justify-content: start;
      gap: 60px;
      margin-top: 50px;
    }

    .feature-item {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      gap: 10px;
    }

    .icon {
      font-size: 2rem;
      color: #ffffff;
    }
  }

  .whyus-bottom {
    background: #ffffff;
    padding: 80px 0;

    .container {
      max-width: 1700px;
      margin: 0 auto;
    }

    .whyus-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 50px;
    }

    .certificate img {
      width: 500px;
      border-radius: 10px;
    }

    .text-content {
      flex: 1;
      margin: 50px;
    }

    h3 {
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 20px;
      color: #242424;
    }

    p {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 15px;
      font-weight: 100;
    }
  }

  @media (max-width: 992px) {
    .whyus-top .whyus-features {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .whyus-bottom .whyus-content {
      flex-direction: column;
      text-align: center;
    }

    .certificate img {
      width: 300px;
    }
  }
}
</style>
