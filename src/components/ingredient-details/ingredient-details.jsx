import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";

function IngredientDetails({ name, image, calories, fat, proteins, carbohydrates }) {
    return (
        <div className={`${styles.ingredient__container} p-10`}>
            {/* заголовок ингридиента */}
            <p className={'text text_type_main-large'}>
                Детали ингредиента
            </p>
            <img className={`${styles.ingredient__img}`}
                alt="ваш ингридиент"
                src={image}
            />
            <p className="text text_type_main-medium">
                {name}
            </p>

            {/* инфа по ингридиенту */}
            <div className={`${styles.ingredient__info} mt-8 text_color_inactive`}>
                <div className={`${styles.ingredient__element} mr-5`}>
                    <p className="text text_type_main-default">
                        Калории,ккал
                    </p>
                    <p className="text text_type_digits-default">
                        {calories}
                    </p>
                </div>
                <div className={`${styles.ingredient__element} mr-5`}>
                    <p className="text text_type_main-default">
                        Белки, г
                    </p>
                    <p className="text text_type_digits-default">
                        {proteins}
                    </p>
                </div>
                <div className={`${styles.ingredient__element} mr-5`}>
                    <p className="text text_type_main-default">
                        Жиры, г
                    </p>
                    <p className="text text_type_digits-default">
                        {fat}
                    </p>
                </div>
                <div className={`${styles.ingredient__element} mr-5`}>
                    <p className="text text_type_main-default">
                        Углеводы, г
                    </p>
                    <p className="text text_type_digits-default">
                        {carbohydrates}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired
};