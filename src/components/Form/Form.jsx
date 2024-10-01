import React from "react";
import styles from "./Form.module.css";
import Screp from "../../icons/Vectorscrep.svg";
import { useForm } from "react-hook-form";
import Capthca from "../../images/personal/image11captcha.png";

export const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // Данные со всех инпутов сохраняются в data для дальнейшего взаимодйствия
    const name = data.nameData;
    const dateOfBirth = data.dateOfBirth;
    const tel = data.telData;
    const email = data.emailData;
    alert(`Вы ввели ФИО: ${name}, 
      Дата Рождения: ${dateOfBirth}
      Номер телефона: ${tel}
      Email: ${email}
      `);
  };

  return (
    <>
    <h2 className={styles.margin_mobile}>Работа твой мечты</h2>
      <div className={styles.form_container}>
        <div className={styles.form_section}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.job_type}>
              <p className={styles.margin_mobile}>
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
              <p className={styles.margin_mobile}>
                ФИО<span className={styles.required}>*</span>
              </p>
              <input
                {...register("nameData", {
                  required: "Поле не заполнено до конца",
                  minLength: {
                    value: 7,
                    message: "Минимум 7 символов",
                  },
                })}
                type="text"
                placeholder="Ваше полное имя"
                className={styles.name_input}
                style={errors?.nameData && { background: "#FF6666" }}
              />
              <div style={{ color: "red", fontSize: "14px" }}>
                {errors?.nameData && (
                  <span>{errors?.nameData?.message || "Ошибка"}</span>
                )}
              </div>
            </label>
            <div className={styles.about}>
              <label className={styles.date_of_birth}>
                <p>
                  Дата рождения<span className={styles.required}>*</span>
                </p>
                <input
                  {...register("dateOfBirth", {
                    required: "Поле не заполнено",
                  })}
                  className={styles.date_of_birth_input}
                  type="date"
                  style={
                    errors?.dateOfBirth && {
                      background: "rgba(255, 102, 102, 1)",
                    }
                  }
                />
                <div style={{ color: "red", fontSize: "14px" }}>
                  {errors?.dateOfBirth && (
                    <span>{errors?.dateOfBirth?.message || "Ошибка"}</span>
                  )}
                </div>
              </label>
              <label className={styles.gender}>
                <p>
                  Пол<span className={styles.required}>*</span>
                </p>
                <p className={styles.gender_options}>
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
                </p>
              </label>
              <label className={styles.telephone}>
                <p>
                  Контактный телефон<span className={styles.required}>*</span>
                </p>
                <input
                  {...register("telData", {
                    required: "Поле заполнено не корректно",
                  })}
                  className={styles.telephone_input}
                  type="tel"
                  placeholder="+7"
                  style={errors?.telData && { background: "#FF6666" }}
                />
                <div style={{ color: "red", fontSize: "14px" }}>
                  {errors?.telData && (
                    <span>{errors?.telData?.message || "Ошибка"}</span>
                  )}
                </div>
              </label>
              <label className={styles.email}>
                <p>
                  Электронная почта<span className={styles.required}>*</span>
                </p>
                <input
                  {...register("emailData", {
                    required: "Поле не заполнено",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: "Введены некорректные данные",
                    },
                  })}
                  className={styles.email_input}
                  type="text"
                  placeholder="example@example.com"
                  style={errors?.emailData && { background: "#FF6666" }}
                />
                <div style={{ color: "red", fontSize: "14px" }}>
                  {errors?.emailData && (
                    <span>{errors?.emailData?.message || "Ошибка"}</span>
                  )}
                </div>
              </label>
            </div>
            <label className={styles.resume}>
              <p className={styles.margin_mobile}>Резюме</p>
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
            <label className={styles.captha}>
              <span>Капча</span>
              <input
                {...register("captha", { required: true })}
                className={styles.accept_input}
                type="checkbox"
              />
              <p className={styles.capthaBlock}>
                <p className={styles.capthaContent}>
                  <span
                    style={errors?.accept && { background: "#FF6666" }}
                    className={styles.checkmark}
                  ></span>
                  <p>я не робот</p>
                  <img
                    className={styles.captchaLogo}
                    src={Capthca}
                    alt="Капча"
                  />
                </p>
                <span>* Поле обязательно для заполнения</span>
              </p>
            </label>
            <label className={styles.accept}>
              <input
                {...register("accept", { required: true })}
                className={styles.accept_input}
                type="checkbox"
              />
              <span
                style={errors?.accept && { background: "#FF6666" }}
                className={styles.checkmark}
              ></span>
              <p>
                я подтверждаю согласие на обработку персональныхданных и
                принимаю условия рассмотрения обращений *
              </p>
            </label>

            <input
              disabled={!isValid}
              type="submit"
              className={styles.submit_btn}
            ></input>
          </form>
        </div>

        <div className={styles.info_section}>
          <h3 className={styles.info_tittle}>Наша суперцель</h3>
          <p className={styles.info_content}>
            – стать любимым магазином для каждой российской семьи.
          </p>
          <p className={styles.info_content}>
            Сотни тысяч наших сотрудников ежедневно работают над её достижением.
          </p>
          <p className={styles.info_content}>
            Мы уверены, что в ближайшие годы достигнем этого и будет здорово,
            если вместе с тобой.
          </p>
          <p className={styles.info_telephone}>
            <span>+7 (926) 433-14-16</span>
          </p>
        </div>
      </div>
    </>
  );
};
