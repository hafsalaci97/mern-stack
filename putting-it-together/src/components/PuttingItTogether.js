import React, { useState } from 'react';
import './PuttingItTogether.css';
const PuttingItTogether = (props) => {

    const [userAge, setUserAge] = useState(props.age);
    return(
    <div>
        <h1 id='First-h1'>{props.firstName}, {props.lastName}</h1>
        <p className='First-p'>Age: {userAge}</p>
        <p className='First-p'>Hair Color: {props.hairColor}</p>
        <button id='btn' onClick = {(event) => setUserAge ( userAge +1)}>Birthday Button for {props.lastName} {props.firstName}</button>
    </div>
    );
}

export default PuttingItTogether;