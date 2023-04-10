import { useEffect } from "react"

const Message = () => {

    useEffect(() => {
        const onMouseMove = ({ x,y }) => {
            const coords = { x,y };
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove);

        console.log('message Mounted');

        return () => {
            console.log('message Unounted');
            window.removeEventListener('mousemove',onMouseMove);
        }

    },[])

  return (
    <>
        <h3 className="mt-2">Usuario ya existe</h3> 
    </>
  )
}

export default Message
