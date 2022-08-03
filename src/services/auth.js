import api from "./api"

export  function registerUser(name, email, password, confirmPassword){
    return api.post('/signup', {name, email, password, confirmPassword})
}

export  function sendLogin(email, password){
    return api.post('/signin', {email, password})
}



