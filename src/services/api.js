import axios from "axios";
const methods = ['get','post','put','delete']

const axiosWrapper = {}

const queryStringBuilder = query => Object.keys(query).length ? '?' + Object.keys(query).map(k => `${k}=${query[k]}`).join('&') : '';

const instance = axios.create({
    //baseURL: 'https://projeto-16-shortly-back.herokuapp.com'
    baseURL: 'http://localhost:4001'
  });

for(const method of methods){
    axiosWrapper[method] = async function (route, body, headers, query = {}, complete = false){
        try {
            const url = `${route}${queryStringBuilder(query)}`;

            const request = await instance({
                method,
                url,
                data: body,
                headers
            });

            return complete ? request : request.data;
        } catch (error) {
             return Promise.reject(error.response);
        }
    }
}

export default axiosWrapper