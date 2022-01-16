import React from "react";
import appStyles from './app.module.css';
//
import { dataUrl } from '../../utils/data.js';

// компоненты
import AppHeader from '../app-header/app-header.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from '../modal/modal';


//
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from 'react-redux'
import { getIngredients } from '../../services/actions/index'



export default function App() {
    const dispatch = useDispatch();
    const { hasError, error, isLoading, burgerData } = useSelector(state => state.apiList)
    const { ingridientModal, orderModal } = useSelector(state => state.modalInfo)


    React.useEffect(() => {
        dispatch(getIngredients(`${dataUrl}/ingredients`))
    }, []);

    return (
        <>
            {/*шапка*/}
            <AppHeader />
            {hasError && "Ошибка" && <div>{error}</div>}

            {/*основной интерфейс*/}
            {!isLoading && !hasError && burgerData && (
                <main className={appStyles.container}>

                    <DndProvider backend={HTML5Backend}>
                        {/*левая часть - ингридиенты списком*/}
                        <section className={appStyles.container_left + ' mr-5'}>
                            <BurgerIngredients />
                        </section>
                        {/*правая часть - конструктор*/}
                        <section className={appStyles.container_right + ' ml-5'}>
                            {/* снизу и сверху фиксированные слои булок + посередине все-все остальное */}
                            <BurgerConstructor />
                        </section>


                    </DndProvider>

                    {/*модальные окна*/}
                    {ingridientModal && <Modal children={<IngredientDetails />} />}
                    {orderModal && <Modal children={<OrderDetails />} />}

                </main>


            )}

        </>
    );
}