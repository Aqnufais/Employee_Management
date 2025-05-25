import React,{ useContext, useEffect, useState }  from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/dashboard/employeeDashboard'
import AdminDash from './components/dashboard/AdminDash'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData.employees);
  
  useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)

    if (userData.role === 'employee') {
      setLoggedInUserData(userData.data)
    }
  }
}, [])
  
  
  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '12345') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
  }else if(authData){
      const employee =authData.employees.find((e) => email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    }else{
      alert("invalid Email or Password 🛑")
    }
  }

  
  
  
  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' ? <AdminDash /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}

    {/* {user === 'admin' && <AdminDash />}
    {user === 'employee' && <EmployeeDashboard />} */}
    </>
  )
}

export default App