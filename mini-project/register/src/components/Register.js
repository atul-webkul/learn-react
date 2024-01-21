import React from 'react'
import Styled from "styled-components"

export default function Register(props) {

let btnText,passwordBox;
let btnclasses = ["btn","m-1"]
if(props.showPass === true) {
    btnText = "Hide Password";
    passwordBox = "text";
    btnclasses.push("btn-danger");
}else{
    btnText = "Show Password";
    passwordBox = "password";
    btnclasses.push("btn-success");
}

const StyledButton = Styled.button`
display:${props => props.flag ? "inline-block" : "block"};
padding:10px 5px;
margin:10px;
background-color:${props => props.color};
border:none;
width:${props => props.flag ? "45%" : "100%" };
`;
    return (
        <div className='container card p-3 mt-2 register-container'>
            <h1 className="text-center">Register Form</h1>
            <form onSubmit={props.submit}>
                <div className='form-group' >
                    <label htmlFor="name" >Name</label>
                    <input type='text' name="name" className='form-control' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor={passwordBox}>Password</label>
                    <input type={passwordBox} name="password" className="form-control" />
                </div>
                <button type="submit" className='btn btn-primary m-1'>Submit</button>
                <button type="button" className={btnclasses.join(" ")} onClick={props.click}>{btnText}</button>
                <br />
                <StyledButton type='button' color="orange" flag="1">Log-In</StyledButton>
                <StyledButton type='button' color="green" flag="1">Log-In with Google</StyledButton>
                <StyledButton type='button' color="blue" flag="0">Log-In with Facebook</StyledButton>
            </form>
        </div>
    )
}
