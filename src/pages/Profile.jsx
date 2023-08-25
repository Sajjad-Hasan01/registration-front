import { useState, useEffect} from 'react';
import Axios from 'axios'
import {useCookies} from 'react-cookie'
import {useParams, useNavigate} from 'react-router-dom'

const Profile = () => {
    const [_,setCookies] = useCookies(['access_token']);
    const {urlUsername} = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [firstRenderDone, setFirstRenderDone] = useState(false);

    useEffect(()=>{
        const API = import.meta.env.VITE_SERVER_URL;
        Axios.get(`${API}/users`)
        .then(res => setUsers(res.data))
    },[])

    useEffect(()=>{
        if (firstRenderDone) {
            if (urlUsername !== 'profile') {        
                const user = users.find(({ username }) => username === urlUsername);
                console.log('User: ' + user);
                if(!user) navigate('*');
                setUsername(user?.username);
            }
            else {
                setUsername(window.localStorage.getItem('username'));
            }
        }
    },[firstRenderDone, users, urlUsername, setUsername, navigate]);
    
    useEffect(()=>{setFirstRenderDone(true)},[]);

    const removeCookies = () => {
        setCookies('access_token', '')
        window.localStorage.removeItem('userID')
        window.localStorage.removeItem('username')
        navigate('/login')
        window.location.reload(false)
    }

    return (
        <>
            <h2>{username}</h2>
            <button onClick={removeCookies}>Logout</button>
        </>
    );
}

export default Profile
