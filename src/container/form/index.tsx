import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './style.module.css';
import {ISectionProps} from '../../types';

interface FormData {
  name: string;
  phone: string;
  agree: boolean;
}

export const Form = ({id}: ISectionProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    mode: 'onBlur',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    console.log(data);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    toast.success('Форма успешно отправлена!');
  };

  return (
    <section id={id} className={style.section}>
      {isLoading && <div className={style.loader}></div>}
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.formLabel}>Отправь форму</h2>

        <div className={style.inputForm}>
          <div className={style.inputWrapper}>
            <div className={style.inputContainer}>
              <input
                {...register('name', {
                  required: 'Имя обязательно',

                  minLength: {
                    value: 2,
                    message: 'Не менее 2 символов',
                  },
                })}
                placeholder='Имя'
                className={`${style.input} ${
                  errors.name ? style.invalid : name ? style.valid : ''
                }`}
                value={name}
                onChange={e => setName(e.target.value)}
              />
              {errors.name ? (
                <span className={style.errorIcon}>✖</span>
              ) : name ? (
                <span className={style.successIcon}>✔</span>
              ) : null}
              {errors.name && <p className={style.error}>{errors.name.message}</p>}
            </div>
          </div>

          <div className={style.inputWrapper}>
            <div className={style.inputContainer}>
              <input
                {...register('phone', {
                  required: 'Телефон обязателен',
                  pattern: /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/,
                })}
                placeholder='Телефон'
                className={`${style.input} ${
                  errors.phone ? style.invalid : phone ? style.valid : ''
                }`}
                value={phone}
                type='tel'
                onChange={e => setPhone(e.target.value)}
              />
              {errors.phone ? (
                <span className={style.errorIcon}>✖</span>
              ) : phone ? (
                <span className={style.successIcon}>✔</span>
              ) : null}
              {errors.phone && <p className={style.error}>{errors.phone.message}</p>}
            </div>
          </div>
        </div>

        <div className={style.checkSubmit}>
          <div className={style.checkboxWrapper}>
            <input
              type='checkbox'
              {...register('agree', {required: 'Согласие обязательно'})}
              className={style.checkbox}
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
            />
            <label className={style.label}>Согласен, отказываюсь</label>
            {errors.agree && <p className={style.errorCheck}>{errors.agree.message}</p>}
          </div>

          <button type='submit' className={style.button} disabled={isLoading}>
            Отправить
          </button>
        </div>
      </form>
    </section>
  );
};
