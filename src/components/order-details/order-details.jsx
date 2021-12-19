import check from "../../images/done.svg"
import styles from "./order-details.module.css"

export default function OrderDetails() {
    return (
        <div className={`${styles.order__container} pt-30 pb-25`}>
            <div className="mb-8">
                <p className={`${styles.order__digitdecor} text text_type_digits-large`}>034536</p>
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
        </div>
    );
}
