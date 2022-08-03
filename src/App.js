import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import HomeLogged from "./components/HomeLogged"

export default function App(){
    return (
        <>
      
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<HomeLogged />} />
            </Routes>
        </BrowserRouter>
            
        </>
    )
}