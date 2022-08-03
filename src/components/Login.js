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
            <TopBar justify={'flex-end'}>
                    <ul>
                        <Link to="/register">
                            <li>Cadastrar-se</li>
                        </Link>
                    </ul>
            </TopBar>
            
            <form className="Container Form" onSubmit={() => handleSubmit}>
                <Input placeholder={'Email'}  />
                <Input placeholder={'Senha'} />
                <Button label={'Entrar'} />
            </form>
        </>
    )
}



