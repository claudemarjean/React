import React from 'react';
import phone from '../images/phone.png'

const taillePhone={
    width: '50px'
}

function PhoneComponent(){
    return (
        <div className='container'>
            <img src={phone} alt="phone" style={taillePhone}/>
            <p>
                Disponibilité:
                <span id='count'></span>
            </p>
            <button>Acheter</button>
        </div>
    )
}

export default PhoneComponent;