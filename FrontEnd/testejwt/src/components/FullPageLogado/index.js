import React from 'react';
import Footer from "../Footer";
import Header from "../HeaderLogado"
import {Container} from "./style"

export default function FullPageLogado (props)
{
    return(
        <>
        <Header/>
            <Container>
                {props.children}
            </Container>
        <Footer/>
        </>
    )
}