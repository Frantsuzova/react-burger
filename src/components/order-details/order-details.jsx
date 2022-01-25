import check from "../../images/done.svg"
import styles from "./order-details.module.css"
import { useSelector } from 'react-redux';

export default function OrderDetails() {
    /*
    const orderContext = React.useContext(OrderContext);
    const { result, isLoading, error } = orderContext;
    */
    const { hasError, error, isLoading, orderInfo, success } = useSelector(state => state.createdOrder)

    return (

        <>
            {isLoading && (
                <span className={`${styles.order__loading} text text_type_main-default mb-8`}>
                    Загрузка...
                </span>)}

            {!isLoading && !hasError && success && (<div className={`${styles.order__container} pt-30 pb-25`}>
                <div className="mb-8">
                    <p className={`${styles.order__digitdecor} text text_type_digits-large`}>{orderInfo.order.number}</p>
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
            {hasError && (
                <span className={
                    "text text_type_digits-large mb-8"}>
                    {`Ошибка ${error}`}
                </span>
            )}
        </>
    );
}
