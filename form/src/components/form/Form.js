import React, {useState} from 'react';
import './Form.css';

//Form functional component
const Form = (props) => {
    //Initialize and save the state of each vaariable
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Function to prevent default behaviour for each submit, to create an object for each user and to reset vars to init. state
    const createUser = (e) => {

        // e.preventDefault();
        
        const newUser = {firstName, lastName, email, password, confirmPassword};

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return(
        <div>
                    <form className='First-form' onSubmit={createUser}>
            <div className='Input-format'>
                <label className='Label'>First Name
                    <input className = 'Input' type = "text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)} />
                </label>
            </div>
            <div className='Input-format'>
                <label className='Label'>Last Name
                    <input className = 'Input' type = "text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
                </label>
            </div>
            <div className='Input-format'>
                <label className='Label'>Email
                    <input className = 'Input' type = "email" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                </label>
            </div>
            <div className='Input-format'>
                <label className='Label'>Password
                    <input className = 'Input' type = "password" value={password} onChange = {(e)=>setPassword(e.target.value)}/>
                </label>
            </div>
            <div className='Input-format'>
                <label className='Label'>Confirm Password
                    <input className = 'Input' type = "password" value={confirmPassword} onChange = {(e)=>setConfirmPassword(e.target.value)}/>
                </label>
            </div>
        </form>
        <div>
            <p className='Intro'>Your Form Data</p>
            <div className='Display-info'>
            <div>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Password</p>
                <p>Confirm Password</p>
            </div>
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confirmPassword}</p>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Form;