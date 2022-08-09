
import axios from "axios"
import { toast } from 'react-toastify';

const API_URL = function (endpoint){
  //return `https://projeto-16-shortly-back.herokuapp.com${endpoint}`
  return `http://localhost:4001${endpoint}`
}

export function getUserURLS(config, setURLS){
  axios.get(API_URL('/users/me'), config).then(response => {
      setURLS(response.data)
    }).catch(error => {
      console.log(error)
      alert(error.data)
    })

}

export function shortenURL(url, config, setUserURLS, setURLToShort){
  
  axios.post(API_URL('/urls/shorten'), url, config)
  .then(() => {
    getUserURLS(config, setUserURLS)
    
  })
  .catch(() => {
    alert("URL Inválida")
  })
 
  toast("Default Notification !");
}


export function openShortURL(shortURL, url, config, setURLS){
  console.log(API_URL(`/urls/open/${shortURL}`))
  axios.get(API_URL(`/urls/open/${shortURL}`), config).then(() => {
    getUserURLS(config, setURLS)
   
    
  })
  .catch(error => {
      alert(error.data)
    })
}

export function deleteShortURL(shortURLid, config, setURLS){
 let isConfirm = window.confirm('Você deseja excluir essa URL? ')
  if(isConfirm){
    axios.delete(API_URL(`/urls/${shortURLid}`))
    .then( () => {
     
      getUserURLS(config, setURLS)
    })
    .catch(error => {
      alert(error.data)
    })
  }
 
}



export function listRanking(setRanking){
  axios.get(API_URL('/ranking')).then(response => {
    setRanking(response.data)
  }).catch(error => {
    alert(error.data)
  })
}