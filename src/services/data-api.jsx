export function getLoginData(data) {
    if(data.status !== 400) {
        const obj = {
            status: data.status,
            message: data.message,
            token: data.body.token
        }
    
        return obj;
    } else {
        const obj = {
            status: data.status,
            message: data.message,
        }
    
        return obj;
    }
}

export function getLoginFetchData(data) {
    if(data.body !== undefined) {
        const obj = {
            status: data.status,
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            userName: data.body.userName,
        }

        return obj;
    } else {
        const obj = {
            status: 0,
            email: "",
            firstName: "",
            lastName: "",
            userName: "",
        }
        
        return obj;
    }
}

export function saveUserProfilData(data) {
    const obj = {
        status: data.status,
        message: data.message,
    }

    return obj;
}