import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginForm from './LoginForm';
import RegisterErrorContainer from './RegisterErrorContainer';
import * as accountActions from '../../actions/accountActions';

class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            loginInfo: {},
            loading: false,
            error: null
        }

        this.updateLoginInfo = this.updateLoginInfo.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        
        console.log('Login page, cwr props...');
        this.setState({loading: nextProps.loading, error:{...nextProps.loginError}});
    }

    updateLoginInfo = (event) => {
        console.log('Event: ' + event);
        console.log('Event target: ' + event.target);
        console.log('Event target name: ' + event.target.name);
        const field = event.target.name;
        let loginInfo = this.state.loginInfo;
        loginInfo[field] = event.target.value;

        return this.setState({loginInfo: loginInfo});
    }

    loginUser = () => {
        console.log('Logging in...');

        this.props.actions.loginUser(this.state.loginInfo);
    }

    render(){
        return(
            <div>
                {this.props.error && <RegisterErrorContainer
                        type='error'
                        message={this.props.error.message}
                        description={this.props.error.description}/>}
                
                <LoginForm
                    loginInfo={this.state.loginInfo}
                    loading={this.state.loading}
                    updateLoginInfo={this.updateLoginInfo}
                    loginUser={this.loginUser}/>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    let error = null;
    if(state.account.loginError){
        error = {...state.account.loginError};
    }

    return {
        loading: state.account.loading,
        error: error,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
