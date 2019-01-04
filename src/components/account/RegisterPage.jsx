import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as accountActions from './../../actions/accountActions';
import {bindActionCreators} from 'redux';

class RegisterPage extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            user: Object.assign({}, props.user),
            loading: props.loading,
            error: props.error
        }

        this.updateUserState = this.updateUserState.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('Nextprops loading is ' + nextProps.loading);
        if(this.props.user.username !== nextProps.user.username){
            this.setState({user: Object.assign({}, nextProps.user)});
        }
    }

    updateUserState = (event) => {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;

        return this.setState({user: user});
    }

    registerUser = (event) => {
        event.preventDefault();

        this.props.actions.registerUser(this.state.user);
    }

    render(){
        return(
            <RegisterForm 
                updateUserState={this.updateUserState}
                registerUser={this.registerUser}
                user={this.state.user}
                error={this.state.error}
                loading={this.state.loading}/>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State is ' + state);
    let newUser = {username: '', firstName: '', lastName: '', password: ''};
    if(state.account.user){
        newUser = state.account.user;
    }
    
    //console.log('State username is ' + state.user.username);
    console.log('State loading is ' + state.account.loading);
    console.log('State error is ' + state.account.error);

    return {
        user: newUser,
        loading: state.account.loading,
        error: state.account.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));