import React,{useState} from 'react';
import phone from '../images/phone.png';
import {connect} from 'react-redux';
import { buyPhone } from '../redux/phone/actionPhone';

const taillePhone={
    width: '40%  '
}

const inlineElement = {
    display: 'flex'
}

function PhoneContainer(props){

    const[totalPhone, setTotalPhone] =  useState(1)

    return (
        <div className='container'>
            <img src={phone} alt="phone" style={taillePhone}/>
            <p>
                Disponibilité:
                <span id='count'>{props.phones}</span>
            </p>
            <div className='btnContainer' style={inlineElement}>
                <button onClick={() => props.buyPhone(totalPhone)}>Acheter</button>
                <input type='text' value={totalPhone} onChange={e => setTotalPhone(e.target.value)}/>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        phones: state.phone.phones
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyPhone: totalPhone => dispatch(buyPhone(totalPhone))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhoneContainer);






// import React from 'react';
// import phone from '../images/phone.png';
// import {useSelector,useDispatch} from 'react-redux';
// import { buyPhone } from '../redux/phone/actionPhone';

// const taillePhone={
//     width: '40%  '
// }

// function PhoneComponent(){

//     const phones = useSelector(state => state.phones);
//     const dispatch = useDispatch();

//     return (
//         <div className='container'>
//             <img src={phone} alt="phone" style={taillePhone}/>
//             <p>
//                 Disponibilité:
//                 <span id='count'>{phones}</span>
//             </p>
//             <button onClick={()=>dispatch(buyPhone())}>Acheter</button>
//         </div>
//     )
// }

// export default PhoneComponent;