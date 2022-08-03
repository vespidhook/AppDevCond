import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://api.devcond.bas.inf.br/public/api";

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}/${endpoint}`;
    let body = null;

    switch(method) {
        case "get":
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;            
        break;
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params);
        break;
    }

    let hederes = {'Content-Type': 'application/json'};
    if(token) {
        hederes.Authorization = `Bearer ${token}`;
    }

    let req = await fetch(fullUrl, {
        method,
        hederes,
        body
    });
    let json = await req.json();
    return json;
}

export default {
    getToken: async () => {
        return await AsyncStorage.getItem("token");
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem("token");
        let json = await request("post", "auth/validate", {}, token);
        return json;
    }
}