import React from 'react';
import { Spin } from 'antd';

const LoadingIndicator = ({text}) => {
    return (
        <div>
            <Spin size='large'/>
            <h2>
                {text}
            </h2>
        </div>
    );
}

export default LoadingIndicator;