import React, {Component} from 'react';
import TextInput from './../common/TextInput';
import PasswordInput from './../common/PasswordInput';
import {Button,Form} from 'antd';

class RegisterForm extends Component {
    state = {
        confirmDirty: false,
        valid: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log('This is reg user: ' + this.props.registerUser);
                this.props.registerUser();
            }
        });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Password and Confirm password do not match!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {
                force: true
            });
        }
        callback();
    }

    validatePasswordComplexity = (rule, value, callback) => {
        // Disable temporarily for ease of testing
        //
        // if(value){
        //     if(value.length < 8){
        //         callback('Password needs to be at least 8 characters long.');
        //     }
        //     if(/[A-Z]/.test(value) === false){
        //         callback('Password needs to contain at least one upper case character.')
        //     }
        //     if(/\d/.test(value) === false){
        //         callback('Password needs to contain at least one number character.')
        //     }
        // }

        callback();
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 8
            }
        }

        const buttonItemLayout = {
            wrapperCol: {
                span: 8,
                offset: 8
            }
        }

        return ( 
            <div className="register-form-container" >
                <h2>
                    Register new account
                </h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="Email" {...formItemLayout}>
                        {getFieldDecorator('email', {
                            validateTrigger: 'onChange', //Antdesign has a current issue with onBlur trigger...
                            rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                            required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <TextInput placeholder="Please enter your email address"
                                name="username"
                                onChange={this.props.updateUserState}/>
                        )}
                    </Form.Item>
                    <Form.Item label="First name" {...formItemLayout}>
                        {getFieldDecorator('firstName', {
                            rules: [{ required: true, message: 'Please input your nickname!' }],
                        })(
                            <TextInput placeholder="Your first name" 
                                name="firstName"
                                onChange={this.props.updateUserState}/>
                        )}
                    </Form.Item>
                    <Form.Item label="Last name" {...formItemLayout}>
                        {getFieldDecorator('lastName', {})(
                            <TextInput placeholder="Your last name" 
                                name="lastName"
                                onChange={this.props.updateUserState}/>
                        )}

                    </Form.Item>
                    <Form.Item label="Password" {...formItemLayout}>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.validateToNextPassword,
                            }, {
                                validator: this.validatePasswordComplexity
                            }],
                        })(
                            <PasswordInput placeholder="Password" 
                                name="password"
                                onChange={this.props.updateUserState}/>
                        )}
                    </Form.Item>
                    <Form.Item label="Confirm password" {...formItemLayout}>
                        {getFieldDecorator('confirm', {
                            rules: [{
                            required: true, message: 'Please confirm your password!',
                            }, {
                            validator: this.compareToFirstPassword,
                            }],
                        })(
                            <PasswordInput placeholder="Confirm password" onBlur={this.handleConfirmBlur}/>
                        )}
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit" className="login-form-button" 
                            loading={this.props.processing}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create()(RegisterForm);