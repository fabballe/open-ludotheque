/**
 * Created by fabballe on 12/05/17.
 */
import { connect } from 'react-redux'
import Collection from '../presentational/Collection.js'


const getMyComic = () => {
    fetch("http://localhost:8080/comics")
        .then(response => response.json())
        .then(json => {
            if(json !== undefined && json._embedded !== undefined){
                return  json._embedded.comics;
            }
            return [];
        });
};

const mapStateToProps = (state) => {
    return {
        products : getMyComic()
    }
};

const MyComic = connect(
    mapStateToProps
)(Collection);

export default MyComic;
