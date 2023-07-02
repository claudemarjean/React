import React,{useState, useEffect} from 'react'

function FunctionDisplayKey() {

    const [keycode, setKeyCode]= useState('');

    const handleKeyCode = e=>{
        setKeyCode(e.code);
        console.log('addEventListener activé');
    }

    useEffect(()=>{
        document.addEventListener('keyup', handleKeyCode);
        return ()=>{
            console.log('addEventListener retiré');
            document.removeEventListener('keyup',handleKeyCode);
        }
    },[])

  return (
    <div className='card'>
        <div className='card-body'>
            <h1 className='text-center'>{keycode}</h1>
        </div>
      </div>
  )
}

export default FunctionDisplayKey