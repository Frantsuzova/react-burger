import React from "react";
import { useSelector } from '../../services/hooks'
import OrderNumbersStyles from "./OrderNumbersStyles.module.css";


function OrderNumbers() {
    const orders = useSelector((state: any) => state.webSocketAll.data?.orders)
    const totalToday = useSelector(
        (state: any) => state.webSocketAll.data?.totalToday)
    const total = useSelector(
        (state: any) => state.webSocketAll.data?.total
    );

    let doneOrders
    let inWorkOrders
    if (orders) {
        doneOrders = orders.filter((elem: any) => elem.status === 'done').slice(0, 11)

        inWorkOrders = orders.filter((elem: any) => elem.status === 'pending').slice(0, 11)
    }
    if (doneOrders && inWorkOrders)
        return (
            <div className={OrderNumbersStyles.main}>
                <div className={OrderNumbersStyles.table}>
                    <div className={OrderNumbersStyles.ready}>
                        <div className={OrderNumbersStyles.readyHeader}>
                            <span className={'text text_type_main-medium pb-6'}>
                                Готовы:
                            </span>
                        </div>
                        <div className={OrderNumbersStyles.readyNumbers}>
                            <div className={'mr-9'}>
                                {doneOrders.map((elem: any) => {
                                    return (<span className={`mb-2 mr-1 text text_type_digits-default`} key={elem.number}>{elem.number}</span>)
                                })}
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={OrderNumbersStyles.inWorkTitle}>
                            <p className={'text text_type_main-medium pb-6'}>
                                В работе:
                            </p>
                        </div>
                        <div className={OrderNumbersStyles.inWorkNumbers}>
                            <div className={'mr-9'}>
                                {inWorkOrders.map((elem: any) => {
                                    return (<span className={`mb-2 mr-1 text text_type_digits-default`} key={elem.number}>{elem.number}</span>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <span className={'text text_type_main-medium mt-15'}>Выполнено за все время:</span>
                    <div className={OrderNumbersStyles.number}><p className={'text text_type_digits-large'}>{total}</p></div>
                </div>
                <div >
                    <span className={'text text_type_main-medium mt-15'}>Выполнено за сегодня:</span>
                    <span className={OrderNumbersStyles.number}><p className={'text text_type_digits-large'}>{totalToday}</p></span>
                </div>
            </div>
        )
    else return null
}
export default OrderNumbers