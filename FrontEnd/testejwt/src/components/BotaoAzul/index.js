import React from "react";
import {Botao} from "./style"

export default function BotaoAzul (props)
{
    return(
        <Botao to={props.Link}>
            {props.children}
        </Botao>
    )
}
