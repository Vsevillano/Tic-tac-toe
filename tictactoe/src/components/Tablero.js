import React, { useState } from 'react';

import { Casilla } from './Casilla';


export const Tablero = () => {

    const [casillas, setCasillas] = useState(Array(9).fill(null));

    const [isX, setIsX] = useState(true);


    const handleClick = (i) => {
        if (calcularGanador(casillas) || casillas[i]) {
            return;
        }

        casillas[i] = isX ? 'X' : '0';
        setCasillas(casillas);
        setIsX(!isX);
    }

    const ganador = calcularGanador(casillas);

    let estado;
    if (ganador) {
        estado = `Ganador: ${ganador}`;
    }

    else {
        estado = `Turno de ${isX ? 'X':'0'}`;
    }

    return (
        <>
        <div className="estado"><h2>{estado}</h2></div>
        <div className="tablero">                    
            <Casilla value={casillas[0]} onClick={ () => handleClick(0)}/>
            <Casilla value={casillas[1]} onClick={ () => handleClick(1)}/>
            <Casilla value={casillas[2]} onClick={ () => handleClick(2)}/>        
            <Casilla value={casillas[3]} onClick={ () => handleClick(3)}/>
            <Casilla value={casillas[4]} onClick={ () => handleClick(4)}/>
            <Casilla value={casillas[5]} onClick={ () => handleClick(5)}/>        
            <Casilla value={casillas[6]} onClick={ () => handleClick(6)}/>
            <Casilla value={casillas[7]} onClick={ () => handleClick(7)}/>
            <Casilla value={casillas[8]} onClick={ () => handleClick(8)}/>                       
        </div>
        </>
    )
}




function calcularGanador(casillas, isX) {
    const  patronesGanadores = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ] 

    for (let i = 0; i < patronesGanadores.length; i++) {
        const [a, b, c] = patronesGanadores[i];
        if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
            
            const date = Date.now();
            
            // Guardamos los datos
            const newPerson = { 
                name: casillas[a],
                position: "Primero",
                level: date,
               };
        
            fetch("https://api.alvaroserver.es/record/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newPerson),
            })
            .catch(error => {
              window.alert(error);
              return;
            });

            
            return casillas[a];
            
        }
    }
    return null;
}


