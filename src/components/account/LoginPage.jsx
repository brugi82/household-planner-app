import React, {Component} from 'react';
import LoginForm from './LoginForm';

class LoginPage extends Component {
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <LoginForm/>
        )
    }
}

export default LoginPage;
