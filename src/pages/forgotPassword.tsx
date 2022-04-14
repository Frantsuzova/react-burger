import React, { useState } from "react";
import { useDispatch, useSelector } from "../services/hooks";
import forgotStyles from "./forgotPassword.module.css";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { sendForgotRequest } from "../services/actions/auth";
import ErrorAnons from "../components/error-anons/error-anons";
import { USER_FORGOT_FAILED } from '../services/actions/auth'

function ForgotPassword() {
    const { hasError, error } = useSelector((state) => state.forgotRequest);
    const [emailValue, setEmailValue] = useState<string>('')

    const validateEmail = (email: string) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const dispatch = useDispatch();
    const history = useHistory();
    const resetPassword = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (validateEmail(emailValue)) {

            dispatch(sendForgotRequest(emailValue, history));
            history.replace({ pathname: "/reset-password" });
        } else
            dispatch({
                type: USER_FORGOT_FAILED,
                value: "Введен некорректный email",
            });
    };

    return (
        <div className={forgotStyles.mainbox}>
            <span
                className={"text text_type_main-medium mb-6"}
            >
                Восстановление пароля
            </span>
            <form onSubmit={resetPassword}>
                <div className={"mb-6"}>
                    <Input type={'text'}
                        placeholder={'E-mail'}
                        onChange={e => setEmailValue(e.target.value)}
                        value={emailValue}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'} />
                </div>
                <div>
                    <div className={forgotStyles.button}>

                        <Button type="primary" size="medium">
                            Восстановить
                        </Button>
                    </div>
                </div>
            </form>
            {hasError ? <ErrorAnons error={error} /> : null}
            <div>
                <span
                    className={
                        "text text_type_main-default text_color_inactive"
                    }
                >
                    Вспомнили пароль?&nbsp;
                </span>
                <Link
                    className={
                        forgotStyles.link
                    }
                    to={{ pathname: "/login" }}
                >

                    <span className="text text_type_main-default">Войти</span>
                </Link>
            </div>
        </div>
    );
}

export default ForgotPassword;