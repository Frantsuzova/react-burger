import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../services/hooks";
import feedStyles from "./feedStyles.module.css";
import Spiner from "../components/spiner/spiner";
import OrderCards from "../components/order-cards/order-cards";
import OrderNumbers from "../components/order-numbers/order-numbers";
import { WS_CONNECTION_START, WS_CONNECTION_TO_CLOSE } from '../services/actions/webSocket'
function Feed() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.webSocketAll.data);
    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            value: "wss://norma.nomoreparties.space/orders/all",
            place: false,
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_TO_CLOSE,
            });
        };
    }, []);
    if (data) {
        return (
            <div >
                {data.orders && (

                    <div className={feedStyles.mainBox}>

                        <div className={feedStyles.feedList}>
                            <div className={feedStyles.headerText} >
                                <span className={"text text_type_main-large mt-10 mb-5"}>
                                    Лента заказов
                                </span>
                            </div>
                            <div className={feedStyles.feed}>
                                <OrderCards />
                            </div>
                        </div>



                        <div className={"mt-25 ml-15"} >
                            <OrderNumbers />
                        </div>

                    </div>
                )
                }

                {!data.orders && !data.message && (<div className={'mt-30'}><Spiner /></div>)}

            </div>
        );
    }
    else { return (<div className={'mt-30'}><Spiner /></div>) }
}

export default Feed;