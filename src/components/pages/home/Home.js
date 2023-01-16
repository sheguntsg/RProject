import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'






function Home() {
  var name = ''
  var lastName = ''
  var signIn = sessionStorage.getItem('SignIn')
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    if (JSON.parse(signIn).email == key && JSON.parse(signIn).password == JSON.parse(localStorage.getItem(key)).password) {
        name =  JSON.parse(localStorage.getItem(key)).firstName
        lastName = JSON.parse(localStorage.getItem(key)).lastName
    }
  }
  const LogOut = ()=>{
    localStorage.clear()
    sessionStorage.clear()
    name = ''
    lastName = ''
    
  }
  
  
  return (
      <div>
        <h1 className={name == ''? 'none':'b'}>
          {name}
        </h1>
        <h2 className={name == ''? 'none':'b'}>
          {lastName}
        </h2>
        <NavLink to='/Register' className={({isActive})=>(isActive?'Active':'De')}><button  className={name == ''? 'none':'b'}onClick={LogOut}> Log Out</button></NavLink>
        
      </div>
      
  )
}

export default Home