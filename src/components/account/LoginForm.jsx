import React, {Component} from 'react';
import TextInput from './../common/TextInput';
import PasswordInput from './../common/PasswordInput';
import {Button, Form} from 'antd';
import {Link} from 'react-router-dom';

class LoginForm extends Component{
    state = {
        confirmDirty: false,
        valid: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                
                this.props.loginUser();
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        return(
            <div className="login-form-container">
                <h2>Enter your credentials</h2>
                <Form 
                    className="login-form"
                    onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            validateTrigger: 'onChange', //Antdesign has a current issue with onBlur trigger...
                            rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                            required: true, message: 'Please enter your E-mail!',
                            }],
                        })(
                            <TextInput placeholder="Email"
                                name="username"
                                onChange={this.props.updateLoginInfo}
                                icon="user"/>//TODO: update on change handler
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please enter your password!',
                            }],
                        })(
                            <PasswordInput placeholder="Password" 
                                name="password"
                                onChange={this.props.updateLoginInfo}
                                icon="true"/>//TODO: update on change handler
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                            loading={this.props.loading}>
                            Log in
                        </Button>
                        Or <Link to="/register">register now!</Link>
                    </Form.Item>
                </Form>
            </div> 
        );
    }
}

export default Form.create()(LoginForm);

