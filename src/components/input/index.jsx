import * as C from "./style";

export default function Input({value, type, onChange, placeholder}) {
    return (
        <>
            <C.Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            ></C.Input>
        </>
    )
}