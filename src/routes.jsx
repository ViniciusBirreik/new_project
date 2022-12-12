import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./page/home";
import Signin from "./page/signin";
import Sigup from "./page/sigup";

function Private({Item}) {
    const signed = false

    return signed > 0 ? <Item/> : <Signin/>
}
export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Private Item={<Home/>}/>} />
                <Route path="/" element={<Signin/>} />
                <Route path="/registration" element={<Sigup/>} />
                <Route path="*" element={<Signin/>} />
            </Routes>
        </BrowserRouter>
    );
}