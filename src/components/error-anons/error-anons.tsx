import React, { FunctionComponent } from "react";
import errorStyles from './errorStyles.module.css';

const ErrorAnons: FunctionComponent<{ error: number | string | null }> = ({ error }) => {
    return (
        <div className={' mt-10'} >
            <span
                className={errorStyles.box + "text text_type_main-default"}
            >
                Кажется, что-то не так {error}! :( Но вы обязательно справитесь.&nbsp;
            </span>
            <span
                className={errorStyles.text + "text text_type_main-default"}
            >
                Проверьте правильность введенных данных.
            </span>
        </div>
    );
}
export default ErrorAnons;