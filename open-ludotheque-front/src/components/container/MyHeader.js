/**
 * Created by fabballe on 12/05/17.
 */
import { connect } from 'react-redux'
import Header from '../presentational/zoning/Header.js'

import {logoutUser} from '../../actions/login.js'

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.user.isAuthenticated
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(logoutUser());
        }
    }
};

const MyHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default MyHeader;
