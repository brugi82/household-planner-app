import React, {FunctionComponent} from 'react';
import TextInput from './../common/TextInput';
import PasswordInput from './../common/PasswordInput';
import {Button, Form} from 'antd';


const LoginForm = (props) => {
    return (
        <div className="login-form-container">
            <Form className="login-form">
                <Form.Item>
                    <TextInput placeholder="Username" icon="user" value=""/>
                </Form.Item>
                <Form.Item>
                    <PasswordInput placeholder="Password" icon="true"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>

    );
}

export default LoginForm;

