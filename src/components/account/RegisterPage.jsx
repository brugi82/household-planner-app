import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as registrationActions from '../../actions/registrationActions';
import {bindActionCreators} from 'redux';

class RegisterPage extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            userInfo: Object.assign({}, props.userInfo),
            processing: props.processing,
            error: props.error
        }

        this.updateUserState = this.updateUserState.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        if(this.props.userInfo.username !== nextProps.userInfo.username){
            this.setState({user: Object.assign({}, nextProps.userInfo)});
        }
    }

    updateUserState = (event) => {
        const field = event.target.name;
        let userInfo = this.state.userInfo;
        userInfo[field] = event.target.value;

        return this.setState({userInfo: userInfo});
    }

    registerUser = (event) => {
        event.preventDefault();

        this.props.actions.registerUser(this.state.userInfo);
    }

    render(){
        return(
            <RegisterForm 
                updateUserState={this.updateUserState}
                registerUser={this.registerUser}
                userInfo={this.state.userInfo}
                error={this.state.error}
                processing={this.state.processing}/>
        )
    }
}

const mapStateToProps = (state) => {
    let userInfo = {username: '', firstName: '', lastName: '', password: ''};
    if(state.registrationRequest.userInfo){
        userInfo = state.registrationRequest.userInfo;
    }
console.log('process: ' + state.registrationRequest.processing);
    return {
        userInfo: userInfo,
        processing: state.registrationRequest.processing,
        error: state.registrationRequest.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(registrationActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));