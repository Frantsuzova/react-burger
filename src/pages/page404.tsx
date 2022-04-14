import React from "react";
import page404Styles from "./page404.module.css";

function NotFound() {
    return (
        <div className={page404Styles.mainbox}>
            <span
                className={"text text_type_digits-large mb-6"}
            >
                Ошибка 404
            </span>
            <span
                className={"text text_type_main-large mb-20"}
            >
            </span>
            <span
                className={"text text_type_main-medium"}
            >
                Извините, страница не найдена
            </span>
        </div>
    );
}

export default NotFound;