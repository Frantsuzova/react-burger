import React, { useState } from "react";
import { useDispatch, useSelector } from '../services/hooks'
import resetStyles from "./resetPassword.module.css";
import { Button, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { resetPassword } from "../services/actions/auth";
import ErrorAnons from "../components/error-anons/error-anons";

function ResetPassword() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { hasError, error } = useSelector((state) => state.forgotRequest);
    const [passwordValue, setPasswordValue] = useState<string>('')

    const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }
    const [codeValue, setCodeValue] = useState<string>('')
    const reset = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(resetPassword(passwordValue, codeValue, history))
    };

    return (
        <div className={resetStyles.mainbox}>
            <span
                className={resetStyles.header +
                    "text text_type_main-medium"}
            >
                Восстановление пароля
            </span>
            <form onSubmit={reset}>
                <div className={resetStyles.input}>
                    <PasswordInput onChange={passwordOnChange} value={passwordValue} name={'password'} />
                </div>
                <div className={resetStyles.input}>
                    <Input type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={e => setCodeValue(e.target.value)}
                        value={codeValue}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'} />
                </div>
                <div>
                    <div className={resetStyles.button}>
                        <Button type="primary" size="medium">
                            Сохранить
                        </Button>

                    </div>
                </div>
            </form>
            {hasError && <ErrorAnons error={error} />}
            <div>
                <span
                    className={"text text_type_main-default text_color_inactive"}
                >
                    Вспомнили пароль?&nbsp;
                </span>
                <Link
                    className={resetStyles.link}
                    to={{ pathname: "/login" }}
                >
                    <span className="text text_type_main-default">Войти</span>
                </Link>
            </div>
        </div>
    );
}

export default ResetPassword;