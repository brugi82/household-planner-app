import React from 'react';
import {Alert} from 'antd';

const FormAlert = ({message, description, type}) => {
    return (
        <Alert 
            message={message}
            description={description}
            type={type}
            closable 
            showIcon/>
    );
}

export default FormAlert;