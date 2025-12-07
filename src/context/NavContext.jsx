import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavBarContext =  createContext()
export const NavbarColorContext = createContext()

const NavContext = ({ children }) => {
  const [navOpen , setNavOpen] = useState(false)
  const [navColor , setNavColor] = useState('white')

  const locate = useLocation().pathname
    useEffect(function(){
        if(locate == '/projects' || locate == '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])


  return (
  <div>
    <NavBarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor,setNavColor]}>
              {children}
        </NavbarColorContext.Provider>
    </NavBarContext.Provider>
  </div>
  )
}
export default NavContext
