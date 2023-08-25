import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <>
      <h1>Error</h1>
      <p>page or user not found</p>
      <Link to='/'>Back to home</Link>
    </>
  )
}

export default Error