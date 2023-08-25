import {useState} from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import Axios from 'axios'
import Form from '../components/Form'

const Register = () => {
    if (window.localStorage.getItem('userID') || window.localStorage.getItem('username')) return <Navigate to={'/'}/>;
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [_,setCookies] = useCookies(['access_token'])
    const navigate = useNavigate()
    
    const onSubmit = async e => {
        e.preventDefault(); 
        const response = await Axios.post(`${import.meta.env.SERVER_URL}/register`, {username, password})
        
        if (response.data.token && response.data.userId && response.data.username) {
            setCookies('access_token', response.data.token)
            window.localStorage.setItem('username',response.data.username)
            window.localStorage.setItem('userID',response.data.userId)
            
            navigate('/profile')
            window.location.reload(false)
        }
        else {return alert(response.data.message)}
    }

    return (
        <Form 
            label='Register' 
            username={username} 
            setUsername={setUsername}
            password={password} 
            setPassword={setPassword} 
            onSubmit={onSubmit}
            linkMessage={'already have an account?'}
            cta={'login'}
        />
    )
}

export default Register