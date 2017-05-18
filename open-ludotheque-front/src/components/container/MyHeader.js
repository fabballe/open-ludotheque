/**
 * Created by fabballe on 12/05/17.
 */
import { connect } from 'react-redux'
import Header from '../presentational/zoning/Header.js'

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.user.isAuthenticated
    }
};

const MyHeader = connect(
    mapStateToProps
)(Header);

export default MyHeader;
