import { Container } from "./style";
import { NavLink } from "react-router-dom";

export default function SidebarItem({Icon, Text, link}) {
    return (
        <>
            <NavLink style={{textDecoration: 'none'}} to={link}>
                <Container>
                    <Icon/>
                    {Text}
                </Container>
            </NavLink>
        </>
    )
}