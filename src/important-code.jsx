/*    Check user info and send it to 'ProtectedRoute'   */
/*   This situation just in client side, when use React  */
function App() {
    const [user, setUser] = useState(null);
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/profile' element={
                <ProtectedRoute user={user}>
                    <Profile user={user} />
                </ProtectedRoute>
            }/>
            <Route path='login' element={<Login url={API} setUser={setUser} />}/>
        </Routes>
      </BrowserRouter>
    )
  }

const onLoginSubmit = async e => {
    e.preventDefault(); 
    
    // if (!username || !password) return alert(`there's wrong`);
    // setUser({username:username, password:password}) 
}
/////////////////////////////////////////////////////////////////

