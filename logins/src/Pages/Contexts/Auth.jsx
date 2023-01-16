import React, { createContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession } from "../../Services/Api";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('User');
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false);
    }, [])

    const login = async (email, password) => {
        const response = await createSession(email, password);

        console.log("Login auth", response.data);

        api.defaults.headers.Authorization = `Bearer ${response.data}`;
        const loggedUser = response.data;

        localStorage.setItem("User", JSON.stringify(loggedUser) );
        
        if(password === 'secret'){
            setUser(loggedUser);
            navigate('/');
        }
    };


    const logout = () => {
        api.defaults.headers.authorization = null;
        console.log('logout');
        setUser(null);
        localStorage.removeItem('User');
        navigate('/login')

    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}