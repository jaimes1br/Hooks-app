import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ name, image, species }) => {
    
    const nameRef = useRef();

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

    useLayoutEffect(() =>{
       
        const { width, height } = nameRef.current.getBoundingClientRect();
        setBoxSize({width,height});
    },[ name ])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <img  src={ image } alt={ name } />
                <p ref={ nameRef } className="mb-1">{ name }</p>
                <footer className="blockquote-footer">{ species }</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize)}</code>
        </>
    )
}

Quote.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
}