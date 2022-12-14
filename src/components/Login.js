import { useNavigate, Link } from "react-router-dom"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"
import { useState, useContext } from "react"
import userContext from "../contexts/userContext"
import * as api from "../services/auth"
import shortlyLoader from "../assets/images/Shortly_Loader.svg"

export default function Login(){
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })
    const {setUser} = useContext(userContext)
    const [loginProcess, setLoginProcess] = useState(false)

     async function handleSubmit(e){
        e.preventDefault()
        
        const {email, password} = userData
        try {
            
            const response = await api.sendLogin(email, password)
            setUser(response)
            setLoginProcess(true)
            setTimeout(() => {
                navigate("/home")
            }, 1000)

        } catch (error) {
            alert(error.data)
        }
    }

    return (
        <>
            <TopBar justify={'flex-end'}>
                    <ul>
                        <Link to="/">
                            <li>Início</li>
                        </Link>
                        <Link to="/register">
                            <li>Cadastrar-se</li>
                        </Link>
                        
                    </ul>
            </TopBar>
            
           
            {loginProcess ? <img src={shortlyLoader}/> : 
            
            <form className="Container Form" onSubmit={handleSubmit}>
            <Input placeholder={'Email'} type={'email'} onChange={(e) => setUserData({...userData, email: e.target.value})}  />
            <Input placeholder={'Senha'} type={'password'} onChange={(e) => setUserData({...userData, password: e.target.value})} />
            <Button label={'Entrar'} /> 
            </form>
            }
           
        </>
    )
}



