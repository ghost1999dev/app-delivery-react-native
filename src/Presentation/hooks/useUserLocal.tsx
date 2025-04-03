import React,{useEffect,useState} from 'react'
import { GetUserUseCase } from '../../Domain/useCases/userLocal/GetUser'
import { User } from '../../Domain/entity/User'

export const useUserLocal = () => {
    const [user, setUser] = useState<User>()
    useEffect(() => {
        getData()
    }, [])
        
    const getData = async()=>{
        const user = await GetUserUseCase()
        setUser(user)
        console.log('SESSION USER' + JSON.stringify(user));
    }
  return {user}
}
