import React, {Component} from 'react';
import {Input, Icon} from 'antd';

class PasswordInput extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let prefix;
        if(this.props.icon){
            prefix = <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
        }

        return(
            <Input prefix={prefix} type="password" placeholder={this.props.placeholder} />
        );
    }

}

export default PasswordInput;