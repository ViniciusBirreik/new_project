import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./page/home";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}