import styles from "./ingredient-details.module.css";
//import { useSelector } from 'react-redux';
import { useSelector } from '../../services/hooks';
//import { RootState } from '../../services/reducers/index';
import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
type QuizParams = {
    id: string;
};


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
    const { id } = useParams<QuizParams>();
    const foodList = useSelector((state) => state.apiList.burgerData);
    const exact: any = foodList!.find((elem: { _id: string }) => elem._id === id);
    const location = useLocation();


    if (exact)

        return (
            <div className={`${styles.ingredient__container} p-10`}>


                <p className={'text text_type_main-large'}>
                    Детали ингредиента
                </p>

                <img className={`${styles.ingredient__img}`}
                    src={exact?.image_large}
                    alt={exact?.name}
                />

                <p className="text text_type_main-medium">
                    {exact?.name}
                </p>


                <div className={`${styles.ingredient__info} mt-8 text_color_inactive`}>
                    <Detail type="Калории, ккал" content={exact?.calories} />
                    <Detail type="Белки, г" content={exact?.proteins} />
                    <Detail type="Жиры, г" content={exact?.fat} />
                    <Detail type="Углеводы, г" content={exact?.carbohydrates} />
                </div>
            </div>
        );
    else return null
}

export default IngredientDetails;