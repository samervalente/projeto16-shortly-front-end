import { useNavigate, Link } from "react-router-dom"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"
import * as api from "../services/auth"
import { useState, useContext } from "react"
import userContext from "../contexts/userContext"
import axios from "axios"

axios.defaults.withCredentials = false
export default function Login(){
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })
    const {setUser} = useContext(userContext)
    

    function handleSubmit(e){
        e.preventDefault()

        axios.post("https://projeto-16-shortly-back.herokuapp.com/signin", userData).then(response => {
            setUser(response.data)
            navigate('/home')
          }).catch(error => {
            console.log(error)
            alert(error.response.data)
          }) 
        
    }

    return (
        <>
            <TopBar justify={'flex-end'}>
                    <ul>
                        <Link to="/register">
                            <li>Cadastrar-se</li>
                        </Link>
                    </ul>
            </TopBar>
            
            <form className="Container Form" onSubmit={handleSubmit}>
                <Input placeholder={'Email'} type={'email'} onChange={(e) => setUserData({...userData, email: e.target.value})}  />
                <Input placeholder={'Senha'} type={'password'} onChange={(e) => setUserData({...userData, password: e.target.value})} />
                <Button label={'Entrar'} />
            </form>
        </>
    )
}



