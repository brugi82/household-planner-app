import React, {Component} from 'react';
import {connect} from 'react-redux';

class DashboardPage extends Component {
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
        user: state.user,
    }
}

export default connect(mapStateToProps)(DashboardPage);