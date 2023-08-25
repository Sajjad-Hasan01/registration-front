import {useCookies} from 'react-cookie'
import Login from "./pages/Login";
import Register from "./pages/Register";

const API = 'http://localhost:3000';

const Auth = () => {
    const [cookies, setCookies] = useCookies('access_token')
    const removeCookies = () => {
        setCookies('access_token', '')
        window.localStorage.removeItem('usereID')
        window.location.reload(false)
    }
    return (
        <>
            {cookies.access_token ?
            <div className="container"><button onClick={removeCookies}>Logout</button></div> :
            (
                <>
                    <Register url={API}/>
                    <Login url={API}/>
                </>
            )}
        </>
    )
}

export default Auth