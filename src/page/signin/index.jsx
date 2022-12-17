import { useState } from "react";

import Header from "../../components/header";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./style";

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    return (
        <>
            <Header/>
            <C.Container>
                <h1>Login</h1>
                <Input 
                    type='email' 
                    placeholder='e-mail' 
                    value={email} 
                    onChange={(e) => [setEmail(e.target.value), setError('')]}>
                </Input>
                <Input 
                    type='passowrd' 
                    placeholder='password' 
                    value={password} 
                    onChange={(e) => [setPassword(e.target.value), setError('')]}>
                </Input>
                <label>{error}</label>
                <Button Text={'login'}></Button>
            </C.Container>
        </>
    )
}