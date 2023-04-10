import React from "react"

export const ShowIncrement = React.memo( ({ increment }) => {
    
    return (
        <button 
            className='btn btn-dark'
            onClick={ () => increment( 5 ) }>
                Increment
        </button>
    )
})