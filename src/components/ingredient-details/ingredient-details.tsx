import styles from "./ingredient-details.module.css";
//import { useSelector } from 'react-redux';
import { useSelector } from '../../services/hooks';
import { RootState } from '../../services/reducers/index';
import React, { FunctionComponent } from "react";

const Detail: FunctionComponent<{ type: string, content: number | null }> = ({ type, content }) => {
    return (
        <div className={`${styles.ingredient__element} mr-5`}>
            <p className="text text_type_main-default">
                {type}
            </p>
            <p className="text text_type_digits-default">
                {content}
            </p>
        </div>
    );
}

function IngredientDetails() {
    const { name, image, calories, proteins, fat, carbohydrates } = useSelector((state) => state.currentIngredient)
    const modal = useSelector((state) => state.modalInfo.ingridientModal);

    //console.log('ты в деталях ингридиента');
    return (
        <div className={`${styles.ingredient__container} p-10`}>
            {/* заголовок ингридиента */}
            {!modal && (
                <p className={'text text_type_main-large'}>
                    Детали ингредиента
                </p>)}
            {image && (
                <img className={`${styles.ingredient__img}`}
                    alt="ваш ингридиент"
                    src={image}
                />)}

            <p className="text text_type_main-medium">
                {name}
            </p>

            {/* инфа по ингридиенту */}
            <div className={`${styles.ingredient__info} mt-8 text_color_inactive`}>
                <Detail type="Калории, ккал" content={calories} />
                <Detail type="Белки, г" content={proteins} />
                <Detail type="Жиры, г" content={fat} />
                <Detail type="Углеводы, г" content={carbohydrates} />
            </div>
        </div>
    );
}

export default IngredientDetails;
