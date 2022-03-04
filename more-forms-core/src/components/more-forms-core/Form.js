import React, {useState, useRef} from 'react';
import './Form.css';


const Form = () => {
    //initialize inputs
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //initialize error msg-s
    const [fnameErrorMsg, setFnameErrorMsg] = useState("");
    const [lnameErrorMsg, setLnameErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [pwdErrorMsg, setPwdErrorMsg] = useState("");
    const [confirmpwdErrorMsg, setConfirmpwdErrorMsg] = useState("");

    //Function to be run on submit. Prevent browser behaviour, init object and make vars empty again.
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};   
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    //Functions to check validity of every input.
    const fnameCheckValidity = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2){
            setFnameErrorMsg("First Name must be at least 2 characters!");
        }
        else {setFnameErrorMsg("");}
    }
    const lnameCheckValidity = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2){
            setLnameErrorMsg("Last Name must be at least 2 characters!");
        }
        else {setLnameErrorMsg("");}
    }
    const emailCheckValidity = (e) =>{
        setEmail(e.target.value);
        if (e.target.value.length < 5){
            setEmailErrorMsg("Email must contain at least 5 characters!");
        }
        else {setEmailErrorMsg("");}
    }
    const pwdCheckValidity = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            setPwdErrorMsg("Password must contain at least 8 characters!");
        }
        else {setPwdErrorMsg("");}
    }
    const confirmpwdCheckValidity = (e) => {
        setConfirmPassword(e.target.value);        
        let prova = password.valueOf();
        if(e.target.value < 8 || e.target.value !== prova){
            setConfirmpwdErrorMsg("Be sure passwords match and the length is greater than 8!");}
            else {setConfirmpwdErrorMsg("");}
        }
        
        
        
        // else {setConfirmpwdErrorMsg("Pwd must contain at least 8 chars!");}


    return (
        <div>
            <form className='First-form' onSubmit={createUser}>
                <div className='Input-format'>
                    <label className='Label'>First Name
                        <input className = 'Input' type = "text" value={firstName} onChange = {fnameCheckValidity}/>
                    </label>
                </div>
                <div>
                    {
                        fnameErrorMsg ?
                        <p>{fnameErrorMsg}</p>:
                        ''
                    }
                </div>
                <div className='Input-format'>
                    <label className='Label'>Last Name
                        <input className = 'Input' type = "text" value={lastName} onChange = {lnameCheckValidity}/>
                    </label>
                </div>
                <div>
                    {
                        lnameErrorMsg ?
                        <p>{lnameErrorMsg}</p>:
                        ''
                    }
                </div>
                <div className='Input-format'>
                    <label className='Label'>Email
                        <input className='Input' type = "email" value = {email} onChange = {emailCheckValidity}/>
                    </label>
                </div>
                <div>
                    {
                        emailErrorMsg ?
                        <p>{emailErrorMsg}</p>:
                        ''
                    }
                </div>
                <div className='Input-format'>
                    <label className='Label'>Password
                        <input className='Input' type="password" value={password} onChange = {pwdCheckValidity}/>
                    </label>
                </div>
                <div>
                    {
                        pwdErrorMsg ?
                        <p>{pwdErrorMsg}</p>:
                        ''
                    }
                </div>
                <div className='Input-format'>
                    <label className='Label'>Confirm Password
                        <input className='Input' type="password" value={confirmPassword} onChange = {confirmpwdCheckValidity}/>
                    </label>
                </div>
                <div>
                    {
                        confirmpwdErrorMsg ?
                        <p>{confirmpwdErrorMsg}</p>:
                        ''
                    }
                </div>
                <div>
                    <input className = 'Input' type = "submit" value="SUBMIT"/>
                </div>
            </form>
        </div>
    );

}

export default Form;