import { Container } from "./style";

export default function SidebarItem({Icon, Text}) {
    return (
        <>
            <Container>
                <Icon/>
                {Text}
            </Container>
        </>
    )
}