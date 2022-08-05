
import { useNavigate,Link } from "react-router-dom"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"
import { useState } from "react"
import *  as api from "../services/auth"

export default function Register(){
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    
    function handleSubmit (event){
        event.preventDefault()
         const {name, email, password, confirmPassword} = userData       
        if(password !== confirmPassword){
            alert("As senhas devem ser iguais.")
        }else{
            api.registerUser(name, email, password, confirmPassword).then(() => {
                navigate("/login")
            }).catch(error => {
                alert(error.data)
            })
        } 
    }

    return (
        <>
             <TopBar justify={'flex-end'} linkRoute={'/'}>
                <ul>
                    <Link to="/login">
                        <li className="entry">Entrar</li>
                    </Link>
                </ul>
          
               
            </TopBar>
            <form className="Container Form" onSubmit={handleSubmit}>
                <Input placeholder={'Nome'}  onChange={(e) => setUserData({...userData, name:e.target.value})} />
                <Input placeholder={'Email'} onChange={(e) => setUserData({...userData, email:e.target.value})}  />
                <Input placeholder={'Senha'} onChange={(e) => setUserData({...userData, password:e.target.value})}/>
                <Input placeholder={'Confirmar senha'} onChange={(e) => setUserData({...userData, confirmPassword:e.target.value})} />
                <Button label={'Cadastrar'} />
            </form>
        </>
    )
}