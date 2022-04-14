import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from '../services/hooks';
import { Link, useHistory } from "react-router-dom";
import registerStyles from "./register.module.css";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { userRegistration } from "../services/actions/auth";
import ErrorAnons from "../components/error-anons/error-anons";

function Register() {
    const { hasError, error, regInfo } = useSelector(
        (state) => state.registration
    );
    const history = useHistory();
    const dispatch = useDispatch();
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>('')
    const [nameValue, setnNameValue] = useState<string>('')
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }
    const registration = () => {
        dispatch(userRegistration(emailValue, nameValue, passwordValue, history));
    };

    return (
        <div className={registerStyles.mainbox}>
            <span
                className={registerStyles.header + "text text_type_main-medium "
                }
            >
                Регистрация
            </span>
            <form onSubmit={registration}>
                <div className={registerStyles.input}>
                    <Input type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setnNameValue(e.target.value)}
                        value={nameValue}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'} />
                </div>
                <div className={registerStyles.input}>
                    <Input type={'text'}
                        placeholder={'E-mail'}
                        onChange={e => setEmailValue(e.target.value)}
                        value={emailValue}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'} />
                </div>
                <div className={registerStyles.input}>
                    <PasswordInput onChange={onPasswordChange} value={passwordValue} name={'password'} />
                </div>
                <div>
                    <div className={registerStyles.button}>

                        <Button
                            type="primary"
                            size="medium"
                        >
                            Зарегистрироваться
                        </Button>

                        {hasError && <ErrorAnons error={error} />}
                    </div>
                </div>
            </form>

            <div className={registerStyles.text}>
                <span className={"text text_type_main-default text_color_inactive"}>
                    Уже зарегистрированы?&nbsp;
                </span>
                <Link
                    to={{ pathname: "/login" }}
                    className={registerStyles.link}
                >
                    <span className="text text_type_main-default">
                        Войти
                    </span>
                </Link>
            </div>
        </div>
    );

}

export default Register;

