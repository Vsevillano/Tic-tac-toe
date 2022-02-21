import React from 'react'

export const Casilla = ({value, onClick}) => {
    return (
        <div className="casilla" onClick={onClick}>
            {value}
        </div>
    )
}
