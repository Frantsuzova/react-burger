import { combineReducers } from "redux";
import { TIndexActions } from '../actions/index';
import { TIngredient, TModalData, TOrderSend } from '../types/types';
import { webSocketAll } from "./webSocket";
import {
    GET_INGREDIENTS_API_REQUEST,
    GET_INGREDIENTS_API_SUCCESS,
    GET_INGREDIENTS_API_FAILED,
    CONSTRUCTOR_BUN,
    CONSTRUCTOR_MAIN_INGREDIENTS,
    MODAL_INGRIDIENT_OPEN,
    MODAL_ORDER_OPEN,
    MODAL_CLOSE,
    MODAL_ORDER_ERROR,
    WRITE_CURRENT_INGREDIENT,
    DELETE_CURRENT_INGREDIENT,
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_FAILED,
    TAB_SWITCH,
    CONSTRUCTOR_CARD_CHANGE,
    COUNT_TOTAL_PRICE,
    COUNT_CARD,
    CONSTRUCTOR_CLEAN,
    MODAL_ORDER_DETAIL_OPEN,
    WRITE_CURRENT_ORDER_DETAIL,
    DELETE_CURRENT_ORDER_DETAIL,
    GET_INFO_ONE_ORDER_REQUEST,
    GET_INFO_ONE_ORDER_SUCCESS,
    GET_INFO_ONE_ORDER_ERROR,
} from "../actions/index";

import {
    userRegistrationInfo,
    userInfo,
    forgotRequest,
} from "./auth";

type TinitialIngredientsApi = {
    hasError: boolean;
    error: null | object;
    isLoading: boolean;
    burgerData: null | Array<TIngredient>
}

export const initialIngredientsApi: TinitialIngredientsApi = {
    hasError: false,
    error: null,
    isLoading: false,
    burgerData: null,
};

type TinitialIngredientsConstructorList = {
    bun: TIngredient | null
    mainIngredients: Array<TIngredient>;
}

export const initialIngredientsConstructorList: TinitialIngredientsConstructorList = {
    bun: null,
    mainIngredients: [],
};

type TinitialCurrentIngredient = {
    name: string;
    image: null | string;
    calories: null | number;
    proteins: null | number;
    fat: null | number;
    carbohydrates: null | number;
}

export const initialCurrentIngredient: TinitialCurrentIngredient = {
    name: "",
    image: null,
    calories: null,
    proteins: null,
    fat: null,
    carbohydrates: null,
};
type TinitialModal = {
    ingridientModal: boolean;
    orderModal: boolean;
    detailOrderInfo: boolean;
    allClose: boolean;
    data: null | TModalData
    isLoading: boolean;
    error: null | object;
    hasError: boolean;
    modalError: boolean;
}
export const initialModal: TinitialModal = {
    ingridientModal: false,
    orderModal: false,
    detailOrderInfo: false,
    allClose: true,
    data: null,
    isLoading: false,
    error: null,
    hasError: false,
    modalError: false,
};
type TinitialOrder = {
    hasError: boolean;
    error: null | object;
    isLoading: boolean;
    orderInfo: null | TOrderSend;
    success: boolean;
}
export const initialOrder: TinitialOrder = {
    hasError: false,
    error: null,
    isLoading: false,
    orderInfo: null,
    success: false,
};
type TinitialTab = {
    currentTab: string;
}
export const initialTab: TinitialTab = {
    currentTab: "bun",
};
type TinitialPrice = {
    totalPrice: null | number;
}
export const initialPrice: TinitialPrice = {
    totalPrice: null,
};

type TinitialCurrentOrder = {
    number: null | number;
    name: string;
    status: string;
    ingredients: Array<object>;
    createdAt: string;
}
export const initialCurrentOrder: TinitialCurrentOrder = {
    number: null,
    name: "",
    status: "",
    ingredients: [],
    createdAt: "",
};

export const ingredientsApiList = (state = initialIngredientsApi, action: TIndexActions): TinitialIngredientsApi => {
    switch (action.type) {
        case GET_INGREDIENTS_API_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_INGREDIENTS_API_SUCCESS: {
            return {
                ...state,
                burgerData: action.items,
                isLoading: false,
                hasError: false,
            };
        }
        case GET_INGREDIENTS_API_FAILED: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                burgerData: null,
                error: action.error,
            };
        }
        case COUNT_CARD: {
            return {
                ...state,
                burgerData: action.value,
            };
        }
        default: {
            return state;
        }
    }
};

export const ingredientsConstructorList = (
    state = initialIngredientsConstructorList,
    action: TIndexActions
): TinitialIngredientsConstructorList => {
    switch (action.type) {
        case CONSTRUCTOR_BUN: {
            return {
                ...state,
                bun: action.bun,
            };
        }
        case CONSTRUCTOR_MAIN_INGREDIENTS: {
            return {
                ...state,
                mainIngredients: action.mainIngredients,
            };
        }
        case CONSTRUCTOR_CARD_CHANGE: {
            return {
                ...state,
                mainIngredients: action.value,
            };
        }
        case CONSTRUCTOR_CLEAN: {
            return {
                ...state,
                mainIngredients: initialIngredientsConstructorList.mainIngredients,
                bun: initialIngredientsConstructorList.bun,
            };
        }
        default: {
            return state;
        }
    }
};

export const currentIngredient = (state = initialCurrentIngredient, action: TIndexActions): TinitialCurrentIngredient => {
    switch (action.type) {
        case WRITE_CURRENT_INGREDIENT: {
            return {
                ...state,
                name: action.name,
                image: action.image,
                calories: action.calories,
                proteins: action.proteins,
                fat: action.fat,
                carbohydrates: action.carbohydrates,
            };
        }
        case DELETE_CURRENT_INGREDIENT: {
            return {
                ...state,
                name: "",
                image: null,
                calories: null,
                proteins: null,
                fat: null,
                carbohydrates: null,
            };
        }

        default: {
            return state;
        }
    }
};

export const currentOrderDetail = (state = initialCurrentOrder, action: TIndexActions): TinitialCurrentOrder => {
    switch (action.type) {
        case WRITE_CURRENT_ORDER_DETAIL: {
            return {
                ...state,
                number: action.number,
                name: action.name,
                status: action.status,
                ingredients: action.ingredients,
                createdAt: action.date,
            };
        }
        case DELETE_CURRENT_ORDER_DETAIL: {
            return {
                ...state,
                number: null,
                name: "",
                status: "",
                ingredients: [],
                createdAt: "",
            };
        }

        default: {
            return state;
        }
    }
};

export const modalInfo = (state = initialModal, action: TIndexActions): TinitialModal => {
    switch (action.type) {
        case MODAL_INGRIDIENT_OPEN: {
            return {
                ...state,
                ingridientModal: action.open,
                orderModal: false,
                allClose: false,
                modalError: false,
            };
        }
        case MODAL_ORDER_OPEN: {
            return {
                ...state,
                orderModal: action.open,
                ingridientModal: false,
                modalError: false,
                allClose: false,
            };
        }
        case MODAL_ORDER_DETAIL_OPEN: {
            return {
                ...state,
                orderModal: false,
                ingridientModal: false,
                modalError: false,
                detailOrderInfo: action.open,
                allClose: false,
            };
        }
        case MODAL_ORDER_ERROR: {
            return {
                ...state,
                modalError: action.open,
                ingridientModal: false,
                allClose: false,
            };
        }
        case MODAL_CLOSE: {
            return {
                ...state,
                ingridientModal: false,
                orderModal: false,
                modalError: false,
                detailOrderInfo: false,
                allClose: true,
            };
        }
        case GET_INFO_ONE_ORDER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_INFO_ONE_ORDER_SUCCESS: {
            return {
                ...state,
                data: action.value,
                hasError: false,
                isLoading: false,
            };
        }
        case GET_INFO_ONE_ORDER_ERROR: {
            return {
                ...state,
                hasError: true,
                isLoading: false,
                error: action.value,
            };
        }
        default: {
            return state;
        }
    }
};

export const createdOrder = (state = initialOrder, action: TIndexActions): TinitialOrder => {
    switch (action.type) {
        case SEND_ORDER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SEND_ORDER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                success: true,
                hasError: false,
                orderInfo: action.data,
            };
        }
        case SEND_ORDER_FAILED: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                error: action.error,
                orderInfo: null,
            };
        }
        default: {
            return state;
        }
    }
};

export const tabSwtich = (state = initialTab, action: TIndexActions): TinitialTab => {
    switch (action.type) {
        case TAB_SWITCH: {
            return {
                ...state,
                currentTab: action.value,
            };
        }
        default: {
            return state;
        }
    }
};
export const totalPrice = (state = initialPrice, action: TIndexActions): TinitialPrice => {
    switch (action.type) {
        case COUNT_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.value,
            };
        }
        default: {
            return state;
        }
    }
};
export const rootReducer = combineReducers({
    apiList: ingredientsApiList,
    constructorList: ingredientsConstructorList,
    modalInfo: modalInfo,
    currentIngredient: currentIngredient,
    createdOrder: createdOrder,
    tabSwtich: tabSwtich,
    price: totalPrice,
    registration: userRegistrationInfo,
    userInfo: userInfo,
    forgotRequest: forgotRequest,
    webSocketAll: webSocketAll,
    currentOrderDetail: currentOrderDetail,
});