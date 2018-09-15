import React, { Component } from 'react';
// glue between react and redux for merging
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title}</li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>    
        )
    }
}

function mapStateToProps(state) {
    // returns an object that will be available in component as this.props
    // whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books       
    };
}

// connect takes a function and componenet and creates a container
// container is a componenet that is aware of the state contained in redux

export default connect(mapStateToProps)(BookList);