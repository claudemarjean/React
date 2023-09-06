import React, {useEffect, useState} from 'react'
import { Stepper } from 'react-form-stepper';

const Levels = ({levelNames, quizLevel}) => {

  const[levels, setLevels]  = useState([]);

  useEffect(()=>{
   const quizSteps = levelNames.map(level => ({label: level.toUpperCase()}));
   
   setLevels(quizSteps)
  },[levelNames])
  
  return (
    <div className='levelsContainer' style={{background: 'transparent'}}>
        <Stepper
          steps={levels }
          activeStep={quizLevel}
          circleTop={0}
          completedBgColor={'#a10308'}
          activeTextColor={'#d31017'}
          completedTextColor={'#E0E0E0'}
          size={50}
          style={{ width: '100%', height: '100%' }}
        />
    </div>
  )
}

export default React.memo(Levels)