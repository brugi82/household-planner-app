import React, {Component} from 'react';
import {Input, Icon} from 'antd';

class PasswordInput extends Component {
    render(){
        let prefix;
        if(this.props.icon){
            prefix = <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
        }

        return(
            <Input prefix={prefix} type="password" 
                name={this.props.name}
                placeholder={this.props.placeholder} 
                value={this.props.value}
                onChange={this.props.onChange}/>
        );
    }

}

export default PasswordInput;