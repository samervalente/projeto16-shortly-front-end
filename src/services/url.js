
import axios from "axios"

export function getUserURLS(config, setURLS){
  axios.get("https://projeto-16-shortly-back.herokuapp.com/users/me", config).then(response => {
      setURLS(response.data)
    }).catch(error => {
      console.log(error)
      alert(error.data)
    })

}

export function shortenURL(url, config, setURLS){
  console.log(url)
  axios.post("https://projeto-16-shortly-back.herokuapp.com/urls/shorten",url, config)
  .then(() => {
    getUserURLS(config, setURLS)
  })
  .catch(() => {
    alert("URL Inválida")
  })
}

export function openShortURL(shortURL, config){
  
  axios.get(`https://projeto-16-shortly-back.herokuapp.com/urls/open/${shortURL}`).then(() => {
    console.log("ok")
  })
  .catch(error => {
    console.log(error)
      alert(error.data)
    })
}

export function deleteShortURL(shortURLid, config, setURLS){
 let isConfirm = window.confirm('Você deseja excluir essa URL? ')
  if(isConfirm){
    axios.delete(`https://projeto-16-shortly-back.herokuapp.com/urls/${shortURLid}`)
    .then( () => {
      getUserURLS(config, setURLS)
    })
    .catch(error => {
      alert(error.data)
    })
  }
}

export function listRanking(setRanking){
  axios.get("https://projeto-16-shortly-back.herokuapp.com/ranking").then(response => {
    setRanking(response.data)
  }).catch(error => {
    alert(error.data)
  })
}