import {Link} from 'react-router-dom'
const Form = ({label, setUsername, setPassword, onSubmit, linkMessage, cta}) => {
    return (
        <div className="container">
            <h2>{label}</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" name="username" id="username" placeholder="Username"
                        onChange={e => setUsername(e.target.value)}/>
                    
                    <input type="text" name="password" id="password" placeholder="Password"
                        onChange={e => setPassword(e.target.value)}/>

                    <button type="submit">{label}</button>
                    <p>{linkMessage} <Link to={`/${cta}`}>{cta}</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Form