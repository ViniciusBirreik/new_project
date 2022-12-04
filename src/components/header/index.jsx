import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Conteiner } from "./style";
import Sidebar from "../sidebar";

export default function Header() {
    const [sidebar, setSidebar] = useState(false);

    function ShowSidebar() {
        setSidebar(!sidebar)
    }
    
    return (
        <>
            <Conteiner>
                <FaBars onClick={ShowSidebar}/>
                {sidebar && <Sidebar active={setSidebar}/>}
            </Conteiner>
        </>
    )
}