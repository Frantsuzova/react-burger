import React, { useState } from "react";
import { useDispatch, useSelector } from '../services/hooks';
import loginStyles from "./login.module.css";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { userLogin } from "../services/actions/auth";
import ErrorAnons from "../components/error-anons/error-anons";

function Login() {
    const { error, hasError, logged } = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    const [passwordValue, setPasswordValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>('')
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(userLogin(emailValue, passwordValue))
    }

    return (
        <div className={loginStyles.mainbox}>
            <span
                className={
                    loginStyles.header +
                    "text text_type_main-medium"
                }
            >
                Вход
            </span>

            <form onSubmit={submit}>
                <div className={loginStyles.input}>
                    <Input type={'text'}
                        onChange={e => setEmailValue(e.target.value)}
                        value={emailValue}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'} placeholder={"E-mail"} />
                </div>
                <div className={loginStyles.input}>
                    <PasswordInput
                        onChange={onPasswordChange}
                        value={passwordValue}
                        name={'password'} />
                </div>
                <div>
                    <div className={loginStyles.button}>
                        <Button
                            type="primary"
                            size="medium"
                        >
                            Войти
                        </Button>
                    </div>
                </div>

            </form>

            {hasError && <ErrorAnons error={error} />}
            <div className={loginStyles.text}>
                <span className={"text text_type_main-default text_color_inactive"}>
                    Вы — новый пользователь?&nbsp;
                </span>
                <Link
                    to={{ pathname: "/register" }}
                    className={loginStyles.link}
                >
                    <span className="text text_type_main-default">
                        Зарегистрироваться
                    </span>
                </Link>
            </div>
            <div className={loginStyles.text}>
                <span className={"text text_type_main-default text_color_inactive"}>
                    Забыли пароль?&nbsp;
                </span>
                <Link
                    to={{ pathname: "/forgot-password" }}
                    className={loginStyles.link
                    }
                >
                    <span className="text text_type_main-default">
                        Восстановить пароль
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Login;