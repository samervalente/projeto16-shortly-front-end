
import { Link } from "react-router-dom"
import TopBar from "../shared/TopBar"
import Input from "../shared/Input"
import Button from "../shared/Button"


export default function Register(){
    return (
        <>
             <TopBar>
             <Link to="/">
                <div className="entry">Entrar</div>
            </Link>
               
            </TopBar>
            <form className="Container">
                <Input placeholder={'Nome'}  />
                <Input placeholder={'Email'}  />
                <Input placeholder={'Senha'} />
                <Input placeholder={'Confirmar senha'} />
                <Button label={'Cadastrar'} />
            </form>
        </>
    )
}