import React, {
    Component
} from 'react';
import TextInput from './../common/TextInput';
import PasswordInput from './../common/PasswordInput';
import {
    Button,
    Form
} from 'antd';

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
            }
        });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
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

    render() {
        const {
            getFieldDecorator
        } = this.props.form;

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
                <Form>
                    <Form.Item label="Email" {...formItemLayout}>
                        <TextInput placeholder="Please enter your email address" 
                            name="username"
                            value={this.props.userInfo.username}
                            onChange={this.props.updateUserState}/>
                    </Form.Item>
                    <Form.Item label="First name" {...formItemLayout}>
                        <TextInput placeholder="Your first name" 
                            name="firstName"
                            value={this.props.userInfo.firstName}
                            onChange={this.props.updateUserState}/>
                    </Form.Item>
                    <Form.Item label="Last name" {...formItemLayout}>
                        <TextInput placeholder="Your last name" 
                            name="lastName"
                            value={this.props.userInfo.lastName}
                            onChange={this.props.updateUserState}/>
                    </Form.Item>
                    <Form.Item label="Password" {...formItemLayout}>
                        <PasswordInput placeholder="Password" 
                            name="password"
                            value={this.props.userInfo.password}
                            onChange={this.props.updateUserState}/>
                    </Form.Item>
                    <Form.Item label="Confirm password" {...formItemLayout}>
                        <PasswordInput placeholder="Confirm password" value=""/>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit" className="login-form-button" 
                            loading={this.props.processing}
                            onClick={this.props.registerUser}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create()(RegisterForm);