import React, { Component } from 'react';
import Comic from './Comic';
import './Collection.css';

class Collection extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [
                //{"id": "1", name: "walking dead"},
                //{"id": "2", name: "Mutafukaz"},
                //{"id": "3", name: "One Piece"}
            ]
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/comics")
            .then(response => response.json())
            .then(json => {
                this.setState({
                   products: json._embedded.comics
                });
            });
    }

    render() {
        return (
            <div className="Collection">
                {this.state.products.map(function (product) {
                    return <Comic key={product.name} name={product.name}/>
                })}
            </div>
        );
    }
}

//Comic.propTypes = {
//    data: PropTypes.arrayOf(PropTypes.element)
//};
//Collection.defaultsProps = {
//    products: [
//        {"id": "1", name: "walking dead"},
//        {"id": "2", name: "Mutafukaz"},
//        {"id": "3", name: "One Piece"}
//    ]
//};

export default Collection;
