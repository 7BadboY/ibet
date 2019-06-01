import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import { CSSTransition } from 'react-transition-group';
import Confetti from 'react-dom-confetti';
import { setTimeout } from 'timers';
import styles from './ModalLogin.module.css';
import transition from './transition.module.css';
import Overlay from './Overlay/Overlay';
import Login from './Login/login';
import SignUp from './SignUp/SignUp';
import {
  toogleModalLogin,
  asyncSignup,
  toogleLogin,
} from './ModalLoginActions';

const INITIALSTATE = {
  login: ``,
  password: ``,
  email: ``,
  errors: {
    isLoginRight: true,
    isLoginExist: false,
    isLoginLengsOk: true,
    IsLoginFirstDigit: false,
    isLoginInEng: true,
    isLoginLengthToMuch: false,
    isPasswordRight: true,
    isPasswordOneWord: true,
    isPasswordLengsOk: true,
    isPasswordinEng: true,
    isPasswordLengthToMuch: false,
    isPasswordContainLogin: false,
    isAllInputFilled: true,
    isEmailValid: true,
  },
  isLoaderShowed: false,
  isConfetti: false,
};

const language = {
  eng: {
    text: {
      signInHeader: 'Sign in',
      signUpHeader: 'Create Account',
      signInButton: 'Sign in',
      signUpButton: 'Sign up',
      forgot: 'Forgot your password?',
      login: 'Login',
      email: 'Email',
      password: 'Password',
      textHeaderIn: 'Hello, Friend!',
      textContentIn: 'Enter your personal details and start journey with us',
      textHeaderUp: 'Welcome Back!',
      textContentUp:
        'To keep connected with us please login with your personal info',
    },
    errors: {
      password: {
        isPasswordRight: 'Invalid Password',
        isPasswordLengsOk: 'Passwords must be at least 8 characters long',
        isPasswordinEng: `Password can only contain latin characters and digits`,
        isPasswordLengthToMuch: `Password can only contain 16 characters`,
        isPasswordContainLogin: `Password cant contain a login`,
      },
      email: {
        isEmailValid: 'Email is not valid',
      },
      login: {
        isLoginExist: 'This login already exists',
        isLoginLengsOk: 'Login must be at least 4 characters long',
        IsLoginFirstDigit: `Login cant begin from a number`,
        isLoginInEng: `Login can only contain latin letters and digits`,
        isLoginLengthToMuch: `Login can only contain 10 characters`,
      },
      inputs: {
        isAllInputFilled: 'All fields must be filled',
      },
    },
  },
  rus: {
    text: {
      signInHeader: 'Вход',
      signUpHeader: 'Создайте аккаунт',
      signInButton: 'Вход',
      signUpButton: 'Регистрация',
      forgot: 'Забыли пароль?',
      login: 'Логин',
      email: 'Ел. почта',
      password: 'Пароль',
      textHeaderIn: 'Привет, приятель!',
      textContentIn:
        'Введите информацию о вас и начните Ваше путешествие с нами',
      textHeaderUp: 'С возвращением!',
      textContentUp: 'Чтобы оставаться с нами, зайдите в Ваш аккаунт',
    },
    errors: {
      password: {
        isPasswordRight: 'Неверный пароль',
        isPasswordLengsOk: 'Пароль должен быть не короче 8 символов',
        isPasswordinEng: `Пароль может содержать только латинские буквы и цифры`,
        isPasswordLengthToMuch: `Пароль может содержать до 16 символов`,
        isPasswordContainLogin: `Пароль не должен содержать в себе логин`,
      },
      email: {
        isEmailValid: 'Это не почта',
      },
      login: {
        isLoginExist: 'Такой логин уже существует ',
        isLoginLengsOk: 'Минимальная длинна логина - 4 символа',
        IsLoginFirstDigit: `Логин не может начинаться с цифры`,
        isLoginInEng: `Логин может состоять только из латинских букв и цифр`,
        isLoginLengthToMuch: `Логин может содержать до 10 символов`,
      },
      inputs: {
        isAllInputFilled: 'Все поля должны быт заполнены',
      },
    },
  },
};

class LoginModal extends Component {
  state = {
    ...INITIALSTATE,
    passwordLengthMustBe: 8,
    passwordMaxLength: 16,
    loginLengthMustBe: 4,
    loginMaxLength: 10,
    defaultLanguage: `eng`,
    isEng: true,

    rightPassword: `123`, // test backend
    loginsBD: [`asd`, `123`], // test backend
    // activeSignUp: false,
    err: {},
  };

  validateLoginInput = () => {
    const { login, errors, loginLengthMustBe, loginMaxLength } = this.state;
    const loginLength = login.split(``).length; // Длина логина
    const regLatin = new RegExp('^[a-zA-Z0-9]+$'); // Только анг и цифры
    const regFirstNum = new RegExp(`^[0-9]`); // Число ли первый символ

    // Пасхалочка
    if (login === `Pasha`) {
      this.toogleConfetti();
      this.toogleConfetti();
    }

    // Проверяем логин на кириллицу
    // Если есть не латинские буквы или цифры то меняет стейт => Показывается <p> с ошибкой
    if (!regLatin.test(login) && login !== ``) {
      console.log(`Логин содержит кириллицу или спец символы`);
      this.toogleIsEverythinkOk(`login`, `isLoginInEng`);
      if (errors.isLoginInEng) {
        this.toogleSomeError(`isLoginInEng`);
      }
      return false;
    }

    // Если логин только на латинице с цифрами
    // то убираем <p> если она была показа
    if (regLatin.test(login) && !errors.isLoginInEng) {
      console.log(`Теперь логин не содержит кириллицу`);
      this.toogleIsEverythinkOk();
      this.toogleSomeError(`isLoginInEng`);
    }

    // Проверяем цифра ли первый символ
    // Если цифра то меняет стейт => Показывается <p> с ошибкой
    if (regFirstNum.test(login)) {
      console.log(`Первый символ число`);
      this.toogleIsEverythinkOk(`login`, `IsLoginFirstDigit`);
      if (!errors.IsLoginFirstDigit) {
        this.toogleSomeError(`IsLoginFirstDigit`);
      }
      return false;
    }

    // Если логин не начинается с цифры
    // то убираем <p> если она была показа
    if (!regFirstNum.test(login) && errors.IsLoginFirstDigit) {
      console.log(`Теперь логин не начинается с цифры`);
      this.toogleSomeError(`IsLoginFirstDigit`);
      this.toogleIsEverythinkOk();
    }

    // Проверяем длину логина
    // Если меньше чем loginLengthMustBe то меняет стейт => Показывается <p> с ошибкой
    if (loginLength < loginLengthMustBe) {
      console.log('Логин Короче нужной длины');
      this.toogleIsEverythinkOk(`login`, `isLoginLengsOk`);
      if (errors.isLoginLengsOk) {
        this.toogleSomeError(`isLoginLengsOk`);
      }
      return false;
    }

    // Если логин равен или больше стейта loginLengthMustBe,
    // то убираем <p> если она была показа
    if (loginLength > loginLengthMustBe && !errors.isLoginLengsOk) {
      console.log('Логин Нормальной длины');
      this.toogleSomeError(`isLoginLengsOk`);
      this.toogleIsEverythinkOk();
    }

    // Проверяем длину логина
    // Если больше чем loginMaxLength то меняет стейт => Показывается <p> с ошибкой
    if (loginLength > loginMaxLength) {
      console.log('Логин длинее нужной длины');
      this.toogleIsEverythinkOk(`login`, `isLoginLengthToMuch`);
      if (!errors.isLoginLengthToMuch) {
        this.toogleSomeError(`isLoginLengthToMuch`);
      }
      return false;
    }

    // Если логин меньше или равен стейта loginMaxLength,
    // то убираем <p> если она была показа
    if (loginLength <= loginMaxLength && errors.isLoginLengthToMuch) {
      console.log('Логин Нормальной длины');
      this.toogleSomeError(`isLoginLengthToMuch`);
      this.toogleIsEverythinkOk();
    }

    return true;
  };

  validatePasswordInput = () => {
    const {
      login,
      password,
      errors,
      passwordMaxLength,
      passwordLengthMustBe,
    } = this.state;
    const passLength = password.split(``).length; // Длина пароля
    const regLatin = new RegExp('^[a-zA-Z0-9]+$'); // Только анг и цифры
    const regLogin = new RegExp(login); // найти логин

    // Проверяем пароль на кириллицу
    // Если есть не латинские буквы или цифры то меняет стейт => Показывается <p> с ошибкой
    if (!regLatin.test(password) && password !== ``) {
      console.log(`Пароль содержит кириллицу или спец символы`);
      this.toogleIsEverythinkOk(`password`, `isPasswordinEng`);
      if (errors.isPasswordinEng) {
        this.toogleSomeError(`isPasswordinEng`);
      }
      return false;
    }

    // Если Пароль только на латинице с цифрами
    // то убираем <p> если она была показа
    if (regLatin.test(password) && !errors.isPasswordinEng) {
      console.log(`Теперь Пароль не содержит кириллицу`);
      this.toogleIsEverythinkOk();
      this.toogleSomeError(`isPasswordinEng`);
    }

    // Проверяем длину Пароля
    // Если меньше чем passwordLengthMustBe то меняет стейт => Показывается <p> с ошибкой
    if (passLength < passwordLengthMustBe) {
      console.log('Пароль короче нужной длины');
      this.toogleIsEverythinkOk(`password`, `isPasswordLengsOk`);
      if (errors.isPasswordLengsOk) {
        this.toogleSomeError(`isPasswordLengsOk`);
      }
      return false;
    }

    // Если пароль равен или больше стейта passwordLengthMustBe,
    // то убираем <p> если она была показа
    if (passLength >= passwordLengthMustBe && !errors.isPasswordLengsOk) {
      console.log('Пароль Нормальной длины');
      this.toogleSomeError(`isPasswordLengsOk`);
      this.toogleIsEverythinkOk();
    }

    // Проверяем длину Пароля
    // Если больше чем passwordMaxLength то меняет стейт => Показывается <p> с ошибкой
    if (passLength > passwordMaxLength) {
      console.log('Пароль длинее нужной длины');
      this.toogleIsEverythinkOk(`password`, `isPasswordLengthToMuch`);
      if (errors.isPasswordLengthToMuch) {
        this.toogleSomeError(`isPasswordLengthToMuch`);
      }
      return false;
    }

    // Если пароль равен или меньше стейта passwordMaxLength,
    // то убираем <p> если она была показа
    if (passLength >= passwordMaxLength && !errors.isPasswordLengthToMuch) {
      console.log('Пароль Нормальной длины');
      this.toogleSomeError(`isPasswordLengthToMuch`);
      this.toogleIsEverythinkOk();
    }

    // Проверяем содержит ли пароль в себе логин
    // Если больше чем passwordMaxLength то меняет стейт => Показывается <p> с ошибкой
    if (regLogin.test(password)) {
      console.log('Пароль такой же как и логин');
      this.toogleIsEverythinkOk(`password`, `isPasswordContainLogin`);
      if (errors.isPasswordContainLogin) {
        this.toogleSomeError(`isPasswordContainLogin`);
      }
      return false;
    }

    // Если пароль не содержит логин
    // то убираем <p> если она была показа
    if (!regLogin.test(password) && !errors.isPasswordContainLogin) {
      console.log('Пароль больше не такой же как и логин');
      this.toogleSomeError(`isPasswordContainLogin`);
      this.toogleIsEverythinkOk();
    }

    return true;
  };

  validateEmailInput = () => {
    const { email, errors } = this.state;

    // Делаем валидацию Емейл
    // Если не валид то меняет стейт => Показывается <p> с ошибкой
    const validateEmail = m => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(m);
    };

    if (!validateEmail(email)) {
      console.log(`Это не емейл`);
      this.toogleIsEverythinkOk(`email`, `isEmailValid`);
      if (errors.isEmailValid) {
        this.toogleSomeError(`isEmailValid`);
      }
      return false;
    }

    // Если с емейлом все ок то убираем <p> если она была показана
    if (validateEmail(email) && errors.isEmailValid === false) {
      console.log('С емейлом теперь все ок');
      this.toogleSomeError(`isEmailValid`);
      this.toogleIsEverythinkOk();
    }

    return true;
  };

  onInputLogin = e => {
    this.setState({ login: e.target.value });
    setTimeout(() => {
      this.validateLoginInput();
    }, 30);
  };

  onInputEmail = e => {
    this.setState({ email: e.target.value });
    setTimeout(() => {
      this.validateEmailInput();
    }, 30);
  };

  onInputPassword = e => {
    this.setState({ password: e.target.value });
    setTimeout(() => {
      this.validatePasswordInput();
    }, 30);
  };

  toogleIsEverythinkOk = (type, key) => {
    this.setState(() => {
      const { defaultLanguage } = this.state;

      if (!key) {
        return {
          err: {},
        };
      }
      return {
        err: {
          [type]: language[defaultLanguage].errors[type][key],
        },
      };
    });
  };

  toogleConfetti = () => {
    this.setState(state => ({
      isConfetti: !state.isConfetti,
    }));
  };

  toogleSomeError = bool => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        [bool]: !state.errors[bool],
      },
    }));
  };

  toogleIsPasswordRight = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isPasswordRight: !state.errors.isPasswordRight,
      },
    }));
  };

  toogleIsLoginExist = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isLoginExist: !state.errors.isLoginExist,
      },
    }));
  };

  toogleIsLoaderShowed = () => {
    this.setState(state => ({
      isLoaderShowed: !state.isLoaderShowed,
    }));
  };

  toogleLang = () => {
    const { defaultLanguage } = this.state;
    if (defaultLanguage === `eng`) {
      this.setState(state => ({
        defaultLanguage: `rus`,
        isEng: !state.isEng,
      }));
    }
    if (defaultLanguage === `rus`) {
      this.setState(state => ({
        defaultLanguage: `eng`,
        isEng: !state.isEng,
      }));
    }
    setTimeout(() => {
      this.validateLoginInput();
    }, 10);
  };

  signIn = () => {
    const { email, password, rightPassword, errors, err } = this.state;

    // Проверяем не пустые ли инпуты
    if (email === `` || password === ``) {
      if (errors.isAllInputFilled === true) {
        this.toogleIsAllInputFilled();
      }
      return;
    }

    this.toogleIsLoaderShowed();
    const user = {
      email,
      password,
    };
    console.log(user);

    setTimeout(() => {
      this.toogleIsLoaderShowed();
      if (rightPassword !== user.password) {
        if (!err.password || err.password !== `isPasswordRight`) {
          this.toogleIsEverythinkOk(`password`, `isPasswordRight`);
        }
        if (errors.isPasswordRight === true) {
          this.toogleIsPasswordRight();
          return;
        }
        return;
      }

      // Если пароль правильный то убираем <p> если она была показа
      if (errors.isPasswordRight === false && rightPassword === user.password) {
        this.toogleIsPasswordRight();
        if (err.password) {
          this.toogleIsEverythinkOk();
        }
      }
    }, 1000);
  };

  signUp = () => {
    const {
      email,
      password,
      login,
      loginsBD,
      errors,
      passwordLengthMustBe,
      // loginLengthMustBe,
    } = this.state;

    const { sendSignup } = this.props;

    if (email === `` && password === `` && login === ``) {
      if (errors.isAllInputFilled === true) {
        this.toogleIsAllInputFilled();
      }
      return;
    }
    if (
      email !== `` &&
      password !== `` &&
      login !== `` &&
      errors.isAllInputFilled === false
    ) {
      this.toogleIsAllInputFilled();
    }

    // // Проверяем длину логина
    // // Если меньше чем loginLengthMustBe то меняет стейт => Показывается <p> с ошибкой
    // const loginLength = login.split(``).length;
    // if (loginLength < loginLengthMustBe) {
    //   if (errors.isLoginLengsOk) {
    //     this.toogleSomeError(`isLoginLengsOk`);
    //   }
    //   return;
    // }

    // // Если логин равен или больше стейта loginLengthMustBe,
    // // то убираем <p> если она была показа
    // if (loginLength >= loginLengthMustBe && errors.isLoginLengsOk === false) {
    //   this.toogleSomeError(`isLoginLengsOk`);
    // }

    // Проверяем свободный ли логин
    // Если занят то меняет стейт => Показывается <p> с ошибкой

    const isLoginExist = loginsBD.includes(login);
    if (isLoginExist) {
      if (errors.isLoginExist === false) {
        this.toogleIsLoginExist();
      }
      return;
    }
    // Если логин свободен то убираем <p> если она была показа
    if (!isLoginExist && errors.isLoginExist === true) {
      this.toogleIsLoginExist();
    }

    // Делаем валидацию Емейл
    // Если не валид то меняет стейт => Показывается <p> с ошибкой
    const validateEmail = m => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(m);
    };

    if (!validateEmail(email)) {
      if (errors.isEmailValid) {
        this.toogleSomeError(`isEmailValid`);
      }
      return;
    }
    // Если с емейлом все ок то убираем <p> если она была показана
    if (validateEmail(email) && errors.isEmailValid === false) {
      this.toogleSomeError(`isEmailValid`);
    }

    if (password.split(` `).length > 1) {
      // Проверяем что б пароль был из 1го слова,
      // Если больше то меняет стейт => Показывается <p> с ошибкой
      if (errors.isPasswordOneWord === true) {
        this.toogleIsPasswordOneWord();
        return;
      }
      return;
    }

    // Если пароль из 1го слова то убираем <p> если она была показана
    if (
      errors.isPasswordOneWord === false &&
      password.split(` `).length === 1
    ) {
      this.toogleIsPasswordOneWord();
    }

    // Проверяем длину пароля, он должен быть больше чем стейт passwordLengthMustBe
    // Если меньше то меняет стейт => Показывается <p> с ошибкой
    const passLength = password.split(``).length;
    if (passLength < passwordLengthMustBe) {
      if (errors.isPasswordLengsOk === true) {
        this.toogleIsPasswordLengsOk();
      }
      return;
    }

    // Если пароль равен или больше стейта passwordLengthMustBe,
    // то убираем <p> если она была показа
    if (
      passLength >= passwordLengthMustBe &&
      errors.isPasswordLengsOk === false
    ) {
      this.toogleIsPasswordLengsOk();
    }

    const newUser = {
      email,
      password,
      userName: login,
    };

    sendSignup(newUser);

    console.log(newUser);
  };

  render() {
    const {
      errors,
      isLoaderShowed,
      email,
      password,
      err,
      isConfetti,
      defaultLanguage,
      isEng,
    } = this.state;
    const { isModalshow, toogleModal, toogleSignUp, activeSignUp } = this.props;

    const config = {
      angle: '90',
      spread: '176',
      startVelocity: '54',
      elementCount: '200',
      dragFriction: '0.11',
      duration: '7030',
      stagger: '4',
      width: '10px',
      height: '10px',
      colors: ['#000', '#f00'],
    };

    let containerStyles = [styles.container];

    if (!activeSignUp) {
      containerStyles = [...containerStyles, styles[`right-panel-active`]];
    } else if (activeSignUp) {
      containerStyles = [styles.container];
    }

    return (
      <CSSTransition
        in={isModalshow}
        timeout={400}
        classNames={transition}
        unmountOnExit
      >
        {() => (
          <div className={styles.wrapper}>
            <div className={containerStyles.join(` `)}>
              <Fab
                color="primary"
                aria-label="Add"
                className={styles[`modal-close`]}
                size="small"
                onClick={toogleModal}
              >
                X
              </Fab>
              <Confetti
                active={isConfetti}
                config={config}
                className={styles.confetti}
              />
              <Login
                lang={language[defaultLanguage]}
                isLoaderShowed={isLoaderShowed}
                onInputPassword={this.onInputPassword}
                onInputEmail={this.onInputEmail}
                signIn={this.signIn}
                email={email}
                password={password}
                err={err}
              />
              <SignUp
                lang={language[defaultLanguage]}
                errors={errors}
                onInputLogin={this.onInputLogin}
                onInputPassword={this.onInputPassword}
                onInputEmail={this.onInputEmail}
                signUp={this.signUp}
                email={email}
                password={password}
                err={err}
              />
              <Overlay
                lang={language[defaultLanguage]}
                toogleLogin={toogleSignUp}
                toogleLang={this.toogleLang}
                isEng={isEng}
              />
            </div>
          </div>
        )}
      </CSSTransition>
    );
  }
}

const stateToProps = state => ({
  isModalshow: state.modalLogin.showModal,
  activeSignUp: state.modalLogin.activeSignUp,
});

const dispatchToProp = dispatch => ({
  toogleModal(e) {
    dispatch(toogleModalLogin(e));
  },
  sendSignup(data) {
    dispatch(asyncSignup(data));
  },
  toogleSignUp() {
    dispatch(toogleLogin());
  },
});

LoginModal.propTypes = {
  isModalshow: PropTypes.bool.isRequired,
  toogleModal: PropTypes.func.isRequired,
  toogleSignUp: PropTypes.func.isRequired,
  sendSignup: PropTypes.func.isRequired,
  activeSignUp: PropTypes.bool.isRequired,
};

export default connect(
  stateToProps,
  dispatchToProp,
)(LoginModal);
