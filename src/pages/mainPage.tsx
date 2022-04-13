import React from "react";
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import Modal from '../components/modal/modal';
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import OrderDetails from '../components/order-details/order-details';
import { useSelector } from '../services/hooks'
import appStyles from '../components/app/app.module.css';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function MainPage() {

    const { orderModal } =
        useSelector((state) => state.modalInfo);

    return (
        <main className={appStyles.container}>
            <DndProvider backend={HTML5Backend}>
                <section className={appStyles.container_left + ' mr-5'}>
                    <BurgerIngredients />
                </section>

                <section className={appStyles.container_right + ' ml-5'}>
                    <BurgerConstructor />
                </section>
            </DndProvider>


            {/*IngredientDetails && <Modal children={<IngredientDetails />} />*/}
            {orderModal && <Modal children={<OrderDetails />} />}

        </main>
    );
}

export default MainPage;