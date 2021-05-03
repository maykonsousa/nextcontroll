import React, {useEffect, useState, useContext, createContext, ReactNode, SetStateAction} from 'react'
import {UserDataApi} from '../data/userDataApi'
import {AxiosResponse} from 'axios'
import {api} from '../api'
import { isEmpty } from '../../common/utils/functions/isEmpty';

interface UserDataProps {
  name?: string;
  id?: string;
  avatar?: string;
  profession?: string;
  email?: string;
  password?:string;
  createdAt?:Date
  aplication?:String;
}




interface InterfaceProps {
  users?: UserDataProps[];
  logedUser: UserDataProps;
  userForEdit:UserDataProps;
  setUserForEdit:React.Dispatch<SetStateAction<UserDataProps>>;
  setLogeduser: React.Dispatch<SetStateAction<UserDataProps>>;
  setUsers?: React.Dispatch<SetStateAction<UserDataProps[]>>;
  refreshLista: Boolean;
  setRefreshLista:React.Dispatch<SetStateAction<Boolean>>

}

interface PropsComponent {
  children?: ReactNode;
}
export const globalContext = createContext<InterfaceProps>({} as InterfaceProps);

export const GlobalProvider = ({children}:PropsComponent)=>{
  const [users, setUsers] = useState<UserDataProps[] | AxiosResponse<UserDataProps[]> | []>([] )
  const [logedUser, setLogeduser]=useState<UserDataProps  | {}>({})
  const [totalPaginas, setTotalpaginas] = useState(null) 
  const [refreshLista, setRefreshLista] = useState(false)
  const [userForEdit, setUserForEdit] = useState<UserDataProps>({} as UserDataProps)

  //carregar lista de usuários
  useEffect(()=>{
    api.get( "users").then(response=>{
      const myList = Array.isArray(response.data) && response.data.filter((item: UserDataProps)=>item.aplication==="NextControll")
      setUsers(myList)
    })
    
  },[refreshLista])

  

 


  return(
    <globalContext.Provider value={{ 
      users, 
      setUsers, 
      refreshLista, 
      setRefreshLista, 
      logedUser, 
      setLogeduser,
      userForEdit, 
      setUserForEdit } as InterfaceProps}>
      {children}
    </globalContext.Provider>
  )
}