import { Rol } from "./Rol"

export interface User{
    id?:             string
    name:           string
    lastname:       string
    phone:          string
    email:          string
    password:       string
    confirmPassword:string
    token?:         string
    roles?:         Rol[]
}