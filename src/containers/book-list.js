import React, { Component } from 'react';
// glue between react and redux for merging
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}</li>
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


// anything retunred from this function will end up
// as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook:selectBook }, dispatch)
}

// promote booklisy from component to cobntainer-
//it needs to know about this new dispatch method
// selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);