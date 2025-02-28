<template>
  <section id="Requirements" class="requirements">
    <div class="container">
      <div class="requirements-layout">
        <div class="requirements-title">
          <h2>Технические требования</h2>
        </div>

        <div class="requirements-content">
          <h3>Аппаратные требования</h3>
          <p>
            Для обеспечения функционирования программы требуется следующая минимальная конфигурация
            аппаратных средств персональной электронно-вычислительной машины (ПЭВМ):
          </p>

          <div class="requirement-card">
            <div class="requirement-row">
              <div class="requirement-title">Системный блок</div>
              <div class="requirement-content">
                <p><strong>Тип процессора:</strong> четырехъядерный</p>
                <p><strong>Тактовая частота:</strong> 2.66 ГГц</p>
                <p><strong>Оперативная память (RAM):</strong> Минимум 16 ГБ</p>
                <p><strong>Жесткий диск или SSD:</strong> Объем не менее 200 ГБ</p>
                <p><strong>Привод для чтения дисков:</strong> DVD-RW</p>
              </div>
            </div>
          </div>

          <div class="requirement-card">
            <div class="requirement-row">
              <div class="requirement-title">Внешние устройства</div>
              <div class="requirement-content">
                <p><strong>Клавиатура:</strong> Стандартная компьютерная клавиатура</p>
                <p><strong>Манипулятор:</strong> «Мышь»</p>
                <p><strong>Монитор:</strong> Размер экрана минимум 19 дюймов, разрешение 1280×1024 пикселей</p>
              </div>
            </div>
          </div>

          <h3>Программные требования</h3>
          <p>
            Для корректной работы программы необходимо предварительно настроить и установить
            следующие компоненты:
          </p>

          <div class="requirement-card">
            <div class="requirement-title">Контроллер домена Active Directory (AD)</div>
          </div>

          <div class="requirement-card">
            <div class="requirement-row">
              <div class="requirement-title">Операционная система</div>
              <div class="requirement-content">Windows 10 или Ubuntu 24.04</div>
            </div>
          </div>

          <div class="requirement-card">
            <div class="requirement-title">Программная платформа Docker</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/css/variables.scss";

.requirements {
  padding: 80px 0;
  background-color: #ffffff;

  .container {
    max-width: 1700px;
    margin: 0 auto;
  }

  .requirements-layout {
    display: flex;
    gap: 80px;
    align-items: center;
  }

  .requirements-title {
    flex: 0 0 400px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    color: #1a1a1a;
    white-space: wrap;
  }

  .requirements-content {
    flex: 1;
    max-width: 1300px;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #1a1a1a;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 25px;
    font-weight: bold;
  }

  .requirement-card {
    background: #283f65;
    color: white;
    border-radius: 12px;
    padding: 20px 25px;
    margin-bottom: 15px;
  }

  .requirement-row {
    display: flex;
    justify-content: space-between;
    gap: 200px;
  }

  .requirement-title {
    flex: 0 0 520px;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }


  .requirement-content {
    flex: 1;
    font-size: 1rem;
    line-height: 1.5;
  }

  .requirement-content p {
    margin-bottom: 5px;
    color: #ffffff;

  }

  @media (max-width: 1200px) {
    .requirements-layout {
      gap: 50px;
    }

    .requirements-title {
      flex: 0 0 250px;
    }

    .requirement-row {
      gap: 30px;
    }
  }

  @media (max-width: 992px) {
    .requirements-layout {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }

    .requirements-title {
      flex: none;
      text-align: left;
    }

    .requirement-row {
      flex-direction: column;
    }
  }
}
</style>
