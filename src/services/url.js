
import axios from "axios"

const API_URL = function (endpoint){
  return `https://projeto-16-shortly-back.herokuapp.com${endpoint}`
}

export function getUserURLS(config, setURLS){
  axios.get(API_URL('/users/me'), config).then(response => {
      setURLS(response.data)
    }).catch(error => {
      console.log(error)
      alert(error.data)
    })

}

export function shortenURL(url, config, setURLS){

  axios.post(API_URL('/urls/shorten'), url, config)
  .then(() => {
    getUserURLS(config, setURLS)
  })
  .catch(() => {
    alert("URL Inválida")
  })
}

export function openShortURL(shortURL, config){
  console.log(API_URL(`/urls/open/${shortURL}`))
  axios.get(API_URL(`/urls/open/${shortURL}`), config).then(() => {
    window.open()
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