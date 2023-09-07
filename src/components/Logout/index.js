import React, { useState, useEffect, useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { FirebaseContext } from '../Firebase';
import { Tooltip } from 'react-tooltip';

const Logout = () => {
  const firebase = useContext(FirebaseContext);
  const auth = getAuth(); 

  const [checked, setChecked] = useState(false);

  console.log(checked);

  useEffect(() => {
    if (checked) {
      console.log('deconnexion');
      signOut(auth);
    }
  }, [checked, auth]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className='logoutContainer' >
      <label className='switch'>
        <input onChange={handleChange} type='checkbox' checked={checked} />
        <span className='slider round' data-tip='Déconnexion'></span>
      </label>
      <Tooltip
        place="left" 
        effect="solid"
      /> 
    </div>
  );
};

export default Logout;
