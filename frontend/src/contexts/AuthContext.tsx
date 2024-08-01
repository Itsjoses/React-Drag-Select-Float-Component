import React, { useEffect } from 'react'
import { createContext, useState, useContext } from 'react';
import  Cookies  from 'universal-cookie';
import { getTokenFromLocalCookie, unsetToken } from '../libs/AuthLibs';
import { apiCheckUsername } from '../api/auth';
import { ChildrenProps, UserContextType } from '../DataTypes/GlobalInterface';


const cookies = new Cookies(); // Initialize cookies instance

export const UserContext = createContext<UserContextType>({user: "", setUser: () => {}});

export const useUser = () => {
    const { user, setUser } = useContext(UserContext);
    return { user, setUser };
  };

export default function AuthContext({children}: ChildrenProps) {
    const [user,setUser] = useState<string>(cookies.get('username') || "")

    useEffect(() => {
        const getUsernameLocal = async () => {
          const jwtLocal = getTokenFromLocalCookie();
          if (jwtLocal) {
            try {
              const getUsername = await apiCheckUsername()
              console.log(getUsername);
              
              if(getUsername !== user){
                cookies.set("username", getUsername);
                setUser(getUsername)
              }
            } catch (error) {
              unsetToken()
            }
          }else{
            setUser("")
            unsetToken()
          } 
        }
        getUsernameLocal()
      }, []);

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
