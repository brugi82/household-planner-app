import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as accountActions from './../../actions/accountActions';
import {bindActionCreators} from 'redux';

class RegisterPage extends Component{
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <RegisterForm />
        )
    }
}

function mapStateToProps(state, ownProps){
    let user = {email: '', firstName: '', lastName: '', password: '', confirmPassword: ''};
    if(state.user){
        user = state.user;
    }
    
    return {
        user: user,
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));