import { AsyncStorage } from "@react-native-async-storage/async-storage";

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
    }
}

export default {
    getToken: async () => {
        return await AsyncStorage.getItem("token");
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem("token");
    }
}