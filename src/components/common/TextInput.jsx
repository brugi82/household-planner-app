import React, {Component} from 'react';
import {Input, Icon} from 'antd';

class TextInput extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let prefix;
        if(this.props.icon){
            prefix = <Icon type={this.props.icon} style={{ color: 'rgba(0,0,0,.25)' }}/>
        }

        return(
            <Input prefix={prefix} 
                name={this.props.name}
                placeholder={this.props.placeholder} 
                value={this.props.value}
                onChange={this.props.onChange}/>
        );
    }
}

export default TextInput;