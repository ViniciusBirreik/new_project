import SidebarItem from "../sidebarItem";
import { Container, Content} from "./style";
import { FaHome, FaAngry, FaTimes } from "react-icons/fa";

export default function Sidebar({ active }) {
    
    function CloseSidebar() {
        active(false)
    }
    
    return (
        <>
            <Container sidebar={active}>
                <FaTimes onClick={CloseSidebar}/>
                <Content>
                    <SidebarItem Icon={FaHome} Text={'Home'}/>
                    <SidebarItem Icon={FaAngry} Text={'Angry'}/>
                </Content>
            </Container>
        </>
    )
}