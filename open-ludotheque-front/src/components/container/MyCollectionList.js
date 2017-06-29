/**
 * Created by fabballe on 12/05/17.
 */
import { connect } from 'react-redux'
import CollectionList from '../presentational/collection/CollectionList.js'

import {fetchCollection} from '../../actions/Collection.js'

const mapStateToProps = (state) => {
    return {
        collections: state.collections
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(fetchCollection());
        }
    }
};

const MyCollectionList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionList);

export default MyCollectionList;
