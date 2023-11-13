import React from 'react';
import phone from '../images/phone.png';
import {connect} from 'react-redux';

const taillePhone={
    width: '40%  '
}

function PhoneComponent(props){
    return (
        <div className='container'>
            <img src={phone} alt="phone" style={taillePhone}/>
            <p>
                Disponibilité:
                <span id='count'>{props.phones}</span>
            </p>
            <button>Acheter</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        phones: state.phones
    }
}

export default connect(mapStateToProps)(PhoneComponent);