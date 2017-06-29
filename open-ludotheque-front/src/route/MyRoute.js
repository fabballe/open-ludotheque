/**
 * Created by fabballe on 12/05/17.
 */
import { connect } from 'react-redux'

import AllRoute from './AllRoute.js'

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
};

export default connect(
    mapStateToProps
)(AllRoute);
