import { useState } from "react";

import Header from "../../components/header";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./style";

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    return (
        <>
            <Header/>
            <C.Container>
                <h1>Login</h1>
                <Input 
                    type='email' 
                    placeholder='e-mail' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>
                <Input 
                    type='passowrd' 
                    placeholder='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>
                </Input>
                <Button Text={'login'}></Button>
            </C.Container>
        </>
    )
}