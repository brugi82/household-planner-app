import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import * as accountActions from '../../actions/accountActions';
import LoadingIndicator from '../common/LoadingIndicator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RegisterErrorContainer from './RegisterErrorContainer';

const ConfirmEmail = (props) => {
    useEffect(() => {
        console.log('Use effect!');
        console.log('props confirmed:' + props.confirmed);
        console.log('props loading:' + props.loading);
        if (!props.confirmed && !props.error && !props.loading) {
            props.actions.confirmEmail(props.match.params.i, props.match.params.o);
        };
    });

    return(
        <div className='center'>
            { props.loading && <LoadingIndicator text='Confirming your email...'/> }
            { props.error && <RegisterErrorContainer error={props.error}/> }
            {
                props.confirmed &&
                <div>
                    <h2>You have successfully confirmed your email!</h2>
                    <h2>
                        Please <Link to="/">log in</Link> to start using Household Planner.
                    </h2>
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('ConfirmEmail map state to props.');
    console.log('Loading:' + state.account.confirmEmail.loading);
    return {
        ...state.account.confirmEmail
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('ConfirmEmail map dispatch to props.');
    return{
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);