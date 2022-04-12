import { TIngredient, TOrderSend, TModalData, Ielem, IElemInconstructor, IIngredientElem, newObj } from '../types/types'
import { Dispatch } from 'redux';
import { instance } from "./axios";
import { v4 as uuidv4 } from 'uuid';

export const GET_INGREDIENTS_API_REQUEST: 'GET_INGREDIENTS_API_REQUEST' = "GET_INGREDIENTS_API_REQUEST";
export const GET_INGREDIENTS_API_SUCCESS: 'GET_INGREDIENTS_API_SUCCESS' = "GET_INGREDIENTS_API_SUCCESS";
export const GET_INGREDIENTS_API_FAILED: 'GET_INGREDIENTS_API_FAILED' = "GET_INGREDIENTS_API_FAILED";

export const SEND_ORDER_REQUEST: 'SEND_ORDER_REQUEST' = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS: 'SEND_ORDER_SUCCESS' = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED: 'SEND_ORDER_FAILED' = "SEND_ORDER_FAILED";

export const CONSTRUCTOR_BUN: 'CONSTRUCTOR_BUN' = "CONSTRUCTOR_BUN";

export const CONSTRUCTOR_MAIN_INGREDIENTS: 'CONSTRUCTOR_MAIN_INGREDIENTS' = "CONSTRUCTOR_MAIN_INGREDIENTS";

export const MODAL_INGRIDIENT_OPEN: 'MODAL_INGRIDIENT_OPEN' = "MODAL_INGRIDIENT_OPEN";
export const MODAL_ORDER_OPEN: 'MODAL_ORDER_OPEN' = "MODAL_ORDER_OPEN";
export const MODAL_CLOSE: 'MODAL_CLOSE' = "MODAL_CLOSE";
export const MODAL_ORDER_ERROR: 'MODAL_ORDER_ERROR' = "MODAL_ORDER_ERROR";
export const MODAL_ORDER_DETAIL_OPEN: 'MODAL_ORDER_DETAIL_OPEN' = "MODAL_ORDER_DETAIL_OPEN";

export const WRITE_CURRENT_INGREDIENT: 'WRITE_CURRENT_INGREDIENT' = "WRITE_CURRENT_INGREDIENT";
export const DELETE_CURRENT_INGREDIENT: 'DELETE_CURRENT_INGREDIENT' = "DELETE_CURRENT_INGREDIENT";

export const TAB_SWITCH: 'TAB_SWITCH' = "TAB_SWITCH";

export const CONSTRUCTOR_CARD_CHANGE: 'CONSTRUCTOR_CARD_CHANGE' = "CONSTRUCTOR_CARD_CHANGE";
export const CONSTRUCTOR_CLEAN: 'CONSTRUCTOR_CLEAN' = "CONSTRUCTOR_CLEAN";

export const COUNT_TOTAL_PRICE: 'COUNT_TOTAL_PRICE' = "COUNT_TOTAL_PRICE";

export const COUNT_CARD: 'COUNT_CARD' = "COUNT_CARD";

export const WRITE_CURRENT_ORDER_DETAIL: 'WRITE_CURRENT_ORDER_DETAIL' = "WRITE_CURRENT_ORDER_DETAIL";
export const DELETE_CURRENT_ORDER_DETAIL: 'DELETE_CURRENT_ORDER_DETAIL' = "DELETE_CURRENT_ORDER_DETAIL";

export const GET_INFO_ONE_ORDER_REQUEST: 'GET_INFO_ONE_ORDER_REQUEST' = "GET_INFO_ONE_ORDER_REQUEST";
export const GET_INFO_ONE_ORDER_SUCCESS: 'GET_INFO_ONE_ORDER_SUCCESS' = "GET_INFO_ONE_ORDER_SUCCESS";
export const GET_INFO_ONE_ORDER_ERROR: 'GET_INFO_ONE_ORDER_ERROR' = "GET_INFO_ONE_ORDER_ERROR";

export interface IGetIngredientsApiRequest {
    readonly type: typeof GET_INGREDIENTS_API_REQUEST;
}

export interface IGetIngredientsApiSuccess {
    readonly type: typeof GET_INGREDIENTS_API_SUCCESS;
    readonly items: Array<TIngredient>
}

export interface IGetIngredientsApiFailed {
    readonly type: typeof GET_INGREDIENTS_API_FAILED;
    readonly error: object
}

export interface ISendOrderRequest {
    readonly type: typeof SEND_ORDER_REQUEST;
}

export interface ISendOrderSuccess {
    readonly type: typeof SEND_ORDER_SUCCESS;
    readonly data: TOrderSend
}

export interface ISendOrderFailed {
    readonly type: typeof SEND_ORDER_FAILED;
    readonly error: object
}

export interface IConstructorBun {
    readonly type: typeof CONSTRUCTOR_BUN;
    readonly bun: TIngredient | null
}

export interface IConstructorMainIngredients {
    readonly type: typeof CONSTRUCTOR_MAIN_INGREDIENTS;
    readonly mainIngredients: Array<TIngredient>
}


export interface IModalOpenIngredient {
    readonly type: typeof MODAL_INGRIDIENT_OPEN;
    readonly open: boolean
}

export interface IModalOpenOrder {
    readonly type: typeof MODAL_ORDER_OPEN;
    readonly open: boolean
}

export interface IModalOpenOrderDetail {
    readonly type: typeof MODAL_ORDER_DETAIL_OPEN;
    readonly open: boolean
}

export interface IModalOpenError {
    readonly type: typeof MODAL_ORDER_ERROR;
    readonly open: boolean
}

export interface IModalClose {
    readonly type: typeof MODAL_CLOSE;
}

export interface IWhireCurrentIngredient {
    readonly type: typeof WRITE_CURRENT_INGREDIENT;
    readonly name: string;
    readonly image: string;
    readonly calories: number;
    readonly proteins: number;
    readonly fat: number;
    readonly carbohydrates: number;

}

export interface IDeleteCurrentIngredient {
    readonly type: typeof DELETE_CURRENT_INGREDIENT;
}

export interface ITabSwitch {
    readonly type: typeof TAB_SWITCH;
    readonly value: string;
}

export interface IConstructorCardChange {
    readonly type: typeof CONSTRUCTOR_CARD_CHANGE;
    readonly value: Array<TIngredient>;
}

export interface IConstructorClean {
    readonly type: typeof CONSTRUCTOR_CLEAN;
}

export interface ICountTotalPrice {
    readonly type: typeof COUNT_TOTAL_PRICE;
    readonly value: number | null;
}

export interface ICountCard {
    readonly type: typeof COUNT_CARD;
    readonly value: Array<TIngredient>
}

export interface IWriteCurrentOrderDetail {
    readonly type: typeof WRITE_CURRENT_ORDER_DETAIL;
    readonly number: number;
    readonly name: string;
    readonly status: string;
    readonly ingredients: Array<object>;
    readonly date: string;

}
export interface IDeleteCurrentOrderDetail {
    readonly type: typeof DELETE_CURRENT_ORDER_DETAIL;
}

export interface IGetIngoOneOrderRequest {
    readonly type: typeof GET_INFO_ONE_ORDER_REQUEST;
}

export interface IGetIngoOneOrderSuccess {
    readonly type: typeof GET_INFO_ONE_ORDER_SUCCESS;
    readonly value: TModalData
}

export interface IGetIngoOneOrderError {
    readonly type: typeof GET_INFO_ONE_ORDER_ERROR;
    readonly value: object
}

export type TIndexActions =
    | IGetIngoOneOrderError
    | IGetIngoOneOrderSuccess
    | IGetIngoOneOrderRequest
    | IDeleteCurrentOrderDetail
    | IWriteCurrentOrderDetail
    | ICountCard
    | ICountTotalPrice
    | IConstructorClean
    | IConstructorCardChange
    | ITabSwitch
    | IDeleteCurrentIngredient
    | IWhireCurrentIngredient
    | IModalClose
    | IModalOpenError
    | IModalOpenOrderDetail
    | IModalOpenOrder
    | IModalOpenIngredient
    | IConstructorMainIngredients
    | IConstructorBun
    | ISendOrderFailed
    | ISendOrderSuccess
    | ISendOrderRequest
    | IGetIngredientsApiFailed
    | IGetIngredientsApiSuccess
    | IGetIngredientsApiRequest;


export function getIngredients() {
    return async function (dispatch: Dispatch<TIndexActions>) {
        try {
            const res = await instance.get("ingredients");
            dispatch({
                type: GET_INGREDIENTS_API_REQUEST,
            });
            if (res.status === 200) {
                const { data } = res.data;
                const last = data.map((elem: Ielem) => {
                    elem.keyAdd = 0;
                    elem.key = elem._id;
                    elem.counter = 0;
                    return elem;
                });
                dispatch({
                    type: GET_INGREDIENTS_API_SUCCESS,
                    items: last,
                });
            }
        } catch (error: any) {
            dispatch({
                type: GET_INGREDIENTS_API_FAILED,
                error: error,
            });
        }
    };
}

export function getConstructorIngredients(data: Array<TIngredient>) {
    const bun: any = data.find((elem: TIngredient) => {
        if (elem.type === "bun") { return elem }
        else return null
    }) || null;
    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: CONSTRUCTOR_BUN,
            bun: bun,
        });
        dispatch({
            type: CONSTRUCTOR_MAIN_INGREDIENTS,
            mainIngredients: data.filter((elem: IElemInconstructor) => elem.type !== "bun"),
        });
        dispatch({
            type: COUNT_TOTAL_PRICE,
            value: data.map((elem: IElemInconstructor) => elem.price).reduce((a: number, b: number | undefined) => a + b!, 0) || null,
        });
    };
}

export function currentIngredient(elem: IIngredientElem) {
    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: WRITE_CURRENT_INGREDIENT,
            name: elem.name,
            image: elem.image_large,
            calories: elem.calories,
            proteins: elem.proteins,
            fat: elem.fat,
            carbohydrates: elem.carbohydrates,
        });
        dispatch({
            type: MODAL_INGRIDIENT_OPEN,
            open: true,
        });
    };
}


export function sendOrderAxios(data: Array<object>) {
    return async function (dispatch: Dispatch<TIndexActions>) {
        try {
            dispatch({
                type: SEND_ORDER_REQUEST,
            });
            const res = await instance.post("orders", {
                ingredients: data,
            });
            if (res.status === 200) {
                const { data } = res;
                dispatch({
                    type: SEND_ORDER_SUCCESS,
                    data: data,
                });
            }
        } catch (error: any) {
            dispatch({
                type: SEND_ORDER_FAILED,
                error: error,
            });
        }
    };
}

export function switchTab(e: string) {
    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: TAB_SWITCH,
            value: e,
        });
    };
}

export function switchCard(dragIndex: number, hoverIndex: number, ingredients: Array<TIngredient>) {
    const newIngredients = [...ingredients];
    const dragIngredient = newIngredients[dragIndex];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragIngredient);
    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: "CONSTRUCTOR_CARD_CHANGE",
            value: newIngredients,
        });
    };
}


export function deleteCard(mainIngredients: Array<TIngredient>, elemKey: TIngredient, totalCard: any) {
    return function (dispatch: Dispatch<TIndexActions>) {
        const filtered = mainIngredients.filter((elem) => {
            elem.keyAdd--;
            return elem !== elemKey;
        });

        if (filtered.length === 0) {
            totalCard.burgerData.filter((elem: { type: string, counter: number }) => {
                if (elem.type !== 'bun') {
                    elem.counter = 0
                }
            })
        }


        dispatch({
            type: CONSTRUCTOR_CARD_CHANGE,
            value: filtered,
        });
        dispatch({
            type: COUNT_CARD,
            value: totalCard.burgerData,
        });
    };
}

export function countPrice(mainIngredients: Array<TIngredient>, bun: TIngredient) {
    let mainPrice = 0;
    let bunPrice = 0;
    if (bun.type) {
        bunPrice = bun.price * 2;
    }
    if (!bun.type) {
        bunPrice = 0;
    }
    if (mainIngredients.length > 0) {
        mainPrice = mainIngredients
            .map((elem) => elem.price)
            .reduce((a, b) => a + b, 0);
    }
    if (mainIngredients.length === 0) {
        mainPrice = 0;
    }
    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: COUNT_TOTAL_PRICE,
            value: bunPrice + mainPrice,
        });
    };
}

export const itemTypes = {
    constructor: "movableCard",
    ingredient: "addbleCard",
};


export function addCard(elem: any, mainIngredients: Array<TIngredient>, bun: TIngredient | null) {
    let newMainIngredients = [...mainIngredients];
    let newElem: any = {};
    if (elem.item)
        return function (dispatch: Dispatch<TIndexActions>) {
            if (elem.item.type === "bun" && elem.item !== bun) {
                elem.item.keyAdd = uuidv4();
                elem.item.counter = 2;
                if (bun)
                    bun.counter = 0;
                dispatch({
                    type: CONSTRUCTOR_BUN,
                    bun: elem.item,
                });
            }
            if (elem.item.type !== "bun" && !mainIngredients.includes(elem.item)) {
                newMainIngredients.push(elem.item);
                elem.item.keyAdd = uuidv4();
            }
            if (elem.item.type !== "bun" && mainIngredients.includes(elem.item)) {
                Object.assign(newElem, elem.item);
                newMainIngredients.push(newElem);
                newElem.keyAdd = uuidv4();
            }
            dispatch({
                type: CONSTRUCTOR_MAIN_INGREDIENTS,
                mainIngredients: newMainIngredients,
            });
        };
}


export function count(mainIngredients: Array<TIngredient>, elemKey: { _id: string }, totalCard: any) {
    const newTotal = [...totalCard.burgerData].filter(
        (elem: any) => elem.type !== "bun"
    );
    const newMainIngredients = [...mainIngredients];
    const counted = newMainIngredients.filter(
        (elem: any) => elem._id === elemKey._id
    ).length;
    const exact: any = newTotal.find((elem: any) => elem._id === elemKey._id);

    const filtered = newTotal.indexOf(exact);

    const difference = newTotal
        .filter((x) => !newMainIngredients.includes(x))
        .concat(newMainIngredients.filter((x) => !newTotal.includes(x)));

    if (difference) {
        difference.map((elem: any) => {
            elem.counter = 0;
            return elem;
        });
        newTotal.concat(difference).filter((elem: any, index) => {
            return newTotal.indexOf(elem) === index && elem.counter === 0;
        });
    }

    exact.counter = counted;
    newTotal.splice(filtered, 1, exact);

    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: COUNT_CARD,
            value: totalCard.burgerData,
        });
    };
}

export function closeModal() {
    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: MODAL_CLOSE,
        });
        dispatch({
            type: DELETE_CURRENT_INGREDIENT,
        });
    };
}

export function openModalOrder(infoToSend: any) {
    return function (dispatch: any) {
        if (infoToSend) {
            dispatch({
                type: CONSTRUCTOR_CLEAN,
            });
            dispatch(sendOrderAxios(infoToSend));
            dispatch({
                type: MODAL_ORDER_OPEN,
                open: true,
            });
        }
        else {
            dispatch({
                type: MODAL_ORDER_ERROR,
                open: true,
            });
        }
    };
}



export function cleanCounter(total: any) {
    const result = total.map((elem: { counter: number }) => {
        elem.counter = 0;
        return elem;
    });
    return function (dispatch: Dispatch<TIndexActions>) {
        dispatch({
            type: COUNT_CARD,
            value: result,
        });
    };
}

export function countCostOrder(all: any, ingredients: Array<object>) {


    let result: {
        right: null | Array<newObj>;
        totalCost: null | number;
    } = {
        right: null,
        totalCost: null,
    };

    const sim = all
        .filter((x: any) => ingredients.includes(x._id))
        .concat(ingredients.filter((x) => all.includes(x)));


    result.right = sim.sort((a: any) => {
        if (a.type === "bun") {
            return -1;
        } else {
            return 1;
        }
    });
    if (result && result.right)
        result.totalCost = result.right
            .map((elem: any) => {
                if (elem.type === "bun") {
                    return elem.price * 2;
                }
                if (elem.type !== "bun") {
                    return elem.price;
                }
            })
            .reduce((a, b) => a + b, 0);

    return result;
}


export type TindexActions = {

}