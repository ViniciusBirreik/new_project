import SidebarItem from "../sidebarItem";
import { Container, Content} from "./style";
import { FaHome, FaTimes, FaUserAlt, FaRegFileAlt } from "react-icons/fa";

export default function Sidebar({ active }) {
    
    function CloseSidebar() {
        active(false)
    }
    
    return (
        <>
            <Container sidebar={active}>
                <FaTimes style={{margin: '10px'}} onClick={CloseSidebar}/>
                <Content>
                    <SidebarItem Icon={FaHome} Text={'Home'} link={'/'} />
                    <SidebarItem Icon={FaUserAlt} Text={'Login'} link={'/login'}/>
                    <SidebarItem Icon={FaRegFileAlt} Text={'Reports'} link={'/reports'}/>
                </Content>
            </Container>
        </>
    )
}