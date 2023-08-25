import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    if (!window.localStorage.getItem('userID') || !window.localStorage.getItem('username')) return <Navigate to={'/login'}/>;
    return children;
}

export default ProtectedRoute