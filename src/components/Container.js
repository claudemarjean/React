import Reactn,{useState} from 'react';
import ClassDisplayKey from './ClassDisplayKey';
import FunctionDisplayKey from './FunctionDisplayKey';

function Container() {

    const[show, setShow] = useState(true);
    const btnDisplay = show ? 'cacher' : 'Afficher';

  return (
    <div className='text-center'>
        <button className='btn btn-primary m-3' onClick={()=>setShow(!show)}>{btnDisplay}</button>
        {
            show && <FunctionDisplayKey/>
        }
    </div>
  )
}

export default Container