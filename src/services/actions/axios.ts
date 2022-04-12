import { getCookie, refreshToken } from './auth'

const axios = require("axios");
interface IConfig {
    headers: {
        Authorization: string
    }
}

export const instance = axios.create({
    baseURL: "https://norma.nomoreparties.space/api/",
    headers: {
        "Content-Type": "application/json",
    },

});

instance.interceptors.request.use(
    (config: IConfig) => {
        const token = getCookie("accessToken");
        if (token) {
            config.headers.Authorization = "Bearer " + token;

        } else {
            delete instance.defaults.headers.common.Authorization;

        }
        return config;
    },
    (error: any) => Promise.reject(error)
);
