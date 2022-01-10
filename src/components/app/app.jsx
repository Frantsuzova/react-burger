import React from "react";
import appStyles from './app.module.css';
// данные
import { dataUrl } from '../../utils/data.js';
// подключение к апи
import getResponse from '../../utils/api.js';

// компоненты
import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from '../modal/modal';

//контексты
import { ProductContext } from "../../contexts/productContext";
import { OrderContext } from "../../contexts/orderContext";

export default function App() {
    //console.log(dataUrl);
    /*--------------------------------------------------------------------- */
    /* берем данные */
    const [state, setState] = React.useState({
        isLoading: false,
        hasError: false,
        error: '',
        data: []
    });

    React.useEffect(() => {
        fetch(`${dataUrl}`)
            .then(res => getResponse(res))
            .then(
                (res) => {
                    setState(state => ({
                        ...state, isLoading: true, data: res.data
                    }));
                })
            .catch((error) => {
                setState(state => ({
                    ...state, isLoading: false, hasError: true, error: error
                }))
            });

    }, []);

    /* данные получены */
    /*--------------------------------------------------------------------- */

    /* работа с модальными окнами */
    /*--------------------------------------------------------------------- */
    const [oderPopup, setOrderPopup] = React.useState(false);
    const [ingredientPopup, setIngredientPopup] = React.useState(false);
    const [ingredientInfo, setIngredientData] = React.useState({ data: null });

    function openModal({ modalType, itemId }) {
        let ingredientInfo = null;
        if (modalType === "ingredientDetail") {
            setIngredientPopup(true);
            ingredientInfo = state.data.find((item) => item._id === itemId);
            setIngredientData({ data: ingredientInfo });
        } else {
            if (modalType === "orderDetail") {
                setOrderPopup(true);
            }
        }
    }

    function closeModal() {
        setOrderPopup(false);
        setIngredientPopup(false);
    }
    /*--------------------------------------------------------------------- */

    const initialIngredients = state.data;
    console.log(initialIngredients);

    const [order, setOrder] = React.useState({
        result: null,
        isLoading: false,
        error: null,
    });
    console.log('answer0: ', order);

    const doOrder = () => {
        //булки
        let bunId = initialIngredients.find((elem) =>
            elem.type === "bun" ? elem : 0
        )._id;
        //все остальное
        let otherIngrId = initialIngredients
            .filter((elem) => elem.type != "bun")
            .map((elem) => elem._id);
        //результат
        let result = otherIngrId.concat(bunId, bunId);

        //сервер
        const url = "https://norma.nomoreparties.space/api/orders";
        const requestOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ingredients: result,
            }),
        };
        (async () => {
            try {
                setOrder({ ...order, isLoading: true });
                const res = await fetch(url, requestOption);
                if (res.ok) {
                    const result = await res.json();
                    setOrder({ ...order, isLoading: false, result: result });
                } else {
                    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
                }
            } catch (e) {
                setOrder({ ...order, isLoading: false, error: e });
            }
        })();
        openModal({ modalType: "orderDetail" });
    }

    /*--------------------------------------------------------------------- */

    return (
        <>
            {/*шапка*/}
            <AppHeader />

            {/*основной интерфейс*/}
            <main className={appStyles.container}>
                {/*левая часть - ингридиенты списком*/}
                <section className={appStyles.container_left + ' mr-5'}>
                    <BurgerIngredients items={state.data} openModal={openModal} />
                </section>
                {/*правая часть - конструктор*/}
                <section className={appStyles.container_right + ' ml-5'}>
                    {/* снизу и сверху фиксированные слои булок + посередине все-все остальное */}
                    <ProductContext.Provider value={initialIngredients}>
                        {/*<BurgerConstructor items={state.data} openModal={openModal} />*/}
                        <BurgerConstructor items={state.data} doOrder={doOrder} openModal={openModal} />
                    </ProductContext.Provider>
                </section>

            </main>

            {/*модальные окна*/}
            {ingredientPopup && (
                <Modal closeModal={closeModal}>
                    <IngredientDetails
                        image={ingredientInfo.data.image}
                        name={ingredientInfo.data.name}
                        calories={ingredientInfo.data.calories}
                        fat={ingredientInfo.data.fat}
                        proteins={ingredientInfo.data.proteins}
                        carbohydrates={ingredientInfo.data.carbohydrates}
                    />
                </Modal>
            )}
            <OrderContext.Provider value={order}>
                {oderPopup && (
                    <Modal closeModal={closeModal}>
                        <OrderDetails />
                    </Modal>
                )}
            </OrderContext.Provider>
        </>
    );
}