<template>
  <section id="Pricing" class="pricing">
    <div class="container">
      <div class="pricing-content">
        <h2>Стоимость</h2>
        <p>
          Программа предназначена для юридических лиц и требует заключения лицензионного соглашения.
          Для приобретения НейроПоиска необходимо отправить запрос в адрес АО «НИЦ СПб ЭТУ».
        </p>
        <button class="pricing-button">Узнать стоимость</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pricing {
  background: linear-gradient(90deg, #2837df, #1e4086);
  padding: 80px 0;
  color: #ffffff;

  .container {
    max-width: 1700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .pricing-content {
    max-width: 600px;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .pricing-button {
    background: rgba(15, 42, 85, 0.8);
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    padding: 12px 30px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    height: 60px;

    &:hover {
      background: rgba(15, 42, 85, 1);
    }
  }
}
</style>
