import React from "react";
import Header from "../../components/header";
import * as C from "./styles";

export default function Home() {
    return(
        <>
            <Header/>
            <C.Container>
                <h1>Home</h1>
            </C.Container>
        </>
    )
}