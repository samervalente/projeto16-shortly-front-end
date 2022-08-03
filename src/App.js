import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import HomeLogged from "./components/HomeLogged"
import HomeUnlogged from "./components/HomeUnlogged"
import Ranking from "./components/Ranking"

export default function App(){
    return (
        <>
      
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<HomeUnlogged />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<HomeLogged />} />
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </BrowserRouter>
            
        </>
    )
}