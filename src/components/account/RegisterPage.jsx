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

function mapStateToProps(state, ownProps){
    let newUser = {username: '', firstName: '', lastName: '', password: ''};
    if(state.user){
        newUser = state.user;
    }
    
    return {
        user: newUser,
        loading: state.loading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));