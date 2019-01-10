import React from 'react';
import {Row, Col} from 'antd';
import FormAlert from './../common/FormAlert';

const RegisterErrorContainer = ({message, description, type}) => {
    return(
        <div>
            <Row
                className='alert-container'>
                <Col span={8} offset={8}>
                    <FormAlert 
                        message={message}
                        description={description}
                        type={type}/>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterErrorContainer;