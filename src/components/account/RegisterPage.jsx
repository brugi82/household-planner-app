import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as accountActions from '../../actions/accountActions';
import {bindActionCreators} from 'redux';
import RegisterErrorContainer from './RegisterErrorContainer';

class RegisterPage extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            userInfo: {},
            processing: false,
            error: null
        }

        this.updateUserState = this.updateUserState.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('Will receiveProps...');

        this.setState({processing: nextProps.processing, error: {...nextProps.registrationError}});
    }

    updateUserState = (event) => {
        console.log('Event: ' + event);
        console.log('Event target: ' + event.target);
        console.log('Event target name: ' + event.target.name);
        const field = event.target.name;
        let userInfo = this.state.userInfo;
        userInfo[field] = event.target.value;

        return this.setState({userInfo: userInfo});
    }

    registerUser = () => {
        console.log('Starting user registration...');

        this.props.actions.registerUser(this.state.userInfo);
    }

    render(){
        return(
            <div>
                {this.props.error && <RegisterErrorContainer
                                        type='error'
                                        message={this.props.error.message}
                                        description={this.props.error.description}/>}
                <RegisterForm 
                    updateUserState={this.updateUserState}
                    registerUser={this.registerUser}
                    userInfo={this.state.userInfo}
                    error={this.state.error}
                    processing={this.state.processing}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    let error = null;
    if(state.account.registrationError){
        error = {...state.account.registrationError};
    }

    return {
        processing: state.account.loading,
        error: error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));