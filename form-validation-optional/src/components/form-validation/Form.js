import React, {useReducer} from "react";
import './Form.css';
//Initialize the starting state (the first input of our reducer method)
const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: ''
};
//Create the reducer function (the second input of our reducer method)
function reducer (state, action){
    return {
        ...state,
        [action.type]: action.value
    };
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) =>{
        
        const {name, value} = e.target; //in the input
        const action = {
            type: name,
            value: value
        }
        dispatch(action);
    }

    return (
        <div className="FormContainer">
            <form className="RegisterForm">
                <h1>Register Here:</h1>
                <div>
                    <input className="Input"
                        type = "text"
                        name = "fname"
                        placeholder = "Enter Name"
                        onChange = {onChange}
                    />
                </div>
                <div>
                    <input className="Input"
                        type = "text"
                        name = "lname"
                        placeholder = "Enter Last Name"
                        onChange = {onChange}
                    />
                </div>
                <div>
                    <input className="Input"
                        type = "text"
                        name = "email"
                        placeholder = "Enter Email"
                        onChange = {onChange}
                    />
                </div>
                <div>
                    <input className="Input"
                        type = "password"
                        name = "password"
                        placeholder = "Enter Password"
                        onChange = {onChange}
                    />
                </div>
                <div>
                    <input type = "submit" value = "SUBMIT" onClick={()=>{
                        
                        if(state.fname.length < 2 || state.lname.length < 2){
                            alert("The Name and Last Name must contain at least 2 characters!");
                        }else {console.log("OK");}
                        
                        if(state.password.length < 8){
                            alert("The Password must contain at least 8 characters!");
                        }else {console.log("OK");
                        }

                        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        
                        if(state.password.match(mailformat)){
                            console.log("OK");
                        }else {alert("The mail doesn't have a correct format!");
                        }
                    }}/>
                </div>
            </form>
        </div>

    );
}

export default Form;