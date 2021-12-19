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
                    <BurgerConstructor items={state.data} openModal={openModal} />
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
            {oderPopup && (
                <Modal closeModal={closeModal}>
                    <OrderDetails />
                </Modal>
            )}
        </>
    );
}