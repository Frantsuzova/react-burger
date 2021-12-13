import PropTypes from "prop-types";

const BurgerIngredientsCategoryType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    __v: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
})

export { BurgerIngredientsCategoryType };