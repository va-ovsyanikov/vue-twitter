import axios from 'axios';

// const baseURL = process.env.NODE_ENV === "production"
//      ? 'http://82.148.18.115:3001/api'
//      : 'http://localhost:3001/api'



// interface axiosInstanseInterface{
//     baseURL:string
//     proxyHeaders: boolean,
//     credentials: boolean,
// }

// const axiosInstanse = axios.create({
//      baseURL,
//      proxyHeaders: false,
//      credentials: false,
// } as axiosInstanseInterface);



axios.interceptors.request.use(
     (config:any) => {
       const token =  localStorage.getItem('token')
       if (token) {
         config.headers.Authorization = token;
       }
       return config;
     },
     (error) => Promise.reject(error),
   );


// const API_URL = axiosInstanse.defaults.baseURL

const URL=" http://localhost:3001"
// : Promise<[]> 
export const request = async (method:any, url?: string, data?:any):Promise<any> => {
    const response = await axios({ method: method, url:`${URL}/${url}`, data });
    return response.data
}
