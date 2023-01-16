import './HomePage.css';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';


const HomePage = () => {
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout();
    }

    return(
        <div className="home-page">
            <h1>HomePage</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default HomePage;