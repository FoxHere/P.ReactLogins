import axios from 'axios';

export const api = axios.create({
    baseURL: "https://easyfox3.test/"
});

export const createSession = async (email, password) => {
    api.defaults.headers.Authorization = "Basic 0c4742b1305393499b55dc801de41ee8c35b29b15886efae8e3ab3792e5a";
    api.defaults.headers.login = email;
    api.defaults.headers.password = password;
    

    return api.post("auth/api/",{});
}

