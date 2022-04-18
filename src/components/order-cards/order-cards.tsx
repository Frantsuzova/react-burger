import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from '../../services/hooks'
import OrderCardStyles from "./OrderCardStyles.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
    countDate,
    currentOrder,
    countCostOrder,
} from "../../services/actions/index";
import {
    useRouteMatch,
    Link,
    useLocation,
} from "react-router-dom";


function OrderCards() {
    const location = useLocation();
    const { url } = useRouteMatch();

    const orders = useSelector(
        (state: any) => state.webSocketAll.data?.orders
    );
    if (orders)
        return (
            <div>
                {orders.map((elem: any) => {

                    return (
                        <Link
                            key={elem._id}
                            to={{
                                pathname: `${url}/${elem._id}`,
                                state: { background: location },
                            }
                            }
                            className={OrderCardStyles.link}
                        >

                            <OrderCard elem={elem} key={elem._id} />

                        </Link>
                    );
                })}
            </div>
        );
    else return null
}

const OrderCard: FunctionComponent<{ elem: any }> = ({ elem }) => {
    const dispatch = useDispatch();
    const { createdAt, ingredients, name, number } = elem;
    const all = useSelector((state) => state.apiList.burgerData);
    const { path } = useRouteMatch();

    const status = path === "/profile/orders" ? elem.status : "";
    const shownStatus = status === 'done' ? 'Выполнен' : status === 'pending' ? 'Готовится' : status === 'created' ? 'Создан' : ''
    const { right, totalCost } = countCostOrder(all, ingredients);
    const visibleIconsCount = 6;
    const hiddenIconsCount = right!.length - visibleIconsCount + 1;

    const statusStyle = status === 'done' ? OrderCardStyles.done : ''
    const getDetailOrder = () => {
        dispatch(currentOrder(elem));
    };

    return (
        <div className={OrderCardStyles.mainConteiner}>
            <div className={OrderCardStyles.itemConteiner}>
                <div
                    className={"mb-4 p-6"}
                    onClick={() => getDetailOrder()}
                >
                    <div className={OrderCardStyles.mainInfoLine}>
                        <div className={OrderCardStyles.mainInfo}>
                            <span className={"text text_type_digits-default"} >
                                {"#" + `${number}`}
                            </span>
                        </div>
                        <div className={OrderCardStyles.mainInfo}>
                            <span className={"text text_type_main-default text_color_inactive"} >
                                {countDate(createdAt).join(" ")}
                            </span>
                        </div>
                    </div>
                    {/******* */}
                    <div className={OrderCardStyles.content}>
                        <span
                            className={
                                OrderCardStyles.name +
                                "text text_type_main-medium mb-2"
                            }
                        >
                            {name}
                        </span>

                        <div className={OrderCardStyles.orderDetail}>
                            <div className={OrderCardStyles.ingredients}>

                                {right!.map((elem, i) => {
                                    let key = `${elem._id}${i}${number}`;

                                    if (i <= 4) {
                                        return (
                                            <div
                                                className={OrderCardStyles.image}
                                                key={`${elem._id}${i}${number}`}
                                            >
                                                <img src={elem.image_mobile} alt={elem.name} />

                                            </div>
                                        );
                                    }

                                    if (i === 5) {
                                        return (
                                            <div className={OrderCardStyles.lastImagespace}>
                                                <div
                                                    className={
                                                        OrderCardStyles.lastImage
                                                    }
                                                    key={`${elem._id}${i}${number}`}
                                                >

                                                    <img src={elem.image_mobile} alt={elem.name} />

                                                </div>
                                                <div
                                                    className={
                                                        OrderCardStyles.plus
                                                    }
                                                ><span className={"text text_type_digits-default"}>{`+${hiddenIconsCount}`}</span></div>
                                            </div>
                                        );
                                    }
                                })}

                            </div>

                            <div
                                className={
                                    OrderCardStyles.price

                                }
                            >
                                <span className={"text text_type_digits-default"}>{totalCost}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderCards;