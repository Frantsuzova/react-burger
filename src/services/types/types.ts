export interface Ielem {
    keyAdd: number;
    key: string;
    counter: number;
    _id: string;
}

export interface IIngredientElem {
    name: string;
    image_large: string;
    image: string | undefined;
    type: string | undefined;
    calories: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
    counter: number;
    _id: string | undefined;
    price: number
}

export interface IElemInconstructor {
    type?: string,
    price?: number
}

export type TIngredient = {
    name: string;
    keyAdd: number;
    _id: string;
    type: string;
    price: number;
    image_mobile: string;
    image: string;
    image_large: string;
    counter: number;
    fat: number;
    calories: number;
    proteins: number;
    carbohydrates: number;
    key: number;
}

export type TOrder = {
    ingredients: Array<object>;
    number: number;
    name: string;
    status: string;
    createdAt: string;
}

export type TOrderSend = {
    order: { number: number; }
}

export type TModalData = {
    orders: Array<TOrder>;
}

export interface newObj {
    count?: number,
    type?: string,
    image_mobile?: string,
    name?: string,
    _id?: string,
    price?: string,
}
