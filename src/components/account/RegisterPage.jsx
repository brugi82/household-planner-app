import React, {Component} from 'react';
import RegisterForm from './RegisterForm';

class RegisterPage extends Component{
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <RegisterForm/>
        )
    }
}

export default RegisterPage;