import React from "react";
import {CardInfo} from "./style"

export default function Card (props) {
    return(
        <CardInfo>
            {props.children}
        </CardInfo>
    )
}