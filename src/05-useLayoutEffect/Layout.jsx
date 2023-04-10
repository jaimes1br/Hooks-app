
import { ErrorQuote, LoadingQuote, Quote } from "../03-examples";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
    const { counter, handleAdd, handleSub } = useCounter(1);
    const url = `https://rickandmortyapi.com/api/character/${counter}`;
    
    const { data, isLoading, hasError } = useFetch(url);
    const { name = '', image = '' ,species =  ''} = !!data && data; 
    
    return (
        <>
            <h1>Rick and Morty characters</h1>
            <hr />

            {
                isLoading 
                    ? <LoadingQuote/>
                    : <Quote name={name} image={image} species={species}/>
            }

            {
                (!data && !!hasError) && <ErrorQuote errorMessage={hasError}/>
            }
            <button 
                className="btn btn-dark"
                disabled={ isLoading || counter === 1 } 
                onClick={ () => handleSub() }>
                    Prev character
            </button> 

            <button 
                className="btn btn-dark"
                disabled={ isLoading } 
                onClick={ () => handleAdd() }>
                    Next character
            </button> 
        </>
  )
}

