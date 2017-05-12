import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comic from './Comic';
import './Collection.css';

class Collection extends Component {

    //constructor(props){
    //    super(props);
    //    this.state = {
    //        products: [
    //            //{"id": "1", name: "walking dead"},
    //            //{"id": "2", name: "Mutafukaz"},
    //            //{"id": "3", name: "One Piece"}
    //        ]
    //    }
    //}
    //
    //componentDidMount() {
    //    fetch("http://localhost:8080/comics")
    //        .then(response => response.json())
    //        .then(json => {
    //            this.setState({
    //               products: json._embedded.comics
    //            });
    //        });
    //}

    render() {
        return (
            <ul className="Collection">
                {this.props.products.map(function (product) {
                    return <li key={product.name}><Comic name={product.name}/></li>
                })}
            </ul>
        );
    }
}

Collection.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired)
};
//Collection.defaultsProps = {
//    products: [
//        {"id": "1", name: "walking dead"},
//        {"id": "2", name: "Mutafukaz"},
//        {"id": "3", name: "One Piece"}
//    ]
//};

export default Collection;
