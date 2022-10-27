//este archivo va a manejar la configuración genérica de axios
import axios from 'axios';

//primero debemos definir el endpoint base de proyecto
//http://localhost:5000/api/Usuario/registrar

//build
//"http://192.168.5.133:4001/api"

//localhost
//http://localhost:5000/api/

axios.defaults.baseURL= "https://localhost:7148/api"; 


//crear objeto genérico que procese los request que se envién al servidor

const requestGenerico= {
    get : (url:string) => axios.get(url),
    post: (url:string, body:any) => axios.post(url, body),
    put: (url:string, body:any) => axios.put(url, body),
    delete : (url:string) => axios.delete(url)
};

export default requestGenerico;