import * as C from "./style";

export default function Button({Text, onClick, Type= "button"}) {
    return (
        <>
            <C.Button 
                onClick={onClick} type={Type}>
                {Text}
            </C.Button>
        </>
    )
}