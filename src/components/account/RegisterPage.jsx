import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as registrationActions from '../../actions/registrationActions';
import {bindActionCreators} from 'redux';
import RegisterErrorContainer from './RegisterErrorContainer';

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
        console.log('Will receiveProps...');
        if(this.props.userInfo.username !== nextProps.userInfo.username){
            this.setState({userInfo: Object.assign({}, nextProps.userInfo)});
        }

        this.setState({processing: nextProps.processing, error: Object.assign({}, nextProps.error)});
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
    let userInfo = {username: '', firstName: '', lastName: '', password: ''};
    if(state.registrationRequest.userInfo){
        userInfo = state.registrationRequest.userInfo;
    }
    
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