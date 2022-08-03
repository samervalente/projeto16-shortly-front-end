import { useNavigate, Link } from "react-router-dom"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"
import { useState } from "react"

export default function Login(){

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        navigate('/register')
        
    }

    return (
        <>
            <TopBar>
                <Link to="/register">
                    <div>Cadastrar-se</div>
                </Link>
            </TopBar>
            <form className="Container" onSubmit={() => handleSubmit}>
                <Input placeholder={'Email'}  />
                <Input placeholder={'Senha'} />
                <Button label={'Entrar'} />
            </form>
        </>
    )
}



