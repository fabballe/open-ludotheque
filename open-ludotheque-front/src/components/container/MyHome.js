/**
 * Created by fabballe on 12/05/17.
 */
import { connect } from 'react-redux'
import Home from '../presentational/Home.js'

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.user.isAuthenticated,
        collections: state.collections
    }
};

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onClick: () => {
//            dispatch(logoutUser());
//        }
//    }
//};

const MyHome = connect(
    mapStateToProps
    //mapDispatchToProps
)(Home);

export default MyHome;
