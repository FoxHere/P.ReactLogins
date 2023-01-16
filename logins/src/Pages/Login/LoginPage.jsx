import './LoginPage.css';
import {useState} from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';

const LoginPage = () => {

    const {authenticated, login} = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Dados enviados", {email, password});
        login(email, password);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(

        <div className="login-page">
            <h1 className='title'>LoginPage</h1>
            <p>{String(authenticated)}</p>
            <form className='form' onSubmit={handleSubmit}>
                
                <div className="field">
                    <label htmlFor="email" className="email">E-Mail</label>
                    <input
                        type="text" 
                        name="email" 
                        className="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>    

                <div className="field">
                    <label htmlFor="password" className="password">Senha</label>
                    <input
                        type="password" 
                        name="password" 
                        className="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}  
                    />
                </div>   

                <div className="actions">
                    <button type="Submit">Entrar</button>
                </div>
                
            </form> 
        </div>
    )
}

export default LoginPage;