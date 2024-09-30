import React from "react";
import styles from "./Form.module.css";
import Screp from "../../icons/Vectorscrep.svg";

export const Form = () => {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_section}>
        <h2>Работа твоей мечты</h2>
        <form>
          <label className={styles.job_type}>
            <p>
              Вакансия <span className={styles.required}>*</span>
            </p>
            <select required>
              <option value="товаровед">товаровед</option>
              <option value="водитель">водитель</option>
              <option value="повар">повар</option>
              <option value="кассир">кассир</option>
            </select>
          </label>

          <label className={styles.name_data}>
            <p>
              ФИО<span className={styles.required}>*</span>
            </p>
            <input
              type="text"
              placeholder="Ваше полное имя"
              required
              className={styles.name_input}
            />
          </label>

          <div className={styles.about}>
            <label className={styles.date_of_birth}>
              <p>
                Дата рождения<span className={styles.required}>*</span>
              </p>
              <input
                className={styles.date_of_birth_input}
                type="date"
                required
              />
            </label>

            <label className={styles.gender}>
              <p>
                Пол<span className={styles.required}>*</span>
              </p>
              <div className={styles.gender_options}>
                <label className={styles.custom_radio}>
                  <input type="radio" name="gender" checked />
                  <p className={styles.radio_mark}></p>
                  <span>мужской</span>
                </label>
                <label className={styles.custom_radio}>
                  <input type="radio" name="gender" />
                  <p className={styles.radio_mark}></p>
                  <span>женский</span>
                </label>
              </div>
            </label>

            <label className={styles.telephone}>
              <p>
                Контактный телефон<span className={styles.required}>*</span>
              </p>
              <input
                className={styles.telephone_input}
                type="tel"
                placeholder="+7"
                required
              />
            </label>

            <label className={styles.email}>
              <p>
                Электронная почта<span className={styles.required}>*</span>
              </p>
              <input
                className={styles.email_input}
                type="email"
                placeholder="example@example.com"
                required
              />
            </label>
          </div>
          <label className={styles.resume}>
            <p>Резюме</p>
            <textarea className={styles.resume_input}></textarea>
          </label>

          <label className={styles.file}>
            <input
              className={styles.file_input}
              type="file"
              placeholder="Выберети или перетащите файл"
            />
            <label className={styles.file_label}>
              <img className={styles.icon} src={Screp} alt="Скрепка"></img>
              <p>выберите или перетащите файл</p>
            </label>
          </label>

          <label className={styles.accept}>
            <input className={styles.accept_input} type="checkbox" required />
            <span className={styles.checkmark}></span>
            <p>
              я подтверждаю согласие на обработку персональныхданных и принимаю
              условия рассмотрения обращений *
            </p>
          </label>
          <button type='submit' className={styles.submit_btn}><span>Отправить</span></button>
        </form>
      </div>

      <div className={styles.info_section}>
        <h3 className={styles.info_tittle}>Наша суперцель</h3>
        <p className={styles.info_content}>– стать любимым магазином для каждой российской семьи.</p>
        <p className={styles.info_content} >
          Сотни тысяч наших сотрудников ежедневно работают над её достижением.
        </p>
        <p className={styles.info_content}>
          Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если
          вместе с тобой.
        </p>
        <p className={styles.info_telephone}>
          <span>+7 (926) 433-14-16</span>
        </p>
      </div>
    </div>
  );
};
