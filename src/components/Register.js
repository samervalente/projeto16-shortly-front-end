
import { Link } from "react-router-dom"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"


export default function Register(){
    return (
        <>
             <TopBar justify={'flex-end'} linkRoute={'/'}>
             
                <ul>
                    <Link to="/login">
                        <li className="entry">Entrar</li>
                    </Link>
                </ul>
          
               
            </TopBar>
            <form className="Container Form">
                <Input placeholder={'Nome'}  />
                <Input placeholder={'Email'}  />
                <Input placeholder={'Senha'} />
                <Input placeholder={'Confirmar senha'} />
                <Button label={'Cadastrar'} />
            </form>
        </>
    )
}