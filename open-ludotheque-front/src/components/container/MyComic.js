/**
 * Created by fabballe on 12/05/17.
 */
import { connect } from 'react-redux'
import Collection from '../presentational/Collection.js'

const mapStateToProps = (state) => {
    return {
        products : state.comics.products
    }
};

const MyComic = connect(
    mapStateToProps
)(Collection);

export default MyComic;
