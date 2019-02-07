import React, {Component} from 'react';
import {connect} from 'react-redux';

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    render () {
        return(
            <div>
                <h1>
                    Welcome {this.props.user.firstName}!
                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.account.user,
    }
}

export default connect(mapStateToProps)(DashboardPage);