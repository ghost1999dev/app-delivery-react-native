import { AxiosError } from "axios";
import { User } from "../../Domain/entity/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../sources/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/models/ResponseApiDelivery";
import { ImageInfo } from "expo-image-picker";
import mime from 'mime'

export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseApiDelivery> { 
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>("/users/save", user);
      return Promise.resolve(response.data)
    } catch (error) {
      let e = (error as AxiosError)
      const apiError:ResponseApiDelivery= JSON.parse(JSON.stringify(e.response?.data))
      return Promise.resolve(apiError);
    }
  }

  async login(email: string, password: string): Promise<ResponseApiDelivery> {
      try {
        const response = await ApiDelivery.post<ResponseApiDelivery>("/users/login",{
          email,
          password
        })
        return Promise.resolve(response.data)
      } catch (error) {
        let e = (error as AxiosError)
        const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
        return Promise.resolve(apiError)
      }
  }
  async registerWithImage(user: User, file: ImageInfo): Promise<ResponseApiDelivery> {
      try {
        const newImageUri = "file:///" + file.uri.split("file:/").join("");
        const data = new FormData();
        data.append('image',{
          // @ts-ignore
          uri:newImageUri,
          name:file.uri.split('/').pop(),
          type: mime.getType(file.uri) || 'image/jpeg'
        }as any)
        data.append('user',JSON.stringify(user))
        const response = await ApiDelivery.post<ResponseApiDelivery>("/users/save",data,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        })
        return Promise.resolve(response.data)
      } catch (error) {
        let e = (error as AxiosError)
        const apiError:ResponseApiDelivery=JSON.parse(JSON.stringify(e.response?.data))
        return Promise.resolve(apiError)
      }
  }
}
