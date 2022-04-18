import check from "../../images/done.svg";
import styles from "./order-details.module.css";
import { useSelector, useDispatch } from '../../services/hooks';
import React, { FunctionComponent } from "react";
import { useEffect } from "react";
import {
    countDate,
    countCostOrder,
} from "../../services/actions/index";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/actions/index";
import Spiner from "../spiner/spiner";
import { getCookie } from "../../services/actions/auth";
import { useRouteMatch } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { newObj } from '../../services/types/types'

type QuizParams = {
    id: string;
};



export default function OrderDetails() {
    const { path } = useRouteMatch();
    const dispatch = useDispatch();
    const { id } = useParams<QuizParams>();
    const { isLoading, data } = useSelector(
        (state) => state.modalInfo
    );
    const { orderInfo, success } = useSelector((state) => state.createdOrder)
    const modal = useSelector((state) => state.modalInfo.detailOrderInfo);
    const url =
        path === "/profile/orders/:id"
            ? `/orders?token=${getCookie("accessToken")}`
            : "/orders/all";
    useEffect(() => {
        if (!modal) dispatch(getOrder(url));
    }, []);
    console.log('orderInfo', orderInfo)
    // console.log(url)

    return (
        <div className={styles.mainOrderDetailInfo + "pb-15"}>




            {!modal && success && orderInfo && (<div className={styles.order__container + "pt-30 pb-25"}>

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

            {!isLoading && data && (
                <>
                    <Container id={id} />
                </>
            )}

        </div>
    );
}

const Container: FunctionComponent<{ id: string }> = ({ id }) => {
    const all = useSelector((state) => state.apiList.burgerData);
    const modal = useSelector((state) => state.modalInfo.detailOrderInfo);
    const allOrders = useSelector((state) => state.modalInfo.data);
    const [order] = allOrders!.orders.filter((elem: any) => elem._id == id);


    if (order) {
        const { right, totalCost } = countCostOrder(all, order.ingredients);

        return (
            <div className={styles.orderDetailModal}>
                {!modal && (
                    <span
                        className={styles.detailOrderInfoHeader +
                            "text text_type_digits-default mb-10"
                        }
                    >{`#${order.number}`}</span>
                )}
                <span className={"text text_type_main-medium mb-3"}>
                    {order.name}
                </span>
                <div className={"text text_type_main-default mb-15"}>
                    {order.status === "done" ? (
                        <span className={styles.doneStatus + "mb-2"}>
                            {"Выполнен"}
                        </span>
                    ) : (
                        <span>{"not"}</span>
                    )}
                </div>

                <span className={"text text_type_main-medium mb-6"}>
                    {"Состав"}
                </span>
                <div className={"mb-10"}>
                    <Ingredients total={right} />
                </div>
                <div className={styles.orderInfoTotal}>
                    {" "}
                    <span
                        className={
                            "text text_type_main-default text_color_inactive"
                        }
                    >
                        {countDate(order.createdAt).join(" ")}
                    </span>
                    <div className={styles.orderInfoTotalCost}>
                        <span className={"text text_type_digits-default mr-2"}>
                            {totalCost}
                        </span>
                        <CurrencyIcon type={'primary'} />
                    </div>
                </div>
            </div>
        );
    }
    else return null
}

const Ingredients: FunctionComponent<{ total: Array<newObj> | null }> = ({ total }) => {
    const noDuplicate = Array.from(new Set(total))

    noDuplicate.map((elem) => {
        elem.count = total!.filter((el) => el === elem).length;
        if (elem.type === "bun") {
            elem.count = 2;
        }
    });

    return (

        <div className={styles.ingredientScroll}>
            {noDuplicate.map((elem, i) => {
                return (
                    <div
                        className={styles.scrollInside + "mb-4"}
                        key={`${elem._id}${i}`}
                    >
                        <div className={styles.imageAndNameOrder}>
                            <div className={styles.orderImage}>
                                <img src={elem.image_mobile} alt={elem.name} />
                            </div>
                            <span
                                className={
                                    "text text_type_main-default m-4"
                                }
                            >
                                {elem.name}
                            </span>
                        </div>
                        <div className={styles.priceOrderInfo}>
                            <span
                                className={"text text_type_digits-default mr-2"}
                            >{`${elem.count} x ${elem.price}`}</span>
                            <CurrencyIcon type={'primary'} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
