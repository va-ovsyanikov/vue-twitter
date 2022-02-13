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



// const token = localStorage.getItem('token')
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token
// }
// axios.interceptors.response.use(undefined, (err) => {
//   return new Promise((resolve, reject) => {
//     if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
//       console.log('Unauthorized')
//       localStorage.removeItem('token')
//       router.push({name: 'register'})
//     } else { 
//       console.log('Authorized')
//     }
//   });
// });



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

export const request = async (method:any, url?: string, data?:any):Promise<any> => {
    const response = await axios({ method: method, url:`${URL}/${url}`, data });
    return response.data
}
