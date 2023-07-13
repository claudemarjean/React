import React,{useState, useRef, useEffect} from 'react';
import Content from './Content';

function Box() {

    const[height, setHeight] = useState(80);
    const boxRef = useRef(null);

    useEffect(()=>{
        if(boxRef.current.offsetHeight < 150){
            setHeight(height + 100);
        }
    },[height])
    
    const boxStyle = {
        width: '400px',
        height:`${height}px`,
        margin: '0 auto',
        background: height > 100 ? 'red' : 'blue'

    }
  return (
    <div ref={boxRef} style={boxStyle}>
        {`Height: ${height}`}
        <Content/>
    </div>
  )
}

export default Box