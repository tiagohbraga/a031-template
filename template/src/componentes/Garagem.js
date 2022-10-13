import React from "react"
import { Carros } from "./Carros"
import { Footer } from "./Footer"


export default function Garagem() {
    const nome = "Tiago"
    return (
        <>

        <h1>Garagem de {nome}</h1>
        
        <Carros/>
        <Carros/>
        <Carros/>
        <Carros/>
       
        </>
    )
    
}