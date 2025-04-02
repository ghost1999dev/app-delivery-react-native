import axios from "axios";

const ApiDelivery = axios.create({
    baseURL:'http://192.168.2.9:4000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})

export {ApiDelivery}