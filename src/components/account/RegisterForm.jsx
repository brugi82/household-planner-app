import React, {Component} from 'react';
import TextInput from './../common/TextInput';
import PasswordInput from './../common/PasswordInput';
import {Button, Form} from 'antd';
import { render } from 'react-dom';

class RegisterForm extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 8}
        }

        const buttonItemLayout = {
            wrapperCol: {span: 8, offset: 8}
        }

        return(
            <Form>
                <Form.Item label="Email" {...formItemLayout}>
                    <TextInput placeholder="Please enter your email address" value=""/>
                </Form.Item>
                <Form.Item label="First name" {...formItemLayout}>
                    <TextInput placeholder="Your first name" value=""/>
                </Form.Item>
                <Form.Item label="Last name" {...formItemLayout}>
                    <TextInput placeholder="Your last name" value=""/>
                </Form.Item>
                <Form.Item label="Password" {...formItemLayout}>
                    <TextInput placeholder="Password" value=""/>
                </Form.Item>
                <Form.Item label="Confirm password" {...formItemLayout}>
                    <TextInput placeholder="Confirm password" value=""/>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    
}

export default RegisterForm;