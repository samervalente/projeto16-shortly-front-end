import { useNavigate, Link } from "react-router-dom"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"
import * as api from "../services/auth"
import { useState } from "react"

export default function Login(){
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()


        const {email, password} = userData

        api.sendLogin(email, password)
        .then(() => {
            navigate("/home")
        }).catch(error => {
            alert(error.data)
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



