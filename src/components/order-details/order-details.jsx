import check from "../../images/done.svg"
import styles from "./order-details.module.css"
import React from "react";
import { OrderContext } from "../../services/orderContext";

export default function OrderDetails() {
    const orderContext = React.useContext(OrderContext);
    const { result, isLoading, error } = orderContext;

    return (

        <>
            {isLoading && (
                <span className={`${styles.order__loading} text text_type_main-default mb-8`}>
                    Загрузка...
                </span>)}

            {!isLoading && !error && result && (<div className={`${styles.order__container} pt-30 pb-25`}>
                <div className="mb-8">
                    <p className={`${styles.order__digitdecor} text text_type_digits-large`}>{result.order.number}</p>
                </div>
                <p className="text text_type_main-medium">Идентификатор заказа</p>
                <img className={`${styles.order__img} mb-15 mt-15`}
                    alt="заказ принят"
                    src={check}
                />
                <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                <div className="mt-2">
                    <p className="text text_type_main-default text_color_inactive">
                        Дождитесь готовности на орбитальной станции
                    </p>
                </div>
            </div>)}
        </>
    );
}
