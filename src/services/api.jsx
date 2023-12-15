import { getLoginData, getLoginFetchData, saveUserProfilData } from "../services/data-api";


//to login
export const getLogin = async (identifiants) => {
    const URL_API = "http://localhost:3001/api/v1/user/login";

    const loginResponse = await fetch(URL_API, {
        body: JSON.stringify(identifiants),
        headers: {
            "content-Type": "application/json",
        },
        method: "POST"
    }).then((response) =>response.json());

    return getLoginData(loginResponse);
}


//check if connected

export const getLoginFetch = async (token) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const loginFetchResponse = await fetch(URL_API, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        },
        method: "POST"
    }).then((response) => response.json());

    
    return getLoginFetchData(loginFetchResponse);
}

export const saveUserProfil = async (token, newPseudo) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const saveUserProfilResponse = await fetch(URL_API, {
        body: JSON.stringify(newPseudo),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        },
        method: "PUT"
    }).then((response) => response.json());

    return saveUserProfilData(saveUserProfilResponse);
}

